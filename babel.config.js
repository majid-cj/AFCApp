module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.d.ts', '.d.tsx'],
        root: ['.'],
        alias: {
          '~': './src',
        },
      },
      'jest-hoist',
    ],
  ],
}
