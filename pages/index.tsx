/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import type { NextPage } from 'next';
import Image from 'next/image';
import Layout from '../components/Layout';
import Photo from '../public/dirt-rally-20.jpg';

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => (
  <Layout pageTitle="Home Page">
    <Image src={Photo} width={400} height={300} alt="profile" />
    <h1>Halaman Utama</h1>
  </Layout>
);

export default Home;
