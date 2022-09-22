const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const config = (phase) => {
    /**
     * Plugins
     */
    let plugins = [];

    /**
     * Configuration
     * @type {import('next').NextConfig}
     */
    let settings = {
        reactStrictMode: true,
        poweredByHeader: false,
        cleanDistDir: true,
        redirects: async () => {
            return [];
        },
        rewrites: async () => {
            return [];
        },
    };

    if (phase !== PHASE_DEVELOPMENT_SERVER) {
        // do something in production mode
    }

    return {
        plugins,
        settings,
    };
};

const pipe = (funcs) => (value) => funcs.reduce((v, f) => f(v), value);
module.exports = (phase, { defaultConfig }) => {
    const cfg = config(phase, { defaultConfig });
    return pipe(cfg.plugins)(cfg.settings);
};
