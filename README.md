# koa-catcher

## Installation
```bash
npm install --save koa-catcher
```

## Usage
*This package captures errors in your api application (json) that other middlewares has not caught*

*We use console.info to show the errors if you pass debug as true*

*We emit the errors in case you want to listen them:*
```js
ctx.app.emit('error', error, ctx)
```

### Example
```js
const Koa = require('koa')
const catcher = require('koa-catcher')

const server = new Koa()

server.use(catcher()) // or server.use(catcher({ debug: true, message: 'Custom' }))

server.listen(3000)
```

### Return
```json
{ "message": "Internal Server Error" }
```

## Author
[Gideão Silva](https://github.com/gideaoms)
