import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.test}>
      <Image
        src="/logo.png"
        width={1009}
        height={219}
        className={styles.logo}
      />
      <h1>My Site</h1>
    </header>
  );
};

export default Header;
