# laravel-elixir-jscs
Laravel Elixir JSCS Extension

## Install
```
$ npm install --save-dev laravel-elixir-jscs
```

## Usage

```js
require('laravel-elixir-jscs');

elixir(function(mix) {
  mix.jscs(['assets/my-assets/js/**/*.js']. {
    'configPath': __dirname + '/.jscsrc'
  });
});
```

Create `.jscsrc` with your settings follow [jscs options](http://jscs.info/overview#options)
