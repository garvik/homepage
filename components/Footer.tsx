import classnames from "classnames";
import React from "react";
import styles from "./Footer.module.scss";
import { GithubSvg } from "./GithubSvg";
import { LinkedInSvg } from "./LinkedInSvg";

type Props = {
    className?: string;
};

export function Footer({ className }: Props) {
    return (
        <footer className={classnames(className, styles.footer)}>
            <a href="https://www.linkedin.com/in/-cichy/" className={styles.link} target="_blank" rel="noreferrer">
                {" "}
                <LinkedInSvg width={30} height={30} />
            </a>
            <a href="https://github.com/garvik" className={styles.link} target="_blank" rel="noreferrer">
                <GithubSvg width={30} height={30} />
            </a>
        </footer>
    );
}
