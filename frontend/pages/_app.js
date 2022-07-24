import "../styles/globals.css";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { Provider } from 'react-redux';
import {store} from '../store'


function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 1000;
  return library;
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store} >
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
    </Provider>
  );
}

export default MyApp;
