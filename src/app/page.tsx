
import styles from './page.module.css'
export default function Home() {
  return (
    <main className={styles.main}>
     <img src='../homescreen_picture.jpg' 
     width="120%"
     height="800"/>

.layer {
    background-color: rgba(248, 247, 216, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
    </main>
  )
}
