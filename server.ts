import * as express from 'express';
import * as compression from 'compression';
import { join } from 'path';

const port = process.env.PORT || 4050;
const dist = join(__dirname);

const app = express();

app.use(compression());
app.get('*.*', express.static(dist));
app.get('*', (req, res) => res.sendFile(join(dist, 'index.html')));
app.listen(port, () => console.log(`server running on http://localhost:${port}`));
