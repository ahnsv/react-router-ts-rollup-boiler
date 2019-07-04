import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/index.tsx',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [
        typescript()
    ]
}