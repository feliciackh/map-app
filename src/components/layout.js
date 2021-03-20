import Image from "next/image";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import React from "react";

const name = "Felicia C";
export const siteTitle = "Felicia C";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/images/FC_ProfilePic.png"
          className={utilStyles.borderCircle}
          height={72}
          width={72}
          alt={name}
        />
        <h1 className={utilStyles.heading}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
