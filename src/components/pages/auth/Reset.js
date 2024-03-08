import React from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login3.jpeg";

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="Login" />
      </div>
      <div className={styles.form}></div>
    </section>
  );
};

export default Reset;
