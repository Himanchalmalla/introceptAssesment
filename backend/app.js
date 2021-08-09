import express from 'express';
import userRouter from './Router/userRouter.js';
const app = express();
import cors from 'cors';
app.use(express.json());
app.use(cors());
app.use('/api', userRouter);

const PORT=5000
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})