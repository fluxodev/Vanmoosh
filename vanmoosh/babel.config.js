module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'], //estou indicando a raiz do projeto
          alias: { //estou criando um alias para cada pasta do projeto, alias é um apelido de mapeamento
            '@assets': './src/assets', //estou criando um alias para a pasta assets
            '@components': './src/components', //estou criando um alias para a pasta components
            '@routes': './src/routes', //estou criando um alias para a pasta routes
            '@screens': './src/screens', //estou criando um alias para a pasta screens
            '@storage': './src/storage', //estou criando um alias para a pasta storage
            '@theme': './src/theme', //estou criando um alias para a pasta theme
            '@utils': './src/utils',  //estou criando um alias para a pasta utils
          },
        },
      ],
    ],
  };
};
