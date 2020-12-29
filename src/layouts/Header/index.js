import {
  Button,
  createMuiTheme,
  Grid,
  MuiThemeProvider,
} from "@material-ui/core";
import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/Layout/Header/icon.webp";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(window.pageXOffset);

  const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 670,
        // md: 600,
        // lg: 900,
        // xl: 1200
      },
    },
  });

  return (
    <div className={styles.container}>
      <MuiThemeProvider theme={theme}>
        <Grid container>
          {/* LOGO */}
          <Grid item xs={3} sm={3} className={styles.logoContainer}>
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
          <Grid item xs={5} sm={7} className={styles.navbarContainer}>
            <ul className={styles.ul}>
              <li className={styles.li}>How it works</li>
              <span className={styles.yellowdot}>.</span>
              <li className={styles.li}>Who we are</li>
              <span className={styles.yellowdot}>.</span>
              <li className={styles.li}>What we do</li>
              <span className={styles.yellowdot}>.</span>
              <li className={styles.li}>Contact us</li>
            </ul>
          </Grid>
          {/* Sign In */}
          <Grid item xs={4} sm={2} className={styles.buttonContainer}>
            <a href="#" className={styles.button}>
              Sign In
            </a>
          </Grid>
        </Grid>
      </MuiThemeProvider>
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
          <li className={styles.li}>How it works</li>
          <li className={styles.li}>Who we are</li>
          <li className={styles.li}>What we do</li>
          <li className={styles.li}>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
