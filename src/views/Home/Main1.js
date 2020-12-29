import { Grid } from "@material-ui/core";
import React from "react";
import styles from "./Main1.module.css";
import LeftImage1 from "../../assets/images/Home/LeftImage1.webp";

const Main1 = () => {
  return (
    <div className={styles.container}>
      <Grid container>
        <Grid item xs={12} className={styles.txtLine}>
          <h1 className={styles.h1_1}>
            Combine&nbsp;
            <span class={styles.redText}>
              fine <span> </span>
            </span>
            images
          </h1>
          <br />
          <h1 className={styles.h1_2}>To represent a product</h1>
        </Grid>
        <Grid item xs={4} className={styles.cartsLeft} direction="column">
          <p className={styles.leftWrap}>
            Use mixed grid with imagery, replace with your own photos and
            descriptions
          </p>
          <div className={styles.leftImg}></div>
          <a href="#" className={styles.button}>
            Learn more
          </a>
        </Grid>
        <Grid item xs={8} className={styles.cartsRight}></Grid>
      </Grid>
    </div>
  );
};

export default Main1;
