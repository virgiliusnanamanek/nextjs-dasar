import { useRouter } from 'next/router';
// eslint-disable-next-line import/extensions
import Layout from '../../components/Layout';

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout pageTitle="detail">
      <div>
        detail user :
        {' '}
        { id}
      </div>
    </Layout>
  );
}
