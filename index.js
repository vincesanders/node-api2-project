const express = require('express');
const cors = require('cors');
const postsRouter = require('./posts/posts-router');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api/posts', postsRouter);

server.listen(5000, () => console.log('\n*** Server Running on http://localhost:5000 ***\n'));