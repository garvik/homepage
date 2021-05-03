import Head from "next/head";
import React from "react";
import { Footer } from "./Footer";
import { Main } from "./Main";
import styles from "./Layout.module.scss";

export function Layout(): JSX.Element {
    return (
        <div className={styles.container} data-theme="dark">
            <Head>
                <title>MC</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main className={styles.main}></Main>
            <Footer className={styles.footer}></Footer>
        </div>
    );
}
