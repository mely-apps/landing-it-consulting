import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'vi'],
  defaultLocale: 'en',
  localeDetection: true,
});

export const config = {
  matcher: ['/', '/(vi|en)/:path*'],
};
