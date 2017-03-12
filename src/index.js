import express from 'express';
import { join } from 'path';

const app = express();
const port = 8080;

app.use('/', express.static(join(__dirname, 'www')));

app.listen(port, () => {
    process.stdout.write(`web server started on port ${port}\n`);
});