import Head from "next/head";
import DaBlog from "../components/Blogs/Blogs";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";


export default function Page() {
  return (
    <>

      <Head>
        <title>0xKhairi</title>
      </Head>
      <Navbar />
      <Header />
      <DaBlog />
      <Footer mode="Coded" />
    </>
  )
}
