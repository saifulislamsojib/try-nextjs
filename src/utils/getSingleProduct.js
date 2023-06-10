import wait from "./wait";

const getSingleProduct = async (id) => {
  await wait();

  const res = await fetch(`http://localhost:5000/products/${id}`, {
    cache: "no-cache",
  });
  return res.json();
};

export default getSingleProduct;
