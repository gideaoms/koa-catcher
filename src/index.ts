import { Context, Next } from 'koa'

type CatcherOpts = {
  debug: boolean
  message: string
}

const catcher = (opts?: CatcherOpts) =>
  async (ctx: Context, next: Next) => {
    try {
      await next()
    } catch (error) {
      ctx.app.emit('error', error, ctx)

      if (opts?.debug) {
        console.info(error)
      }

      ctx.response.status = error.status ?? error.statusCode ?? 500
      ctx.response.body = { message: opts?.message ?? 'Internal Server Error' }
    }
  }

export default catcher
