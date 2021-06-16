import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   const jssStyles = document.querySelector('#jss-server-side')
  //   if (jssStyles !== null) {
  //     jssStyles.parentElement.removeChild(jssStyles)
  //   }
  // }, [])
  return <Component {...pageProps} />
}
export default MyApp
