import classnames from "classnames";
import React from "react";
import { useSpring, animated } from "react-spring";
import styles from "./Main.module.scss";

function Hand() {
    const props = useSpring({ config: { duration: 2000 }, to: { opacity: 1 }, from: { opacity: 0 } });
    return <animated.span style={props}>👋</animated.span>;
}

type Props = {
    className?: string;
};

export function Main({ className }: Props): JSX.Element {
    return (
        <main className={classnames(className, styles.main)}>
            <p className={styles.description}>
                <Hand></Hand>Hi, I&apos;m
            </p>
            <h1 className={styles.title}>Mike</h1>
            <p>
                Full-stack developer. Likes to experiment with new tech. Cares about little details, optimizations,
                stuff that makes everyday use a little bit better. Mechanical keyboard enthusiast ⌨️.{" "}
                <i>If you can&apos;t hear it from the other side of the room, it&apos;s not clicky enough.</i>
            </p>
            <p>
                Currently working as an architect on a browser-based ERP used by nearly 100 companies. Tech stack
                includes ASP.NET Core MVC, React, AngularJS, and various Azure services.
            </p>
        </main>
    );
}
