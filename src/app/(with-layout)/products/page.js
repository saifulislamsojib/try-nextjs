import getAllProducts from "@/utils/getAllProducts";
import SingleProduct from "./SingleProduct";

const ProductsPage = async ({ searchParams }) => {
  const products = await getAllProducts(searchParams.categoryId);

  return (
    <div className="mt-10 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
