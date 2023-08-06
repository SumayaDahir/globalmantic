import {Open_Sans} from "@next/font/google";
import Link from "next/link";
import styles from './rootStyle.module.css'

const openSans = Open_Sans({
  subsets: ["latin"],
  weight:["500",]
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <head/>
      <body>
        <header className={styles.header}>
        <h1 >
        <Link className={styles.homeLink} href='/home'> Globalmantics </Link>
        </h1>
      <h2> <Link className={styles.menuBarLink} href="/blog"> Blog </Link> </h2>
    <h2> <Link  className={styles.menuBarLink} href="/conference"> Conference </Link> </h2>
<h2><Link  className={styles.menuBarLink} href="/settings"> Settings </Link></h2>
</header>
        {children}
        </body>
    </html>
  );
}

