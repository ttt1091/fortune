import { ReactNode } from "react";
import Styles from './layout.module.scss';
import Head from 'next/head'
import {NextPage} from 'next'

interface Props {
  children?: ReactNode;
  home?: ReactNode;
}

const Layout:NextPage<Props> = ({ children, home }: Props) => {
  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&family=Yuji+Syuku&display=swap" rel="stylesheet" />
        <title>YoYos</title>
      </Head>
      <div>
        {home ? (
          <>test
          </>
        ) : (
          <>
          </>
        )}
        <main>{children}</main>
        {!home && (
          <>
          </>
        )}
      </div>
    </>
  )
}
export default Layout;