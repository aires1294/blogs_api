const express = require('express');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
// const express = require('express');
const loginRouter = require('./Router/login.router');
const userRouter = require('./Router/user.router');
const categoryRouter = require('./Router/category.router');
// const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);

module.exports = app;