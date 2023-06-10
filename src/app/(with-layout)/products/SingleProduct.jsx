import Link from "next/link";

const SingleProduct = ({ product }) => {
  const { id, title, price, imageUrl } = product;

  return (
    <div className="p-3 shadow-lg rounded-lg">
      <h1 className="text-xl font-medium">{title}</h1>
      <h5>$ {price}</h5>
      <Link href={`/products/${id}`}>
        <button className="px-3 py-2 bg-blue-500 text-white focus:ring-2 rounded-md">
          Details
        </button>
      </Link>
    </div>
  );
};

export default SingleProduct;
