import path from 'path';
import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
connectDB();
import cors from 'cors'
import { notFound, errorHandler  } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
const port = process.env.PORT || 5000 ;

const app = express();
// cookieParser
app.use(cookieParser());
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({
    origin: ['http://localhost:3000','https://easyshop-acsv.onrender.com'],
    credentials: true,       
}))



app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', 
    (req, res) => res.send({ clientId: process.env.PAYPAL_CLIENT_ID }))

// app.use(express.static('public'))
// const __dirname = path.resolve() // set __dirname to current working directory
// app.use('/uploads', express.static(path.join(__dirname , '/uploads')))

// const __dirname = path.resolve() // set __dirname to current working directory
// 

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use('/uploads', express.static('/var/data/uploads'));
    app.use(express.static(path.join(__dirname, '/app/build')));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'app', 'build', 'index.html'))
    );
} else {
    const __dirname = path.resolve();
    app.use('/Images', express.static(path.join(__dirname, '/public/Images')))
    //app.use(express.static('public'))
    app.get('/', (req, res) => {
        res.send('API is running....');
    });
}

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log('listening on port ' + port));