import { Context, Next } from 'koa'

const catcher = ({ debug = false, message = '' } = {}) => async (ctx: Context, next: Next) => {
  try {
    await next()
  } catch (error) {
    ctx.app.emit('error', error, ctx)

    if (debug) {
      console.info(error)
    }

    ctx.response.status = error.status ?? error.statusCode ?? 500
    ctx.response.body = { message: message ?? 'Internal Server Error' }
  }
}

export default catcher
