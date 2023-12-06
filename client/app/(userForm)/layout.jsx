import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';

export default function FormLayout ({ children }) {

    return (
        <Container maxWidth="sm" className='mt-9'>
            <Paper elevation={10} className=" w-full py-8"  >
                {children}
            </Paper>
        </Container>
    )
}