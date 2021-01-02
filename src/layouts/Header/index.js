import { Grid } from "@material-ui/core";
import React, { useRef, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/Layout/Header/icon.webp";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Grid container>
        {/* LOGO */}
        <Grid item xs={2} className={styles.logoContainer}>
          <div
            className={styles.bar}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <MenuIcon />
          </div>

          <img
            src={logo}
            loading="lazy"
            alt="Logo"
            className={styles.logoimage}
          />
          <h3 className={styles.logoText}>Grid</h3>
        </Grid>
        {/* NAVBAR */}
        <Grid justify="center" item xs={8} className={styles.navbarContainer}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a href="#howitworks">How it works</a>
            </li>
            <span className={styles.yellowdot}>.</span>
            <li className={styles.li}>
              <a href="#whoweare">Who we are</a>
            </li>
            <span className={styles.yellowdot}>.</span>
            <li className={styles.li}>
              <a href="#whatwedo">What we do</a>
            </li>
            <span className={styles.yellowdot}>.</span>
            <li className={styles.li}>
              <a href="#contactus">Contact us</a>
            </li>
          </ul>
        </Grid>
        {/* Sign In */}
        <Grid item xs={2} className={styles.buttonContainer}>
          <a href="#" className={styles.button}>
            Sign In
          </a>
        </Grid>
      </Grid>

      {/* SIDEBAR */}
      <div id={isOpen ? "active" : ""} className={styles.sidebar}>
        <ul className={styles.sideUL}>
          <li
            className={styles.sideClose}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <CloseIcon fontSize="large" />
          </li>
          <li className={styles.li}>
            <a
              href="#howitworks"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              How it works
            </a>
          </li>
          <span className={styles.yellowdot}>.</span>
          <li className={styles.li}>
            <a
              href="#whoweare"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Who we are
            </a>
          </li>
          <span className={styles.yellowdot}>.</span>
          <li className={styles.li}>
            <a
              href="#whatwedo"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              What we do
            </a>
          </li>
          <span className={styles.yellowdot}>.</span>
          <li className={styles.li}>
            <a
              href="#contactus"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
