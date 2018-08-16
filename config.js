const config = {
    PORT: (process.env.PORT || 3000),
    ProxyEmail: process.env.proxyEmail,
    ProxyPass: process.env.proxyPass,
    Email: process.env.myemailhost
};

module.exports = config;