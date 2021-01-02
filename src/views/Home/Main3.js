import { createMuiTheme, Grid, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import styles from "./Main3.module.css";
import iconcheck from "../../assets/images/Home/icons/icon-check.svg";
import wiggle from "../../assets/images/Home/wiggle.webp";

const Main3 = () => {
  const theme = createMuiTheme({
    breakpoints: {
      keys: ["xs", "sm", "md", "lg", "xl"],
      values: {
        xs: 0,
        sm: 400,
        md: 1130,
        lg: 1280,
        xl: 1440,
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <div id="whatwedo" className={styles.containerForEm}>
        <div className={styles.container}>
          <Grid container>
            <Grid item xs={12}>
              <h1 className={styles.head1}>Affordable pricing</h1>
            </Grid>
            <Grid item xs={12}>
              <p className={styles.head2}>
                Bill me&nbsp;
                <span className={styles.head2Span}>monthly</span> • yearly
              </p>
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={2}>
            <Grid item align="center" md={4}>
              <div className={styles.cartContainer}>
                <div>
                  <div className={styles.head}>
                    <div className={styles.packageModal}>
                      <p>Trial</p>
                    </div>
                    <p></p>
                  </div>
                  <h1 className={styles.priceDetail}>
                    FREE <span>/ FOREVER</span>
                  </h1>
                  <ul className={styles.ul}>
                    <li className={styles.li}>
                      <div id={styles.gray} className={styles.iconBG}>
                        <img src={iconcheck} alt="Icon Check" loading="lazy" />
                      </div>
                      Components-driven system
                    </li>
                    <li className={styles.li}>
                      <div id={styles.gray} className={styles.iconBG}>
                        <img src={iconcheck} alt="Icon Check" loading="lazy" />{" "}
                      </div>
                      Sales-boosting landing pages
                    </li>
                    <li className={styles.li}>
                      <div id={styles.gray} className={styles.iconBG}>
                        <img src={iconcheck} alt="Icon Check" loading="lazy" />{" "}
                      </div>
                      Awesome Feather icons pack
                    </li>
                  </ul>
                </div>

                <a href="#" className={styles.button}>
                  Try for free
                </a>
              </div>
            </Grid>

            <Grid item align="center" md={4}>
              <div id={styles.cartShadow} className={styles.cartContainer}>
                <div>
                  <div className={styles.head}>
                    <div className={styles.packageModal}>
                      <p>👤 Individual</p>
                    </div>
                    <p className={styles.tag}>BEST!</p>
                  </div>
                  <h1 className={styles.priceDetail}>
                    $24 <span>/ MONTH</span>
                  </h1>
                  <ul className={styles.ul}>
                    <li className={styles.li}>
                      <div id={styles.yellow} className={styles.iconBG}>
                        <img src={iconcheck} alt="Icon Check" loading="lazy" />
                      </div>
                      Components-driven system
                    </li>
                    <li className={styles.li}>
                      <div id={styles.yellow} className={styles.iconBG}>
                        <img src={iconcheck} alt="Icon Check" loading="lazy" />{" "}
                      </div>
                      Sales-boosting landing pages
                    </li>
                    <li className={styles.li}>
                      <div id={styles.yellow} className={styles.iconBG}>
                        <img src={iconcheck} alt="Icon Check" loading="lazy" />{" "}
                      </div>
                      Awesome Feather icons pack
                    </li>
                    <li className={styles.li}>
                      <div id={styles.yellow} className={styles.iconBG}>
                        <img src={iconcheck} alt="Icon Check" loading="lazy" />{" "}
                      </div>
                      Themed into 3 different styles
                    </li>
                    <li className={styles.li}>
                      <div id={styles.yellow} className={styles.iconBG}>
                        <img src={iconcheck} alt="Icon Check" loading="lazy" />{" "}
                      </div>
                      Will help to learn Figma
                    </li>
                  </ul>
                </div>
                <a href="#" id={styles.buttonPurple} className={styles.button}>
                  Regular license
                </a>
              </div>
            </Grid>
            <Grid item align="center" md={4}>
              <div className={styles.cartContainer}>
                <div>
                  <div className={styles.head}>
                    <div className={styles.packageModal}>
                      <p>👥 Corporate</p>
                    </div>
                    <p></p>
                  </div>
                  <h1 className={styles.priceDetail}>
                    $12 <span>/ EDITOR</span>
                  </h1>
                  <ul className={styles.ul}>
                    <li className={styles.li}>
                      <div id={styles.green} className={styles.iconBG}>
                        <img src={iconcheck} alt="Icon Check" loading="lazy" />
                      </div>
                      Components-driven system
                    </li>
                    <li className={styles.li}>
                      <div id={styles.green} className={styles.iconBG}>
                        <img src={iconcheck} alt="Icon Check" loading="lazy" />{" "}
                      </div>
                      Sales-boosting landing pages
                    </li>
                    <li className={styles.li}>
                      <div id={styles.green} className={styles.iconBG}>
                        <img src={iconcheck} alt="Icon Check" loading="lazy" />{" "}
                      </div>
                      Awesome Feather icons pack
                    </li>
                    <li className={styles.li}>
                      <div id={styles.green} className={styles.iconBG}>
                        <img src={iconcheck} alt="Icon Check" loading="lazy" />{" "}
                      </div>
                      Themed into 3 different styles
                    </li>
                  </ul>
                </div>
                <a href="#" className={styles.button}>
                  Extended license
                </a>
              </div>
            </Grid>
          </Grid>
          <img
            className={styles.wiggle}
            src={wiggle}
            alt="wiggle"
            loading="lazy"
          />
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default Main3;
