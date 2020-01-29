🎂

# Eventer

SPA based on React/Redux for events in spb.

## Setup

```sh
npm install
```

### Run client

```sh
npm run start

```

````
Приветствую!

Начну с самого главного, данные.
Они статичные, хоть я и имитирую работу сервера. В идеале нужно поднять сервер на express (с body-parser middleware) и фетчить данные с https://kudago.com/public-api/v1.4/
При таком раскладе всё будет совсем круто. В будущем обязательно сделаю.

В задании просили сделать фильтрацию по ценам. Не стал её реализовывать, т.к. мой интрефейс вообще не отображает стоимость на домашней страничке.
Если что, то вот:

```sh
arr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
````

В остальном всё сделал, включая допы.

ps: spa сделан с create-react-app. Тут https://github.com/sidzha/js-react-1 можно посмотреть пример аппа на собственной сборке.
