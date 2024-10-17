module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins:[
    ['module-resolver', {
      root:'.',
      alias: {
        '@components': './src/components',
        '@hooks': './src/hooks',
        '@router': './src/router',
        '@screens': './src/screens',
        '@theme': './src/theme',
        '@domain': './src/domain',
        '@brand': './src/brand',
      },
    }],
  ],
};
