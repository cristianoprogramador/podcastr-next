import '../styles/global.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player'

import styles from '../styles/app.module.scss'
import { PlayercontextProvider } from '../contexts/PlayerContext'


function MyApp({ Component, pageProps }) {
  return (
    <PlayercontextProvider>
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
    </PlayercontextProvider>
  )
}
export default MyApp
