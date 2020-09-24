import Navigation from '../components/Navigation'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <title>Home | Izalul</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
        </Head>
        <Navigation />
        
        {props.children}

        <p>Footer: copyright 2020</p>

        

    </div>
)

export default Layout