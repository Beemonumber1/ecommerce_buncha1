'use client';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import StoreHeader from '../components/StoreHeader';
import { catalog, money } from '../lib/catalog';
import styles from '../cart/cart.module.css';
export default function WishlistPage(){const [ids,setIds]=useState([]);useEffect(()=>setIds(JSON.parse(localStorage.getItem('outlet-wishlist')||'[]')),[]);const items=useMemo(()=>catalog.filter(item=>ids.includes(item.id)),[ids]);return <><StoreHeader/><main className={styles.page}><p>YOUR WISHLIST</p><h1>Saved for later.</h1>{!items.length?<div className={styles.empty}><Heart size={34}/><h2>Your wishlist is waiting.</h2><Link href="/shop">Explore the collection</Link></div>:<div className={styles.layout}><section>{items.map(item=><article className={styles.line} key={item.id}><img src={item.image} alt={item.name}/><div><p>{item.brand}</p><h3>{item.name}</h3><strong>{money(item.price)}</strong></div><button className={styles.remove} onClick={()=>{const next=ids.filter(id=>id!==item.id);setIds(next);localStorage.setItem('outlet-wishlist',JSON.stringify(next));}}>Remove</button></article>)}</section></div>}</main></>}
