"use client";

import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";
import { useRef, useState, useTransition } from "react";
import ManageSingleProduct from "./ManageSingleProduct";

const ManageProduct = ({ products }) => {
  const modalRef = useRef(null);
  const [updateData, setUpdateData] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);

  const isLoading = isPending || loading;

  const router = useRouter();

  const openModal = (product) => {
    setUpdateData(product);
    modalRef.current.showModal();
  };

  const closeModal = () => {
    setUpdateData(null);
    modalRef.current.close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const data = {
      title,
      price,
    };

    if (title && price) {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:5000/products/${updateData?.id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const result = await res.json();
        console.log(result);

        form.reset();
        closeModal();
        setLoading(false);
        startTransition(() => {
          router.refresh();
        });
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      console.log(result);
      startTransition(() => {
        router.refresh();
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <table
        className={`border-collapse w-full ${
          isLoading ? "opacity-50" : "opacity-100"
        }`}
      >
        <thead>
          <tr>
            <th className="border border-slate-400">Title</th>
            <th className="border border-slate-400">Price</th>
            <th className="border border-slate-400">Update</th>
            <th className="border border-slate-400">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ManageSingleProduct
              openModal={openModal}
              key={product.id}
              product={product}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
      <Modal
        ref={modalRef}
        handleSubmit={handleSubmit}
        closeModal={closeModal}
        updateData={updateData}
      />
    </div>
  );
};

export default ManageProduct;
