export {};
declare module 'react-identicons';

declare global {
    interface Window {
      ethereum: any; // 👈️ turn off type checking
      solana: any
    }
  }