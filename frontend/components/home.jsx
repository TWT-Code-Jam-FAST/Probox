import styles from "../styles/Home.module.css";
import Link from "next/link";
import React from "react";

export default function HomePageMain() {
  const res = fetch('https://probox.vercel.app/api/time').then(x => x.json());

  return (
    <main className={styles.main}>
      <h2>Hello, Probox!</h2>

      <Link href="/api/time">This is a simple api (Click me)</Link>
      <h3>{res.toString()}</h3>
    </main>
  );
}
