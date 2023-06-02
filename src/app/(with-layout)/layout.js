import Navbar from "@/components/Navbar";

const WithLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default WithLayout;
