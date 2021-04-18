import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";

export default function Home(): JSX.Element {
    return (
        <div className={styles.container}>
            <Head>
                <title>MC</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}
