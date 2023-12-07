
"use client"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useRouter } from 'next/navigation'


import { useState } from 'react';

import axios from 'axios';

export default function () {
    const router = useRouter()
    
    const [message, setMessage] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData(e.target)
        axios.post("/api/users/reg", formData ,{
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning':true
            }
        })
            .then(res => {
                console.log(res.status);
                if (res.status == 201)
                    setMessage(
                        <div className='text-center'>
                            <p className='text-center text-green-400 text-md'>Подтвердите почту в письме</p>
                            <Button size='medium'>Отправить письмо снова</Button>
                        </div>
                    )
                else
                    setMessage(
                        <p className='text-center text-red-400 text-lg'>{res.data.message}</p>
                    );
            }, err => {
                setMessage(
                    <p className='text-center text-red-400 text-lg'>Server Error</p>
                );
            })
    }
    
    return (
        <div>
            <h1 className='text-center text-4xl'>Регистрация</h1>
            <form onSubmit={handleSubmit} className='py-10'>
                <Stack spacing={2} className="min-w-max w-5/6 m-auto">
                    <TextField label="Email" name="email" type="email" autocomplete="email" required/>
                    <TextField label="Login" name="login" autocomplete="username" required/>
                    <TextField label="User name" name="name" autocomplete="nickname" required/>
                    <TextField label="Password" name='pass' id="pass" type="password"  autocomplete="current-password" required/>
                    <Button type='submit' variant='outlined'>Зарегестрироваться</Button>
                    <Link className='text-center' href="/login">Уже есть аккаунт?</Link>
                    <div className='h-3'>{message}</div>
                </Stack>
            </form>
        </div>
    )
}