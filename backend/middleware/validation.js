import * as yup from 'yup';


export const validationSchema= 
    yup.object({
        name:yup.string().required('Please enter name').min(5, 'Name must be 5 character long'),
        email:yup.string().email('Please enter Valid email address').required('Please enter email address'),
        phone:yup.number().positive('Invalid phone number').required('Please enter phone number'),
        gender:yup.string().required('Please select the gender'),
        hobbies:yup.string().required('please select hobbies'),
    });

export const validation=(validator) =>async (req, res, next) =>{
    console.log(req.body);
    try {
    await validator.validate(req.body);
    next();
    } catch (e) {
    res.status(400).json(e.errors);
    }
}