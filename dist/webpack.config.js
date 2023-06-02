import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
export default (function (env) {
    var paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };
    var mode = env.mode || 'development';
    var isDev = mode === 'development';
    var PORT = env.port || 3000;
    var config = buildWebpackConfig({
        mode: mode,
        paths: paths,
        isDev: isDev,
        port: PORT,
    });
    return config;
});
