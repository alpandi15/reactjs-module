const NextWorkboxPlugin = require('next-workbox-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const path = require('path')

module.exports = {
  poweredByHeader: false,
  distDir: '../dist',
  webpack (config, { isServer, buildId, dev }) {
    const workboxOptions = {
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: ['.next/static/*', '.next/static/commons/*'],
      modifyUrlPrefix: {
        '.next': '/_next'
      },
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'networkFirst',
          options: {
            cacheName: 'html-cache'
          }
        },
        {
          urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
          handler: 'cacheFirst',
          options: {
            cacheName: 'image-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }

    if (!isServer && !dev) {
      config.plugins.push(
        new NextWorkboxPlugin({
          buildId,
          ...workboxOptions
        }),
        new WebpackPwaManifest({
          filename: '/static/manifest.json',
          name: 'React Module',
          short_name: 'React Module',
          lang: 'id-ID',
          description: 'React Module - platform public module',
          display: 'standalone',
          orientation: 'portrait',
          fingerprints: false,
          start_url: '/',
          background_color: '#fafafa',
          theme_color: '#89A61F',
          inject: true,
          // icons: [
          //   {
          //     // src: path.resolve('static/favicon/ms-icon-310x310.png'),
          //     src: path.resolve('src/static/Icon/wiorganize-logo-icon.png'),
          //     sizes: [72, 96, 120, 128, 144, 152, 167, 180, 192, 384, 512]
          //   },
          //   {
          //     // src: path.resolve('static/favicon/ms-icon-310x310.png'),
          //     src: path.resolve('src/static/Icon/wiorganize-logo-icon.png'),
          //     sizes: [120, 152, 167, 180],
          //     ios: true
          //   }
          // ],
          ios: {
            'apple-mobile-web-app-title': 'React Module',
            'apple-mobile-web-app-status-bar-style': '#89A61F'
          },
          includeDirectory: true,
          publicPath: '..'
        })
      )
    }

    return config
  }
}
