import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home(): JSX.Element {
    return (
        <div className={styles.container}>
            <Head>
                <title>MC</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <p className={styles.description}>Hi, I&apos;m</p>
                <h1 className={styles.title}>Mike</h1>
            </main>
        </div>
    );
}
