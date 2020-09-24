import {withRouter} from 'next/router'
import Layout from '../components/BaseLayout'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

const Post = withRouter((props) => (
    <Layout>
        <Head>
            <title>Detail {props.user.nama}</title>
        </Head>
        <h2>{props.user.nama}</h2>
        <p>Arti: {props.user.arti}</p>
        <p>Asma: {props.user.asma}</p>
        <p>Ayat: {props.user.ayat}</p>
        <p>Tipe: {props.user.type}</p>
        <a>Audio: {props.user.audio}</a>
        <p>Keterangan: {props.user.keterangan}</p>
    </Layout>
))

Post.getInitialProps = async function(context){
    const {nomor} = context.query
    const res =await fetch(`https://api.npoint.io/99c279bb173a6e28359c/data/${nomor}`)
    const user = await res.json()

    console.log('total data' + user.length)
    

    return { user }
}

export default Post