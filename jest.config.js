module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-redux|@react-native|react-native|@react-navigation)/)',
  ],
};
