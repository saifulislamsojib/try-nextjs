import Link from "next/link";

const SingleCategory = ({ category }) => {
  const { id, name } = category;

  return (
    <Link
      className="border border-blue-500 p-3 rounded-lg shadow-lg"
      href={`/products?categoryId=${id}`}
    >
      <h3 className="font-medium text-lg">{name}</h3>
    </Link>
  );
};

export default SingleCategory;
