import Navbar from "@/components/Navbar";

const WithLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer className="container mx-auto mt-10">Footer</footer>
    </div>
  );
};

export default WithLayout;
