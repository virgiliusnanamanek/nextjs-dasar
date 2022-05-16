/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import Layout from '../components/Layout';
import styles from '../styles/Blog.module.css';

interface Post{
  id: number;
  title: string;
  body: string;
}
interface BlogProps {
  dataBlog: Post[]
}
export default function Blog(props : BlogProps) {
  const { dataBlog } = props;
  return (
    <Layout pageTitle="Blog Page">
      <div className={styles.container}>
        {dataBlog.map((blog) => (
          <div key={blog.id} className={styles.card}>
            <h4>{blog.title}</h4>
            <p>{blog.body}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    },
  };
}
