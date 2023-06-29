import Hapi from '@hapi/hapi';

const start = async () => {
    const server = Hapi.server({
        port: 8000,
        host: 'localhost',
    });

    server.route({
        method: 'POST', 
        path: '/hello',
        handler: (req, h) => {
            const payload = req.payload;
            const name = payload.name;
            return `Hello ${name}!`;
        }
    })

    await server.start();
    console.log(`Server is listening on ${server.info.uri} `);
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

start();