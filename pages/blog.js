import Layout from '../components/BaseLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

const Index = (props) => (
    <Layout>
        <Head>
            <title>Blog | Izalul</title>
        </Head>
        <h1>Al-Quran API Terjemahan Indonesia Beserta Audio</h1>
        <ul>
            {props.users.map((user) => (
                <li key={user.nomor}>
                    <Link as={`/single/${user.nomor}`} href={`/single?nomor=${user.nomor}`}>
                        <a> {user.nama} </a>
                    </Link>
                </li>
            ))}
        </ul>

            
    </Layout>
)

Index.getInitialProps = async function(){
    const res =await fetch('https://api.npoint.io/99c279bb173a6e28359c/data')
    const data = await res.json()
    console.log('----------')
    console.log('total data' + data.length)
    console.log('----------')
    return { users: data }
}

export default Index