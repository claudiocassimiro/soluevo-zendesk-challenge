"use client";

import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [advice, setAdvice] = useState("");

  const getNewAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");

      const data = await response.json();

      const { slip } = data;

      setAdvice(slip.advice);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNewAdvice();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={inter.className}>{advice}</h1>
        <button
          type="button"
          onClick={getNewAdvice}
          className={styles.generateNewAdviceButton}
        >
          Generate new advice
        </button>
      </div>
    </main>
  );
}
