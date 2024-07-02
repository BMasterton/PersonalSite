import { Outlet, Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav p-2">
            <li class="nav-item p-1">
              <Link className="nav-bar-link" to="/"><FaHouse/></Link>
            </li>
            <li class="nav-item p-1 ps-3">
              <Link className="nav-bar-link" to="/Counter">Counter</Link>
            </li>
            <li class="nav-item p-1 ps-3">
              <Link className="nav-bar-link"to="/APIRequest">APIRequests</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;