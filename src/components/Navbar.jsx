import NavLink from "./NavLink";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/products",
    title: "Products",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold">Next Hero</h1>
      <ul className="flex items-center justify-center">
        {navLinks.map(({ path, title }) => (
          <li className="mx-2" key={path}>
            <NavLink
              exact={path === "/"}
              activeClassName="text-blue-500"
              href={path}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
