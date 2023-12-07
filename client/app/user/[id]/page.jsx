

import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container'
import { Paper } from '@mui/material'
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import MessageIcon from '@mui/icons-material/Message';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function (props) {

    return (
        <Container maxWidth="md" className='my-20'>
            <Paper sx={{background: `url(${"https://racksburg.com/wp-content/uploads/2020/12/codes.jpg"})`, height: "12rem", backgroundPosition: "center"}}>
                <div  className='relative top-2/3 w-40 sm:left-10'>
                    <Avatar sx={{ borderRadius: "4px", width: "100%", height: "10rem", position: "relative" }}  />
                    <p className='align-middle mt-2 text-2xl'>NicknameISSOTY</p>
                </div>                
            </Paper>
            <Paper className='h-52 py-4 px-5'>
                <div className="text-right">
                    <IconButton aria-label="delete">
                        <PersonAddIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <MessageIcon />
                    </IconButton>
                </div>
            </Paper>
            <Paper className="mt-2 p-2">
                <Paper square={false} className='h-40 flex justify-center items-center '>
                    <div className='text-3xl'>No posts</div>
                </Paper>
            </Paper>
            
        </Container>
    )

}