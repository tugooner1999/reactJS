import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              aria-current="page"
              to="/"
              activeClassName="active"
              exact
            >
              <span data-feather="home" />
              Quản lý
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/product"
              activeClassName="active"
              exact
            >
              <span data-feather="shopping-cart" />
              Sản phẩm
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/product/add"
              activeClassName="active"
              exact
            >
              <span data-feather="users" />
              Thêm sản phẩm
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}