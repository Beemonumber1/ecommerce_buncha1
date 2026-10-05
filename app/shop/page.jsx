import Link from 'next/link';
import StoreHeader from '../components/StoreHeader';
import { catalog, money } from '../lib/catalog';
import styles from '../storefront.module.css';
export default function ShopPage(){return <><StoreHeader/><main className={styles.collection}><div className={styles.sectionHead}><div><p className={styles.kicker}>THE COLLECTION</p><h2>All arrivals.</h2></div><Link href="/live">Shop live →</Link></div><div className={styles.productGrid}>{catalog.map(item=><article className={styles.product} key={item.id}><div className={styles.productMedia}><img src={item.image} alt={item.name}/></div><p>{item.brand}</p><h3>{item.name}</h3><strong>{money(item.price)}</strong><Link className={styles.add} href={`/?product=${item.id}`}>Quick view</Link></article>)}</div></main></>}
