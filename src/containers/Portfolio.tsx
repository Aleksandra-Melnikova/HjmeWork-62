import { Link, Outlet } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <div className="container mb-5">
        <h3 className="m-5 text-center">
          Here are my homework assignments at the school of attractors, click to
          see their completion
        </h3>
        <Link
          to="/Portfolio/CountryPage"
          className="btn btn-dark m-5 p-4 w-25 "
        >
          View homework "countries"
        </Link>
        <Link to="/Portfolio/Chat" className="btn btn-dark m-5 p-4 w-25 ">
          View homework "chat"
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
};

export default Portfolio;
