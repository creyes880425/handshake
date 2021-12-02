const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

//require('./config/mongoose.config');

app.use(cors());

app.use( express.json() );
app.use( express.urlencoded( {extended: true }));


app.get('/api', (req, res) => {
    res.json({ message: 'Hola Express!!', ok: true });
});

//require('./routes/producto.routes')(app);

const server = app.listen(port, () => console.log(`Servidor escuchando el puerto ${port}`));

const io = require('socket.io')(server);

io.on('connection', socket => {
    //console.log(socket.id);
    console.log('Encantado de conocerte. (Handshake)');
    socket.emit('bienvenida', 'Bienvenido')
});

