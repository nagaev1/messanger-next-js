"use client"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function ResetPassForm () {
    
    function handleSubmit(e) {
        e.preventDefault()
    } 

    return (
        <div>
            <h1 className='text-4xl text-center'>Восстановление пароля</h1>
            <form className='py-10' onSubmit={handleSubmit}>
                <Stack spacing={2}  className="min-w-max w-5/6 m-auto">
                    <TextField label='Новый пароль' name='pass' type='password' autoComplete='off' required />
                    <TextField label='Подтвердите пароль' type='password' name='confim' autoComplete='off' required />
                    <Button variant='outlined' type='submit'>Изменить пароль</Button>
                </Stack>
            </form>
        </div>
    )
}