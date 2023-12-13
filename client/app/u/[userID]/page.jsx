

import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container'
import { Paper } from '@mui/material'
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import Post from '@/app/components/post';

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
            <Post
          name="BibiBababobob"
          date="34 минуты назад"
          url="/u/me/post/postID/PostName"
          title="Lorem ipsum dolor sit amet consectetur adip"
          type="Discussion"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius sunt repellendus a consequatur quos, officia voluptas autem repellat optio quam eligendi, labore omnis facere, cumque consectetur culpa quaerat corporis facilis enim sapiente velit pariatur quod recusandae! Nam iusto quae sunt et rerum doloremque eum rem. Libero totam officia quidem odit commodi quo, illum corrupti cupiditate a vero blanditiis, enim velit neque reprehenderit consectetur sed delectus facilis omnis dolor quos quaerat rem ea error. Laudantium minima doloribus tempora amet libero commodi, aperiam recusandae necessitatibus. Ea aperiam vel tenetur, culpa impedit reprehenderit odit, similique ab et molestiae, minus quos quis tempore natus. Iusto tempore praesentium dolorem consectetur eligendi deleniti! Quis eligendi doloremque ipsum iste, facilis, nostrum sint corporis voluptates nesciunt ullam ad excepturi natus numquam minus sed et repudiandae aspernatur ea dignissimos! Eum earum nam ipsum odit odio dolorum reiciendis nihil hic, quos blanditiis optio. Qui facilis esse rerum vitae praesentium nemo at enim inventore suscipit officiis. Animi labore expedita amet doloremque delectus architecto. Expedita sit consectetur accusamus iusto culpa id amet consequuntur optio adipisci. Laudantium numquam cum sit beatae voluptatem! Repellat voluptate totam quod, excepturi quam fuga adipisci qui necessitatibus unde ipsa sint inventore doloribus illo aliquid maiores consectetur sit. Perspiciatis!."
          media={{src: "/томас%20и%20уильям.mp4", component: "video"}}        
        />
            </Paper>
            
        </Container>
    )

}