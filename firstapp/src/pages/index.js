import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Input from './_input'
import Video from './_video'
import Form from './_form'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <Video></Video>          
        </div>
        <div className={styles.input}>
          <Input />
          <Form></Form>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className="footer-copyright text-center text-light py-3">© 2023 Copyright: Cinthia Orona. Made with
          <a> <i className="fas fa-heart"></i> </a>
        </div>
      </footer>
    </>
  )
}
