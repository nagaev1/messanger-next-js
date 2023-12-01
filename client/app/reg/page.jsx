
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function () {
    return (
        <Container maxWidth="sm" className='mt-9'>
            <Paper elevation={10} className=" w-full py-8"  >
                <h1 className='text-center text-4xl'>Регистрация</h1>
                <form action="/api/users" method="post" className='py-10'>
                    <Stack spacing={2} className="min-w-max w-2/3 m-auto">
                        <TextField label="Login" name="login" required/>
                        <TextField label="Email" name="email" type="email" required/>
                        <TextField label="Password" name="pass" type="password" required/>
                        <Button type='submit' variant='outlined'>Register</Button>
                    </Stack>
                </form>
            </Paper>
        </Container>
    )
}