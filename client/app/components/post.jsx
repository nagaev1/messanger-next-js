import { IconButton, Avatar, Typography, Button, Link, ButtonGroup, MobileStepper, Chip   } from "@mui/material"
import {Card, CardHeader, CardMedia, CardContent, CardActions} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ReplyIcon from '@mui/icons-material/Reply';

import PostButtons from "./postButtons";
import PostMedia from "./postMedia";




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
                    <Link href={props.url}>
                        <Avatar />
                    </Link>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreHorizIcon />
                    </IconButton>
                }
                title={
                    <Link href="/u/me" color="text.primary" underline="none">
                        {props.name}
                    </Link>
                }
                subheader={props.date}
            />

            <Link href={props.url} underline={props.url ? "hover" : "none"}>
                <CardContent >
                    <Typography variant="h5"  color="text.secondary">
                        {props.title}
                    
                    </Typography>
                    <Chip label={props.type} className="mx-auto" color="info" size="small" href="#" clickable />
                </CardContent>

                <CardContent >
                    <Typography variant="body2" color="text.secondary">
                        {props.text.length >= 300 ?
                            props.text.slice(0, 300) + "..."
                            : props.text
                        }
                    </Typography>
                </CardContent>  
            </Link>
            
            <PostMedia media={props.media} />
            

            <CardActions className="flex justify-between">
                <PostButtons/>
                <IconButton color="primary">
                    <ReplyIcon/>
                </IconButton>
                
            </CardActions>

        </Card>
    )
}