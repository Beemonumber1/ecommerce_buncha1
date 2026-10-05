'use client';
import Link from 'next/link';
import { PackageCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import StoreHeader from '../components/StoreHeader';
import { money } from '../lib/catalog';
import styles from './orders.module.css';
export default function OrdersPage(){const [orders,setOrders]=useState([]);useEffect(()=>setOrders(JSON.parse(localStorage.getItem('outlet-orders')||'[]')),[]);return <><StoreHeader/><main className={styles.page}><p>MY ORDERS</p><h1>Order history.</h1>{!orders.length?<div className={styles.empty}><PackageCheck size={36}/><h2>Nothing to track yet.</h2><Link href="/shop">Explore the shop</Link></div>:<div className={styles.list}>{orders.map(order=><article key={order.id}><div><b>{order.id}</b><span>{order.date} · {order.items} item(s)</span></div><div><strong>{money(order.total)}</strong><span className={styles.status}>● {order.status}</span></div></article>)}</div>}</main></>}
