import { createMuiTheme, Grid, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import styles from "./Main3.module.css";

const Main3 = () => {
  const theme = createMuiTheme({
    // breakpoints: {
    //   keys: ["xs", "sm", "md", "lg", "xl"],
    //   values: {
    //     xs: 0,
    //     sm: 0,
    //     md: 990,
    //     lg: 1280,
    //     xl: 1440,
    //   },
    // },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <div className={styles.containerForEm}>
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
          <Grid container spacing={2}>
            <Grid item md={4}>
              <div className={styles.cartContainer}>
                <div className={styles.head}>
                  <div className={styles.packageModal}>
                    <p>👤 Individual</p>
                  </div>
                  <p className={styles.tag}>BEST!</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default Main3;
