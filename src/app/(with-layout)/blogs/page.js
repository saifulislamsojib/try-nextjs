// "use client";

import loadBlogsData from "@/utils/loadBlogsData";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export const metadata = {
  title: "Blogs | Next Hero",
  description: "Next Hero",
};

// const blogs = [
//   {
//     id: 1,
//     year: 2016,
//     title: "title 1",
//   },
//   {
//     id: 2,
//     year: 2016,
//     title: "title 2",
//   },
//   {
//     id: 3,
//     year: 2016,
//     title: "title 3",
//   },
//   {
//     id: 4,
//     year: 2016,
//     title: "title 4",
//   },
// ];

const BlogsPage = async () => {
  // const router = useRouter();

  const blogs = await loadBlogsData();

  return (
    <div className="container mx-auto p-2 mt-10">
      {blogs.map(({ id, body, title }) => (
        <div key={id} className="border border-blue-500 p-2 my-2">
          <h2 className="text-2xl">
            {id}. {title}
          </h2>
          <p>{body}</p>
          <Link className="inline-block mt-5" href={`/blogs/${id}`}>
            <button className="text-white px-2 py-1 bg-blue-500 focus:right-2 rounded-md">
              Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
