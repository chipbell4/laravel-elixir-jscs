# Laravel Elixir JSCS Extension

This is a fork from [chipbell4/laravel-elixir-jscs](https://github.com/chipbell4/laravel-elixir-jscs) with update to use new Laravel Elixir API

## Install
```
$ npm install --save-dev laravel-elixir-jscs-wrapper
```

## Usage

```js
require('laravel-elixir-jscs-wrapper');

elixir(function(mix) {
  mix.jscs(['assets/my-assets/js/**/*.js']. {
    'configPath': __dirname + '/.jscsrc'
  });
});
```

Create `.jscsrc` with your settings follow [jscs options](http://jscs.info/overview#options)
