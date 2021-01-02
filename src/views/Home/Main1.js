import { CardMedia, Grid } from "@material-ui/core";
import React from "react";
import styles from "./Main1.module.css";
import LeftImage1 from "../../assets/images/Home/LeftImage1.webp";
import RightImage1 from "../../assets/images/Home/RightImage1.webp";
import RightImage2 from "../../assets/images/Home/RightImage2.webp";
import RightImage3 from "../../assets/images/Home/RightImage3.webp";
import RightImage4 from "../../assets/images/Home/RightImage4.webp";
import RightImage5 from "../../assets/images/Home/RightImage5.webp";
import RightImage6 from "../../assets/images/Home/RightImage6.webp";

const Main1 = () => {
  return (
    <div id="howitworks" className={styles.container}>
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
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <div className={styles.carts}>
            <div className={styles.cartsLeft}>
              <p className={styles.leftWrap}>
                Use mixed grid with imagery, replace with your own photos and
                descriptions
              </p>
              <div className={styles.leftImgContainer}>
                <div className={styles.leftImg1Text}>
                  <h1>We aimed to deliver HQ templates for Figma</h1>
                  <p>Used by 123 people</p>
                </div>
                <img
                  className={styles.leftImg1}
                  src={LeftImage1}
                  alt="card-1"
                  loading="lazy"
                />
              </div>
              <a href="#" className={styles.button}>
                Learn more
              </a>
            </div>
            <div className={styles.cartsRight}>
              <div className={styles.topBox}>
                <div className={styles.rightImgContainer1}>
                  <div className={styles.rightImg1Text}>
                    <h1>Consider it done!</h1>
                  </div>
                  <img
                    className={styles.rightImg1}
                    src={RightImage1}
                    alt="card-1"
                    loading="lazy"
                  />
                </div>
                <div className={styles.topBoxInContainer}>
                  <div className={styles.boxInRow1}>
                    <p>
                      This is multipurpose grid, it fits for portfolio, services
                      or agency web site
                    </p>
                  </div>
                  <div className={styles.boxInRow2}>
                    <div className={styles.rightImgContainer2}>
                      <img
                        className={styles.rightImg2}
                        src={RightImage2}
                        alt="card-2"
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.rightImgContainer2}>
                      <img
                        className={styles.rightImg2}
                        src={RightImage3}
                        alt="card-3"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bottomBox}>
                <div className={styles.rightImgContainer4}>
                  <img
                    className={styles.rightImg4}
                    src={RightImage4}
                    alt="card-4"
                    loading="lazy"
                  />
                </div>
                <div className={styles.rightImgContainer5}>
                  <div className={styles.rightImg5Text}>
                    <h1>See my goal?</h1>
                  </div>
                  <img
                    className={styles.rightImg5}
                    src={RightImage5}
                    alt="card-5"
                    loading="lazy"
                  />
                </div>
                <div className={styles.rightImgContainer6}>
                  <img
                    className={styles.rightImg6}
                    src={RightImage6}
                    alt="card-6"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main1;
