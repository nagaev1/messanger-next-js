"use client"
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import { useState } from 'react';

import axios from 'axios';

export default function () {
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
                    setMessage(
                        <p className='text-center text-green-400 text-lg'>{res.data.message}</p>
                    );
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
        <Container maxWidth="sm" className='mt-9'>
            <Paper elevation={10} className=" w-full py-8"  >
                <h1 className='text-center text-4xl'>Вход</h1>
                <form onSubmit={handleSubmit} className='py-10'>
                    <Stack spacing={2} className="min-w-max w-2/3 m-auto">
                        <TextField label="Email" name="email" type="email" required/>
                        <TextField label="Password" name="pass" type="password" required/>
                        <Button type='submit' variant='outlined'>Войти</Button>
                        <Link className='text-center' href="/reg">Нет аккаунта?</Link>
                        <div className='h-1'>{message}</div>
                    </Stack>
                </form>
            </Paper>
        </Container>
    )
}