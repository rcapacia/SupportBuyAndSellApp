const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.db = router.db;

// Use middlewares and authentication
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(auth);

server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`JSON Server with authentication is running on port ${PORT}`);
});
