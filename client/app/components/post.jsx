import { IconButton, Avatar, Typography, Button, Link, ButtonGroup, MobileStepper   } from "@mui/material"
import {Card, CardHeader, CardMedia, CardContent, CardActions} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ReplyIcon from '@mui/icons-material/Reply';

import PostButtons from "./postButtons";




export default function Post (props) {



    function createMedia () {
        if (!props.media)
            return
        if (props.media.constructor === Array) {
            return (
                <p>Array</p>
            )
        }
        else {
            return (
                <CardMedia
                    component={props.media.component}
                    image={props.media.src}
                    autoPlay
                    controls
                />
            )
        }
    }


    return (
        <Card>

            <CardHeader
                avatar={
                    <Link href="/user/me">
                        <Avatar />
                    </Link>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreHorizIcon />
                    </IconButton>
                }
                title={
                    <Link href="/user/me" color="text.primary" underline="none">
                        {props.name}
                    </Link>
                }
                subheader={props.date}
            />
            
            <CardContent >
                <Typography variant="body2" color="text.secondary">
                    {props.text}
                </Typography>
            </CardContent>

            
            {createMedia()}
            

            <CardActions className="flex justify-between">
                <PostButtons/>
                <IconButton color="primary">
                    <ReplyIcon/>
                </IconButton>
                
            </CardActions>

        </Card>
    )
}