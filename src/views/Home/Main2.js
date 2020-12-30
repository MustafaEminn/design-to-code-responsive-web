import { createMuiTheme, Grid, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import styles from "./Main2.module.css";
import phone from "../../assets/images/Home/icons/icon-phone-call.webp";
import pie from "../../assets/images/Home/icons/icon-pie-chart.webp";
import thumbs from "../../assets/images/Home/icons/icon-thumbs-up.webp";
import zap from "../../assets/images/Home/icons/icon-zap.webp";

const Main2 = () => {
  const theme = createMuiTheme({
    breakpoints: {
      keys: ["xs", "sm", "md", "lg", "xl"],
      values: {
        xs: 0,
        sm: 0,
        md: 990,
        lg: 1280,
        xl: 1440,
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <div className={styles.containerForEm}>
        <div className={styles.container}>
          <Grid container>
            <Grid item xs={12}>
              <h1 className={styles.head1}>
                Delivering good designs since 1954 🚚💨
              </h1>
            </Grid>
            <Grid item xs={12}>
              <p className={styles.headP}>
                We’re the first multi-purpose design kit solutions for
                businesses. We help you bridge gaps between your layouts,
                templates and developers to empower all involved.
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={3} sm={6} className={styles.cartContainer}>
              <div className={styles.cart}>
                <div className={styles.iconBG1}>
                  <img src={phone} alt="Icon" loading="lazy" />
                </div>
                <h1 className={styles.cartH1}>Support</h1>
                <p className={styles.cartP}>
                  Delivering faster and more personalized support with shared
                  screens and cool design systems for Figma
                </p>
              </div>
              <a href="#" className={styles.cartButton}>
                Learn more
              </a>
            </Grid>
            <Grid item md={3} sm={6} className={styles.cartContainer}>
              <div className={styles.cart}>
                <div className={styles.iconBG2}>
                  <img src={pie} alt="Icon" loading="lazy" />
                </div>
                <h1 className={styles.cartH1}>Sales growth</h1>
                <p className={styles.cartP}>
                  Identify qualified customers with easy-to-use live chat
                  messaging and AI-based Sales Bot
                </p>
              </div>
              <a href="#" className={styles.cartButton}>
                Learn more
              </a>
            </Grid>
            <Grid item md={3} sm={6} className={styles.cartContainer}>
              <div className={styles.cart}>
                <div className={styles.iconBG3}>
                  <img src={zap} alt="Icon" loading="lazy" />
                </div>
                <h1 className={styles.cartH1}>Coponents-driven</h1>
                <p className={styles.cartP}>
                  Delivering faster and more personalized support with shared
                  screens and cool design systems for Figma
                </p>
              </div>
              <a href="#" className={styles.cartButton}>
                Learn more
              </a>
            </Grid>
            <Grid item md={3} sm={6} className={styles.cartContainer}>
              <div className={styles.cart}>
                <div className={styles.iconBG4}>
                  <img src={thumbs} alt="Icon" loading="lazy" />
                </div>
                <h1 className={styles.cartH1}>Swap the icon</h1>
                <p className={styles.cartP}>
                  You can toggle to any icon within Instances and customize
                  outlined stroke to more bolder or lighter
                </p>
              </div>
              <a href="#" className={styles.cartButton}>
                Learn more
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default Main2;
