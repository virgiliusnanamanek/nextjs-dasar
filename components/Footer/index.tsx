/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <p className={styles.text}>
        it was created by
        {' '}
        <a href="https://github.com/virgiliusnanamanek">github</a>
      </p>
    </footer>
  );
}
