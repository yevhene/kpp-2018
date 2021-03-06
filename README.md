# Крос-платформне програмування (весна 2018)

Звіти до лабораторних подаються через [сайт](http://novel.university).

[Налаштування proxy у ВНТУ](docs/proxy.md).

## Розділ 1: Термінал (shell)

### Лабораторнi
- [Лабораторна 0: Реєстрація в системі](labs/00-registration.md)
- [Лабораторна 1: Консольна аплікація](labs/01-terminal.md)

### Тиждень 1: Основи

#### Лекція 1.1: Основи JavaScript
- Теми:
  - Вирази, оператори, змінні;
  - Масиви, об'єкти;
  - Умови, цикли;
  - Функції.
- [Слайди](/slides/01_1-javascript-basics)
- [Конспект](/posts/01_1-javascript-basics.md)

#### Лекція 1.2: Основи Node.js
- Теми:
  - Основи `node.js`;
  - Менеджери пакетів `npm`, `yarn`;
  - Маніфест аплікації `package.json`.
- [Слайди](/slides/01_2-node-basics)

#### Лекція 1.3: Типи
- Теми:
  - Типи, typeof;
  - Приведення типів.
- [Слайди](/slides/01_3-types)

#### Практика 1: Javascript
- Теми:
  - Оболонка node;
  - Звневаджування програм (debugger).

### Тиждень 2: Функції

#### Лекція 2.1: Область визначення (scope)
- Теми:
  - Область визначення;
  - Декларація змінних (var, let, const);
  - Вспливання змінних (hoisting).
- [Слайди](/slides/02_1-scope)

#### Лекція 2.2: Функції
- Теми:
  - Функції;
  - Параметри і аргументи;
  - Функції вищого порядку (map, reduce);
  - Зворотні виклики (callbacks). Замикання.
- [Слайди](/slides/02_2-functions)

#### Практика 2: Розробка термінальної аплікації

### Тиждень 3: Об'єктно-орієнтоване програмування

#### Лекція 3.1: Об'єкти
- Теми:
  - Об'єкти;
  - Властивості;
  - this.
- [Слайди](/slides/03_1-objects)

#### Лекція 3.2: Прототипи і Конструктори
- Теми:
  - prototype;
  - class.
- [Слайди](/slides/03_2-oop)

#### Лекція 3.3: ECMAScript
- Теми:
  - Стандарт ECMAScript;
  - Історія;
  - Нововведення.
Стандарт. Історія.
- [Слайди](/slides/03_3-ecma)

#### Практика 3: Контроль версій
- Теми:
  - Системи контролю версій;
  - Git (init, commit);
  - Галудження (branch, checkout, reset, merge, rebase).
- [Слайди](/slides/s_3-git)


## Розділ 2: Server

### Лабораторнi
- [Лабораторна 2: Серверна аплікація](labs/02-server.md)

### Тиждень 4: Web

#### Лекція 4.1: Протоколи та стандарти Web
- Теми:
  - WWW;
  - URI (URL/URN);
  - HTTP (request, response, method, header).
- [Слайди](/slides/04_1-web)

#### Лекція 4.2: express.js
- Теми:
  - Роутинг;
  - Шаблонізатори;
  - Ресурси.
- [Слайди](/slides/04_2-express)

#### Практика 4: Розробка модульної аплікації

### Тиждень 5: Дані

#### Лекція 5.1: HTML Форми
- Теми:
  - form;
  - input/textarea/select;
  - Валідація.
- [Слайди](/slides/05_1-forms)

#### Лекція 5.2: Обіцянки
- Теми:
  - Promise;
  - Ланцюжки;
  - Групування.
- [Слайди](/slides/05_2-promises)

#### Лекція 5.3: Збереження даних
- Теми:
  - Бази даних (CAP);
  - Документна база MongoDB;
  - Драйвер доступу (mongo, mongoose).
- [Слайди](/slides/05_3-mongo)

#### Практика 5: Розробка веб аплікації за допомогою express.js
- [Код](https://github.com/yevhene/kpp-2018/tree/master/examples/05-tasks)

### Тиждень 6: Production

#### Лекція 6.1: Тестування
- Теми:
  - Тестування (mocha, chai);
  - Контроль якості коду (eslint);
  - Моніторинг в реальному часі.
- [Слайди](/slides/06_1-testing)

#### Лекція 6.2: Асинхронність (Генератори)
- Теми:
  - Ітератори;
  - Генератори.
- [Слайди](/slides/06_2-generators)

#### Лекція 6.3: Асинхронність
- Теми:
  - Асинхронні функції;
  - Асинхронні ітератори;
  - koa.js.
- [Слайди](/slides/06_3-async)

#### Практика 6: Розгортування
- Теми:
  - Хмарні сервіси (Heroku);
  - Системи керування мікросервісами (foreman, pm2).
- [Слайди](/slides/s_6-deploy)
- [Код](https://github.com/yevhene/kpp-2018/tree/master/examples/06-cloud)

## Розділ 3: Browser

### Лабораторнi
- [Лабораторна 3: Браузерна аплікація](labs/03-browser.md)

### Тиждень 7: Браузерне оточення

#### Лекція 7.1: Браузерні технології
- Теми:
  - HTML, DOM;
  - CSS, селектори;
  - Bootstrap.
- [Слайди](/slides/07_1-browser)

#### Лекція 7.2 JavaScript HTML5 API
- Теми:
  - Інтеграція JavaScript із браузером;
  - HTML5 APIs (geolocation, canvas, history).
- [Слайди](/slides/07_2-html5)

#### Практика 7: Робота у браузерному оточенні
- [Код](https://github.com/yevhene/kpp-2018/tree/master/examples/07-map)

### Тиждень 8: AJAX

#### Лекція 8.1: API
- Теми:
  - API (Види, формати);
  - REST;
  - GraphQL.
- [Слайди](/slides/08_1-api)

#### Лекція 8.2: Маніпуляція DOM
- Теми:
  - Інструменти браузера;
  - jQuery (Пошук, маніпуляція, анімація).
- [Слайди](/slides/08_2-jquery)

#### Лекція 8.3: AJAX
- Теми:
  - Історія;
  - Інструменти (jQuery.ajax, fetch);
  - Автентифікація;
  - CORS.
- [Слайди](/slides/08_3-ajax)

#### Практика 8: Розробка клієнт-серверної аплікації
- [Код](https://github.com/yevhene/kpp-2018/tree/master/examples/08-tasks)

### Тиждень 9: Асинхронна взаємодія з сервером

#### Лекція 9.1: Websocket
- Теми:
  - Websocket протокол
  - Підтримка на сервері та у браузері
- [Слайди](/slides/09_1-websockets)

#### Лекція 9.2: Синхронізація мікросервісів
- Теми:
  - Брокер повідомлень Redis
  - Організація черг
- [Слайди](/slides/09_2-redis)

#### Практика 9: Розробка серверної аплікації з асинхронною взаємодією
- [Код](https://github.com/yevhene/kpp-2018/tree/master/examples/09-chat)

#### Лабораторна 3: Розробка браузерної аплікації


## Розділ 4: Single Page Applications (SPA)

### Лабораторнi
- [Лабораторна 4: Односторінкова аплікація (SPA)](labs/04-spa.md)

### Тиждень 10: React

#### Лекція 10.1: React
- Теми:
  - React
  - JSX
- [Слайди](/slides/10_1-react)
- [Демо (код)](https://github.com/yevhene/kpp-2018/tree/master/demo/react-hello-world)

#### Лекція 10.2: Архітектура Fiber
- Теми:
  - Fiber
- [Слайди](/slides/10_2-fiber)
- [Демо (код)](https://github.com/yevhene/kpp-2018/tree/master/demo/react-fiber)

#### Лекція 10.3: -

#### Практика 10: Розробка react аплікації
create-react-app.

### Тиждень 11: Структура аплікації React

#### Лекція 11.1: Управління станом
- Теми:
  - Flux;
  - Redux;
  - Побічні ефекти (Redux Thunk).
- [Слайди](/slides/11_1-redux)
- [Демо (код)](https://github.com/yevhene/kpp-2018/tree/master/demo/redux)

#### Лекція 11.2: -

#### Практика 11: Розробка аплікації з Redux
- [Код](https://github.com/yevhene/kpp-2018/tree/master/examples/11-redux)

### Тиждень 12: Інструментарій

#### Лекція 12.1: Роутинг
- Теми:
  - Роутинг (react-router);
  - Історія браузера.
- [План](/posts/12_1-react-routing.md)

#### Лекція 12.2: Інструменти
- Теми:
  - Контроль якості (eslint);
  - Тестування (jest, enzyme);
  - Server Side Rendering (next.js);
  - Збірка ресурсів (webpack).
- [План](/posts/12_2-react-tools.md)

#### Лекція 12.3: Інтерфейсні фреймворки для React
- Теми:
  - Інтерфейсні фреймворки (Material-UI, reactstrap, blueprint).
- [План](/posts/12_3-react-ui.md)

#### Практика 12: Розробка React аплікації з роутингом
- [Код](https://github.com/yevhene/kpp-2018/tree/master/examples/12-students)


## Розділ 5: Mobile

### Лабораторнi
- [Лабораторна 5: Мобільна аплікація](labs/05-mobile.md)

### Тиждень 13: Cordova

#### Лекція 13.1: Apache Cordova
- Теми:
  - Apache Cordova
- [Слайди](/slides/13_1-cordova)

#### Практика 13: Розробка аплікації за допомогою Apache Cordova

### Тиждень 14: React Native

#### Лекція 14.1: React Native
- Теми:
  - React Native
  - Expo
- [Слайди](/slides/14_1-react-native)
- [Демо (код)](https://github.com/yevhene/kpp-2018/tree/master/demo/react-native-hello-world)

#### Лекція 14.2: React Native Navigation
- Теми:
  - React Native Navigation
- [Слайди](/slides/14_2-react-native-navigation)
- [Демо](https://expo.io/@yevhene/reactnavigationnavigation)
- [Демо (код)](https://github.com/yevhene/kpp-2018/tree/master/demo/react-native-navigation)

#### Практика 14: Розробка аплікації за допомогою React Native

## Розділ 6: Desktop

### Лабораторнi
- [Лабораторна 6: Настільна аплікація](labs/06-desktop.md)

### Тиждень 15: Electron

#### Лекція 15.1: Electron
- Теми:
  - Electron
- [Слайди](/slides/15_1-electron)

#### Практика 15: Розробка настільної аплыкації

## [Література](/docs/literature.md)
