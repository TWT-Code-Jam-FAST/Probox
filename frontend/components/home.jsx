import styles from "../styles/Home.module.css";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Hello, Probox!</h2>

      <Link href="/api/time">This is a simple api (Click me)</Link>
    </main>
  );
}
