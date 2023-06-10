const getAllCategories = async () => {
  // const res = await fetch("http://localhost:5000/categories", {
  //   next: {
  //     revalidate: 5,
  //   },
  // });

  const res = await fetch("http://localhost:5000/categories");
  return res.json();
};

export default getAllCategories;
