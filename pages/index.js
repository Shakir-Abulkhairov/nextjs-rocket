import Image from 'next/image';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
export default function Home() {
  return (
    <div className={styles.container}>
  
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/about"><a>Moons</a></Link>
        </h1>
            <a href='https://en.wikipedia.org/wiki/Black_hole'>
              <div>
                  <Image
                      className={styles.img}
                      src='/img/blackhole.jpg'
                      width={500}
                      height={500} />
              </div>
            </a>

        <div className={styles.grid}>
          <Link href="/planets" >
              <a className={styles.card}>
                <h2>All about moons &rarr;</h2>
                <p>Travel straight into space!</p>
              </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
