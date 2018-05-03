# 12.2 Інструменти React

## eslint
[Стандартна конфігурація](https://www.npmjs.com/package/eslint-config-react-app)

### Додаткова конфігурація
*.eslintrc*
```json
{
  "extends": ["react-app", "plugin:jsx-a11y/recommended"],
  "plugins": ["jsx-a11y"]
}
```

[jsx-ally](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)

## jest

### Разом з enzyme
```
npm install --save-dev enzyme enzyme-adapter-react-16
```

Конфігурація:
```javascript
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render, configure } from 'enzyme';
configure({ adapter: new Adapter() });
```

Тест:
```
it('renders snapshot', () => {
  const tree = shallow(<App />);
  expect(tree).toMatchSnapshot();
});
```

## webpack

```
npm install --save-dev webpack webpack-cli
```
[Документація](https://webpack.js.org)

### Приклад
*webpack.config.js*
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
```

*index.html*
```html
<!doctype html>
<html>
  <head>
    ...
  </head>
  <body>
    ...
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

### babel-loader
```
npm install babel-loader babel-core babel-preset-env
```

```
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```

### jsx
```
npm install --save-dev babel-plugin-transform-react-jsx
```

[Документація](https://babeljs.io/docs/plugins/transform-react-jsx/)

### Dev server
```
npm install --save-dev webpack-dev-server
```

```
node_modules/.bin/webpack-dev-server
```

[Документація](https://github.com/webpack/webpack-dev-server)

### create-react-app
```
npm run eject
```

## next.js

[Документація](https://github.com/zeit/next.js)
