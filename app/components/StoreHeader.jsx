'use client';
import Link from 'next/link';
import { Heart, Menu, Search, ShoppingBag, UserRound } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './store.module.css';

export default function StoreHeader() {
  const [count, setCount] = useState(0);
  useEffect(() => { const read = () => setCount(JSON.parse(localStorage.getItem('outlet-cart') || '[]').reduce((sum, item) => sum + item.quantity, 0)); read(); window.addEventListener('storage', read); return () => window.removeEventListener('storage', read); }, []);
  return <header className={styles.header}><button className={styles.menuButton} aria-label="Open menu"><Menu size={20} /></button><Link href="/" className={styles.logo}><img src="/brand/outlet-live-gold.png" alt="Outlet Live" /></Link><nav><Link href="/shop">Shop</Link><Link href="/live">Live</Link><Link href="/orders">Orders</Link></nav><div className={styles.headerActions}><button aria-label="Search"><Search size={19} /></button><Link href="/wishlist" aria-label="Wishlist"><Heart size={19} /></Link><Link href="/auth/sign-in" aria-label="Account"><UserRound size={19} /></Link><Link href="/cart" className={styles.cartLink} aria-label="Shopping bag"><ShoppingBag size={20} /><b>{count}</b></Link></div></header>;
}
