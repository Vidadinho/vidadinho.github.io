import React from "react";
import styles from "./Admin.module.scss";
import { Route, Routes } from "react-router-dom";

import Navbar from "../../components/admin/navbar/Navbar";
import ViewProducts from "../../components/admin/viewPoducts/ViewProducts";
import AddProduct from "../../components/admin/addProducts/AddProduct";
import Orders from "../../components/admin/orders/Orders";
import Home from "../../components/admin/home/Home";
import OrderDetails from "../../components/admin/orderDetails/OrderDetails";

const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="all-products" element={<ViewProducts />} />
          <Route path="add-product/:id" element={<AddProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="/order-details/:id" element={<OrderDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
