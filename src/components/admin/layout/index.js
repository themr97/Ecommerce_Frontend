import React, { Fragment, useState } from "react";

import AdminNavber from "../partials/AdminNavber";
import AdminSidebar from "../partials/AdminSidebar";
import AdminFooter from "../partials/AdminFooter";

const AdminLayout = ({ children }) => {

  const [show, setShow] = useState(true);

  const toggle = () => {
    setShow(!show);
  }
  return (
    <Fragment>
      <AdminNavber toggle={toggle} />
      <section className="flex bg-gray-100">
        <AdminSidebar show={show} />
        <div className="w-full md:w-11/12 h-full">
          {children}
        </div>
      </section>
      <AdminFooter />
    </Fragment>
  );
};

export default AdminLayout;
