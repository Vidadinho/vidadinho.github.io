import React from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login3.jpeg";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="Login" width="400" />
      </div>
      <div className={styles.form}>
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Comfirm Password" required />
          <button type="submit" className="--btn --btn-primary --btn-block">
            Login
          </button>
          <div className={styles.link}>
            <Link to="/reset">Reset Password</Link>
            <p>-- or --</p>
          </div>
        </form>
        <button type="submit" className="--btn --btn-danger --btn-block">
          <FaGoogle color="#fff" />
          Login With Google
        </button>
      </div>
    </section>
  );
};

export default Login;
