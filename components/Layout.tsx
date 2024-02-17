import Head from "next/head";
import React from "react";
import { Footer } from "./Footer";
import styles from "./Layout.module.scss";
import { Main } from "./Main";

export function Layout() {
    return (
        <div className={styles.container} data-theme="dark">
            <Head>
                <title>MC</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main className={styles.main} />
            <Footer className={styles.footer} />
        </div>
    );
}
