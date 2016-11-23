import express from 'express';
import bodyParser from 'body-parser'
import path from 'path'

const app = express();

//body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//static path middleware
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.send('Hellowo world');
})

app.listen(process.env.PORT || 5000);