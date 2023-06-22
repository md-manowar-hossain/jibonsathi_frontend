import * as React from "react";
import styles from "../assests/css/Container.module.css";

export default function Container(children) {
  return <div className={styles.container}>{children}</div>;
}
