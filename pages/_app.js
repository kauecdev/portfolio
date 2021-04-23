import '../styles/global.css';
import { Preloader, Placeholder } from 'react-preloading-screen';

function MyApp({ Component, pageProps }) {
  return (
    <Preloader className="preloader" fadeDuration={2500}>
      <Component {...pageProps} />
      <Placeholder>
        <img src="/assets/images/preloading.gif" alt="Loading..."/>
      </Placeholder>
    </Preloader>
  )
}

export default MyApp;
