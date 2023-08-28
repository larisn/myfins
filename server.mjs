
import jsonServer from 'json-server';
import cors from 'cors';
const server = jsonServer.create()
const router = jsonServer.router("data/db.json")
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(cors({
  origin: ["https://json-server-khaki-sigma.vercel.app/fins", "https://json-server-khaki-sigma.vercel.app/", "https://json-server-khaki-sigma.vercel.app/categories"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Custom-Header"]
}));

server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})


exports.default = server;
