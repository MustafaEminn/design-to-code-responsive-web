import {
  createMuiTheme,
  Grid,
  MuiThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import iconfacebook from "../../assets/images/Layout/Contact/icons/icon-facebook.svg";
import iconlinkedin from "../../assets/images/Layout/Contact/icons/icon-linkedin.svg";
import iconslack from "../../assets/images/Layout/Contact/icons/icon-slack.svg";
import icontwitter from "../../assets/images/Layout/Contact/icons/icon-twitter.svg";
import iconuser from "../../assets/images/Layout/Contact/icons/icon-user.svg";
import iconuserpurple from "../../assets/images/Layout/Contact/icons/icon-user-purple.svg";
import iconedit from "../../assets/images/Layout/Contact/icons/icon-edit.svg";
import iconeditpurple from "../../assets/images/Layout/Contact/icons/icon-edit-purple.svg";
import iconmail from "../../assets/images/Layout/Contact/icons/icon-mail.svg";
import iconmailpurple from "../../assets/images/Layout/Contact/icons/icon-mail-purple.svg";

const Contact = () => {
  const [focusInput, setFocusInput] = useState();
  const mediaQuery840 = useMediaQuery("(max-width:840px)");

  const theme = createMuiTheme({
    breakpoints: {
      keys: ["xs", "sm", "md", "lg", "xl"],
      values: {
        xs: 0,
        sm: 780,
        md: 1130,
        lg: 1280,
        xl: 1440,
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <div id="contactus" className={styles.containerForEm}>
        <div className={styles.container}>
          <Grid container>
            <Grid item align={mediaQuery840 ? "center" : "left"} xs={12} sm={6}>
              <h4 className={styles.h4}>FOLLOW US</h4>
              <ul className={styles.socialUl}>
                <li className={styles.socialLi}>
                  <a href="#">
                    <img
                      src={iconfacebook}
                      alt="Facebook Icon"
                      loading="lazy"
                    />
                  </a>
                </li>
                <li className={styles.socialLi}>
                  <a href="#">
                    <img
                      src={iconlinkedin}
                      alt="Linkedin Icon"
                      loading="lazy"
                    />
                  </a>
                </li>
                <li className={styles.socialLi}>
                  <a href="#">
                    <img src={iconslack} alt="Slack Icon" loading="lazy" />
                  </a>
                </li>
                <li className={styles.socialLi}>
                  <a href="#">
                    <img src={icontwitter} alt="Twitter Icon" loading="lazy" />
                  </a>
                </li>
              </ul>
            </Grid>
            <Grid item align={mediaQuery840 ? "center" : "left"} xs={12} sm={6}>
              <h4 id={styles.emailMargin} className={styles.h4}>
                FOLLOW US
              </h4>
              <h1 className={styles.companyMail}>hello@fapsterapp.com</h1>
            </Grid>
          </Grid>

          <Grid container className={styles.containerBottom}>
            <Grid item align={mediaQuery840 ? "center" : "left"} xs={12} sm={6}>
              <h4 className={styles.h4}>INFORMATION</h4>
              <div className={styles.linksContainer}>
                <ul className={styles.linksUl}>
                  <li className={styles.linksLi}>
                    <a href="#">About Fapster app</a>
                  </li>
                  <li className={styles.linksLi}>
                    <a href="#">Get in Touch</a>
                  </li>
                  <li className={styles.linksLi}>
                    <a href="#">Things We Like</a>
                  </li>
                </ul>
                <ul className={styles.linksUl}>
                  <li className={styles.linksLi}>
                    <a href="#">Onhovered / Active</a>
                  </li>

                  <li className={styles.linksLi}>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className={styles.linksLi}>
                    <a href="#">Terms of Service</a>
                  </li>
                </ul>
                <ul className={styles.linksUl}>
                  <li className={styles.linksLi}>
                    <a href="#">We are hiring!</a>
                  </li>
                  <li className={styles.linksLi}>
                    <a href="#">Resources</a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item align={mediaQuery840 ? "center" : "left"} xs={12} sm={6}>
              <div className={styles.formContainer}>
                <h4 className={styles.h4}>KEEP IN TOUCH</h4>
                <form className={styles.form}>
                  <div className={styles.formTop}>
                    <div className={styles.inputContainer1}>
                      {focusInput === 1 ? (
                        <img src={iconuserpurple} alt="Icon User" />
                      ) : (
                        <img src={iconuser} alt="Icon User" />
                      )}

                      <input
                        className={styles.yourName}
                        id={styles.smallInput}
                        type="text"
                        spellCheck="false"
                        placeholder="Your name"
                        onFocus={() => {
                          setFocusInput(1);
                        }}
                        onBlur={() => {
                          setFocusInput(null);
                        }}
                      />
                    </div>
                    <div className={styles.inputContainer1}>
                      {focusInput === 2 ? (
                        <img src={iconmailpurple} alt="Icon Mail" />
                      ) : (
                        <img src={iconmail} alt="Icon Mail" />
                      )}

                      <input
                        className={styles.yourName}
                        id={styles.smallInput}
                        type="text"
                        spellCheck="false"
                        placeholder="E-mail"
                        onFocus={() => {
                          setFocusInput(2);
                        }}
                        onBlur={() => {
                          setFocusInput(null);
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.formBottom}>
                    <div className={styles.inputContainer2}>
                      {focusInput === 3 ? (
                        <img src={iconeditpurple} alt="Edit" />
                      ) : (
                        <img src={iconedit} alt="Edit" />
                      )}

                      <textarea
                        className={styles.yourName}
                        id={styles.largeInput}
                        aria-rowcount={10}
                        spellCheck="false"
                        placeholder="Leave your message"
                        onFocus={() => {
                          setFocusInput(3);
                        }}
                        onBlur={() => {
                          setFocusInput(null);
                        }}
                      />
                    </div>
                    <a href="#" className={styles.button}>
                      SEND
                    </a>
                  </div>
                </form>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default Contact;
