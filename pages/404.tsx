import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div>
      <h1 className="not-found-content">kamu pasti salah ketik.....</h1>
      <h1 className="not-found-content">hahhahhahhhah.....</h1>
    </div>
  );
}
