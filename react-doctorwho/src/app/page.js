import MyButton from './componentes/Button/Button-verahora/Button'
import styles from './page.module.css'
import Image from 'next/image'
import Header from './componentes/Header/Header'


export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1> Bienvenidas a Next.js</h1>
        <MyButton />

        <MenuColor />

      </main>
    </div>
  )
}
