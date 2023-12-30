import MyButton from './componentes/button/button-verahora/button'
import styles from './page.module.css'
import { Menucolor } from "./Menucolor"
import Image from 'next/image'
import Header from './componentes/header/header'

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1> Bienvenidas a Next.js</h1>
        <MyButton />
        <Image
          src={'/assets/img/logos/logo.png'}
          width={500}
          height={500}
          alt='Logo'
        />


      </main>
    </div>
  )
}
