// import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { handleRequestLogin } from './api/handleRequestLogin.js';
import { handleNonceRequest } from './api/hadleNonceRequest.js';




//mport { services } from './services';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());




app.post('/auth', handleRequestLogin)
app.post('/nonce', handleNonceRequest)
console.log("test 123")
const port = process.env.PORT || 8000;

app.listen(port, () =>
	console.log(`Express app listening on localhost:${port}`)
);