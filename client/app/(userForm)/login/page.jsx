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
        axios.post("/api/users/log", formData ,{
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning':true
            }
        })
            .then(res => {
                console.log(res.status);
                if (res.status == 201)
                    router.push(`/user/ТутБудетНик`)  
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
            <h1 className='text-center text-4xl'>Вход</h1>
            <form onSubmit={handleSubmit} className='py-10'>
                <Stack spacing={2} className="min-w-max w-5/6 m-auto">
                    <TextField label="Email или Login" name="email" autoComplete="email" required/>
                    <TextField label="Password" name="pass" type="password" autoComplete="current-password" required/>
                    <Button type='submit' variant='outlined'>Войти</Button>
                    <Link className='text-center' href="/reg">Нет аккаунта?</Link>
                    <Link className='text-center' href="/reset/request">Не помню пароль?</Link>
                    <div className='h-1'>{message}</div>
                </Stack>
            </form>
        </div>
    )
}