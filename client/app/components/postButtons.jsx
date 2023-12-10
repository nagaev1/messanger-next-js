'use client'

import { Button, ButtonGroup } from "@mui/material"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import CommentIcon from '@mui/icons-material/Comment';

import { useState } from "react"

export default function PostButtons () {
    const [like, setLike] = useState(false)
    const [dislike, setDislike] = useState(false)





    return (
        <ButtonGroup size="" variant="text">
            <Button onClick={() => { setDislike(false); setLike(!like) }} color={like ? "error" : "primary"} startIcon={<ThumbUpAltIcon />}>
                12 m.
            </Button>
            <Button onClick={() => { setDislike(!dislike); setLike(false) }} color={dislike ? "secondary" : "primary"} startIcon={<ThumbDownAltIcon />}>
                34 k.
            </Button>
            <Button size="small" startIcon={<CommentIcon />}>
                48 k.
            </Button>
        </ButtonGroup>
    )
}