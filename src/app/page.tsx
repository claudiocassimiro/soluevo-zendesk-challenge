"use client";

import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { getNewAdvice } from "@/utils/getNewAdvice";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    getNewAdvice(setAdvice);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {advice ? (
          <>
            <h1 className={inter.className}>{advice}</h1>
            <button
              type="button"
              onClick={() => getNewAdvice(setAdvice)}
              className={styles.generateNewAdviceButton}
            >
              Generate new advice
            </button>
          </>
        ) : (
          <p className={inter.className}>Loading...</p>
        )}
      </div>
    </main>
  );
}
