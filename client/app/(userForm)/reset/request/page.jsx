"use client"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { useRouter } from 'next/navigation'


export default function ResetPassEmail () {
    const router = useRouter()
    
    function handleSubmit(e) {
        e.preventDefault()

        router.push('/reset/request/check-email')
    } 

    return (
        <div>
            <h1 className='text-4xl text-center'>Восстановление пароля</h1>
            <form className='py-10' onSubmit={handleSubmit}>
                <Stack spacing={2}  className="min-w-max w-5/6 m-auto">
                    <TextField label='Введите Email' name='email' type='email' autoComplete='email' required />
                    <Button variant='outlined' type='submit'>Сбросить пароль</Button>
                </Stack>
            </form>
        </div>
    )
}