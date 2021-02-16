import Koa from "koa";

const app = new Koa();

const port = 3000;

app.use(async (ctx, next) => {
  ctx.type = 'application/json';
  await next();
});

app.use(async (ctx, next) => {
  ctx.body = { name: 'John Doe', id: '374'}
  await next();
});

app.use(async (ctx, next) => {
  ctx.cookies.set('trackingId', '123');
});


app.listen(port, () => {
  console.log(`Koa server is listening on port ${port}`);
});
