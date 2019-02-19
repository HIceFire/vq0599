import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import config from 'config'
import 'styles/entry.scss'

// import all svg files in webpack context
const request = require.context('../static/icons', false, /\.svg$/)
request.keys().forEach(request)

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    Router.onRouteChangeStart = () => NProgress.start()
    Router.onRouteChangeComplete = () => NProgress.done()
    Router.onRouteChangeError = () => NProgress.done()
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>{config.META_TITLE}</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
