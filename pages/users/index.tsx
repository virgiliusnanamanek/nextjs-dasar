/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-unresolved
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/Detail.module.css';

interface UserProps{
  dataUsers : Array<any> ;
}

export default function Users(props : UserProps) {
  const { dataUsers } = props;
  const router = useRouter();
  return (
    <Layout pageTitle="Users Page">
      <div>
        {dataUsers.map((user) => (
          <div className={styles.card}>
            <a role="button" key={user.id} onClick={() => router.push(`/users/${user.id}`)} tabIndex={0}>{user.name}</a>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
