import styles from "./loading.module.css";
import Image from "next/image";

export default function Loading() {
  return (
    <div className={styles.contLoading}>
      <Image src="/logo-sb.png" alt="logo-sb-legal" width={340} height={95} />
      <div className={styles.loader}></div>
    </div>
  );
}
