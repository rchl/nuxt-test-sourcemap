/** @type import('@nuxt/types').Configuration */
const config = {
    build: {
        babel: {
            presets({ isServer }) {
                return [
                    [
                        require.resolve('@nuxt/babel-preset-app'),
                        {
                            buildTarget: isServer ? 'server' : 'client',
                            corejs: { version: 3 },
                        },
                    ],
                ];
            },
        },
        extend(config, { isDev, isClient }) {
            config.devtool = isClient ? 'eval-source-map' : 'inline-source-map';
        },
    },
    srcDir: 'app/',
    mode: 'universal',
    server: {
        host: '0.0.0.0',
        port: 9000,
    },
    // modules: [
    //     ['@nuxtjs/sentry', {
    //         config: /** @type {import('@sentry/types').Options} */({
    //             debug: true,
    //             environment: process.env.DOTENV,
    //             release: 'nuxt-test-project-0.0.1',
    //             dsn: process.env.SENTRY_DSN,
    //         }),
    //         clientConfig: {
    //             // Ignore errors when page is rendered from different domain than expected. For
    //             // example through web-based anonymizing proxy.
    //             whitelistUrls: [process.env.API_URL_BROWSER, 'webpack-internal://'],
    //         },
    //         clientIntegrations: {
    //             ReportingObserver: { types: ['crash', 'intervention'] },
    //             Vue: { attachProps: true, logErrors: true },
    //         },
    //         // initialize: !constants.IS_DEVELOPMENT,
    //         publishRelease: true,
    //     }],
    // ],
};

export default config;
