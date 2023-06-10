import loadBlogsData from "@/utils/loadBlogsData";
import loadSingleBlogData from "@/utils/loadSingleBlogData";

export const generateMetadata = async ({ params }) => {
  const { title } = await loadSingleBlogData(params.id);

  return {
    title: title,
  };
};

export const generateStaticParams = async () => {
  const blogs = await loadBlogsData();

  return blogs.map(({ id }) => ({
    id: id.toString(),
  }));
};

const SingleBlog = async ({ params }) => {
  const { id, title, body } = await loadSingleBlogData(params.id);

  return (
    <div className="border border-blue-500 p-2 my-2 mx-2">
      <h2 className="text-2xl">
        {id}. {title}
      </h2>
      <p>{body}</p>
    </div>
  );
};

export default SingleBlog;
