import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaW5jZXB0aW9ubGFicyIsImEiOiJja2kxMzljZjExNjVsMnBvZHVsbzExOWxkIn0.ZYJ4fN3wXHOzqInidWOVYQ'; // Set your mapbox token here

export default function Home() {

  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
    bearing: 0,
    pitch: 0
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>COVAX Global Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">COVAX!</a>
        </h1>

        <p className={styles.description}>
          An Open Source Dashboard for Tracking COVAX{' '}
          <code className={styles.code}>powered by Inception Labs</code>
        </p>

        <MapGL
          {...viewport}
          width="100vw"
          height="100vh"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={nextViewport => setViewport(nextViewport)}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
