module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.vue$': '@vue/vue3-jest',
      '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    testEnvironmentOptions:{
      customExportConditions:["node","node-addons"]
    }
    
  };