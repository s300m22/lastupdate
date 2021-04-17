
import '../public/css/bootstrap.min.css'
import '../public/css/font-awesome.min.css'
import '../public/css/style.css'

// import '../public/css/feathericon.min.css'
// import '../public/plugins/morris/morris.css'



import Layout from './layouts/layout'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  
  )
}


export default MyApp

