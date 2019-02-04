module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/15-puzzle-vue/' : '/',
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Play the 15 Puzzle Game',
        },
    },
};
