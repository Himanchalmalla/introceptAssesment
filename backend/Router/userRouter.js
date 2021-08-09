import express from 'express';
import {validation, validationSchema} from '../middleware/validation.js';
const router = express.Router();

router.get('/', (req, res) =>{
    res.status(200).json("Yeah!! success");
});

router.post('/', validation(validationSchema), (req, res)=>{
    res.status(200).json(req.body);
})

export default router;