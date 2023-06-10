import getSingleProduct from "@/utils/getSingleProduct";

const SingleProductPage = async ({ params }) => {
  const { title, price } = await getSingleProduct(params.id);

  return (
    <div className="mt-10 container mx-auto px-1">
      <h1 className="text-2xl font-medium">{title}</h1>
      <h5>$ {price}</h5>
    </div>
  );
};

export default SingleProductPage;
