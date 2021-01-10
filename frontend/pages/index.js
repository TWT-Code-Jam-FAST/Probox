import styles from "../styles/Home.module.css";
import React from "react";
import HomePageMain from "../components/home";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <HomePageMain />
      </div>
    </>
  );
}
