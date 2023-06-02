// "use client";

import Link from "next/link";
// import { useRouter } from "next/navigation";

export const metadata = {
  title: "Blogs | Next Hero",
  description: "Next Hero",
};

const blogs = [
  {
    id: 1,
    year: 2016,
    title: "title 1",
  },
  {
    id: 2,
    year: 2016,
    title: "title 2",
  },
  {
    id: 3,
    year: 2016,
    title: "title 3",
  },
  {
    id: 4,
    year: 2016,
    title: "title 4",
  },
];

const BlogsPage = () => {
  // const router = useRouter();

  return (
    <div className="container mx-auto p-2">
      {blogs.map(({ id, year, title }) => (
        <Link
          className="block border border-blue-500 p-2 my-2"
          href={{
            pathname: `/blogs/${year}/${id}`,
            query: {
              title: title,
            },
          }}
          // onClick={() => router.push(`/blogs/${year}/${id}?title=${title}`)}
          key={id}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default BlogsPage;
