export default defineAppConfig({
  title: 'Sink',
  github: 'https://github.com/miantiao-me/sink',
  coffee: 'https://sink.cool/coffee',
  twitter: 'https://sink.cool/x',
  telegram: 'https://sink.cool/telegram',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-zA-Z0-9_-]+$/,
  reserveSlug: [
    'dashboard',
  ],
})
