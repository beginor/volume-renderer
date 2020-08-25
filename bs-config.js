/** Browser Sync Config */
module.exports = {
    /**  files to watch */
    files: [
        './**/*.(html|js|css|png)',
        './*.raw'
    ],
    server: {
        baseDir: '.',
        directory: true,
        index: 'index.html'
    },
    open: false,
    cors: false
};
