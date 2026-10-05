import Link from 'next/link';
import StoreHeader from './components/StoreHeader';
import styles from './[page]/info.module.css';
export default function NotFound(){return <><StoreHeader/><main className={styles.info}><p>404</p><h1>That find has gone.</h1><div className={styles.copy}><p>The page you are looking for is no longer here, but there are still plenty of outlet pieces waiting to be discovered.</p></div><Link href="/shop">Return to the store →</Link></main></>}
