// eslint-disable-next-line import/extensions
import Layout from '../../components/Layout';

interface Users{
  id : number;
  name: string;
  email: string;
  phone : string;
  website : string;
}
interface DetailProps{
  user : Users;
}
export default function DetailUsers(props : DetailProps) {
  const { user } = props;
  return (
    <Layout pageTitle="detail">
      <div key={user.id}>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  const paths = dataUsers.map((user: Users) => ({
    params: { id: `${user.id}` },
  }));
  return {
    paths,
    fallback: false,
  };
}
interface GetStaticProps{
  params: { id : string, }
}

export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}
