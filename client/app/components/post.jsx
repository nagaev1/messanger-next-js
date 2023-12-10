import { IconButton, Avatar, Typography, Button, Link, ButtonGroup  } from "@mui/material"
import {Card, CardHeader, CardMedia, CardContent, CardActions} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ReplyIcon from '@mui/icons-material/Reply';





export default function Post (props) {


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
                        name
                    </Link>
                }
                subheader="34 минуты назад"
            />
            
            <CardContent >
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like. .....
                </Typography>
            </CardContent>

            <Link href="#">
                <CardMedia
                    component="img"
                    height="194"
                    image="/cat.gif"
                    alt="Paella dish"
                />
            </Link>

            <CardActions className="flex justify-between">
                <ButtonGroup size="" variant="text">
                    <Button startIcon={<ThumbUpAltIcon />}>
                        12 m.
                    </Button>
                    <Button startIcon={<ThumbDownAltIcon />}>
                        34 k.
                    </Button>
                    <Button size="small" startIcon={<CommentIcon />}>
                        48 k.
                    </Button>
                </ButtonGroup>

                <IconButton color="primary">
                    <ReplyIcon/>
                </IconButton>
                
            </CardActions>

        </Card>
    )
}