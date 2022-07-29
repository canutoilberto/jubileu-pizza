import styles from './styles.module.scss'
import Head from 'next/head'

import { Header } from '../../components/header/Header'
import { canSSRAuth } from '../../utils/canSSRAuth'

export default function Product(){
  return(
    <>
      <Head>
        <title>Novo Produto - Jubileu Pizza</title>
      </Head>
      <div>
        <Header />

        <main className={styles.container}>
          <h1>Novo Produto</h1>

          <form className={styles.form}>


            <select>
              <option>
                Bebida
              </option>
              <option>
                Pizzas
              </option>
            </select>

            <input
              type="text"
              placeholder='digite o nome do produto'
              className={styles.input}
            />
            <input
              type="text"
              placeholder='preço do produto'
              className={styles.input}
            />

            <textarea
              placeholder='descrição do produto'
              className={styles.input}
            />

            <button className={styles.buttonAdd} type='submit'>
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth( async (ctx) => {
  return{
    props: {}
  }
})
