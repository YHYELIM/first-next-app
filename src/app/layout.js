'use client'
import { useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { StatusBar } from '@capacitor/status-bar';
import styles from './globals.css';
export default function Header({ children }) {
  useEffect(() => {
    const initializeApp = async () => {
      if (Capacitor.isNativePlatform('ios')) {
        try {
          if (Capacitor.isPluginAvailable('StatusBar')) {
            await StatusBar.setOverlaysWebView({ overlay: true });
            await StatusBar.setStyle({ style: StatusBar.Style.Dark });
          }
        } catch (error) {
          console.error('StatusBar 초기화 오류:', error);
        }
      }
    };

    initializeApp();
  }, []);  
    return (
      <html lang="en">
        <body>
        <header>
          <h1>🌍 My Next.js App</h1>
        </header>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
          <main>{children}</main>
        </body>
      </html>
    );
  }
