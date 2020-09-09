module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver', // 상대경로 설정하는 플러그인
      {
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};
