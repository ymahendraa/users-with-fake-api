
import React from 'react';
import { Button } from '@material-tailwind/react';
import CustomInput from '../../components/input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { fetcher } from '../../libs/fetcher';
import { handleLogin } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    // define navigate
    const navigate = useNavigate();
    // define formik
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            fetch('https://fakestoreapi.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
                .then((response) => response.json())
                .then((data) => {
                    // show alert if success
                    alert('Success');
                    // go to users page
                    navigate('/users');
                    if (data.token) {
                        handleLogin(data.token);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('Error');
                });

        },
    });



    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
                <CustomInput id='username' label="Username" value={formik.values.username} onChange={formik.handleChange} placeholder='Username' />
                <CustomInput id='password' label="Password" type="password" value={formik.values.password} onChange={formik.handleChange} placeholder='Password' />
                <Button color="blue" type="submit" className="w-full mt-4">
                    Login
                </Button>
            </form>
        </div>
    );
};

export default LoginPage;
