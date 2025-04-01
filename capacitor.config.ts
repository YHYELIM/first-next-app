import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.aptree.firstnextapp',
  appName: 'first-next-app',
  server: {
    url: "http://10.159.59.9:3001",
    cleartext: true,
    // androidScheme: 'https'
  },
  plugins: {
    StatusBar: {
      style: 'dark',
      overlaysWebView: true
    },
    CapacitorHttp: {
      enabled: true
    }
  },
  ios: {
    contentInset: 'automatic',
    scheme: 'app',
    backgroundColor: '#ffffff',
    allowsLinkPreview: false
  },
  android: {
    backgroundColor: '#ffffff'
  }
};

export default config;
