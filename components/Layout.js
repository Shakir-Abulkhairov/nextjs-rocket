import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';
const Layout = ({children}) =>{
    return(
        <div className="content">
            <Head>
                <meta keywords={'react-next'}></meta>
            </Head>
            <Header />
                {children}
            <Footer />
        </div>
    );
}
export default Layout;
