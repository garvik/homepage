import React from "react";
import styles from "./Footer.module.scss";
import { GithubSvg } from "./GithubSvg";
import { LinkedInSvg } from "./LinkedInSvg";

export function Footer(): JSX.Element {
    return (
        <footer className={styles.footer}>
            <a
                href="https://www.linkedin.com/in/micha%C5%82-cichy-05b65069/"
                className={styles.link}
                target="_blank"
                rel="noreferrer"
            >
                <LinkedInSvg width={30} height={30} />
            </a>
            <a href="https://github.com/garvik" className={styles.link} target="_blank" rel="noreferrer">
                <GithubSvg width={30} height={30} />
            </a>
        </footer>
    );
}
