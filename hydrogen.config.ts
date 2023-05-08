import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain: import.meta.env.PUBLIC_STORE_DOMAIN || '74c56a-4.myshopify.com',
    storefrontToken: import.meta.env.PUBLIC_STOREFRONT_API_TOKEN || '8e45cda33e4581ac81f30dbb100ac171',
    storefrontApiVersion: '2023-04',
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
