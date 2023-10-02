module.exports = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        secret: 'dee44c87-886f-4103-9486-c24b9bcc58f2'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'http://localhost:3000/api' // production api
    }
}