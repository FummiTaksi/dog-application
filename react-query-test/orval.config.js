module.exports = {
    dogapi: {
        output: {
            mode: 'tags-split',
            target: 'generated/dogapi.ts',
            schemas: 'generated/model',
            client: 'react-query',
            mock: true,
        },
        input: {
            target: './dogapi.json',
        },
    },
};
