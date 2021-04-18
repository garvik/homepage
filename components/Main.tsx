import React from "react";
import { useSpring, animated } from "react-spring";
import styles from "./Main.module.scss";

function Hand() {
    const props = useSpring({ config: { duration: 2000 }, to: { opacity: 1 }, from: { opacity: 0 } });
    return <animated.span style={props}>👋</animated.span>;
}

export function Main(): JSX.Element {
    return (
        <main className={styles.main}>
            <p className={styles.description}>
                <Hand></Hand>Hi, I&apos;m
            </p>
            <h1 className={styles.title}>Mike</h1>
        </main>
    );
}
