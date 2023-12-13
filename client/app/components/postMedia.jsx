'use client'

import { useState } from "react";

import { CardMedia, Modal, Paper } from "@mui/material"

import Carousel from 'react-material-ui-carousel'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  



export default function PostMedia (props) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    if (!props.media)
            return
    if (props.media.constructor === Array) {
        return (
            <CardMedia>
                <Carousel 
                autoPlay={false} 
                animation="slide" 
                swipe={true}
                cycleNavigation={false}
                navButtonsAlwaysVisible
                indicators={false}
                >
                    {props.media.map((el, i) => {                        
                        if (el.component === "img")
                            return (
                            <div className="flex justify-center max-h-[40rem] min-h-[20rem]"  key={i}>
                                <img src={el.src} alt="text" className="object-contain w-full"/>
                            </div>
                            )
                        else if (el.component === "video")
                            return (
                            <div className="flex justify-center max-h-[40rem] min-h-[20rem] " key={i}>
                                <video src={el.src}  controls/>
                            </div>
                            )           
                    })}
                </Carousel>
            </CardMedia>
        )
    }
    else {
        return (
            <div>
                <CardMedia
                    sx={{":hover": { cursor: "pointer"}}}
                    onClick={handleOpen}
                    component={props.media.component}
                    image={props.media.src}
                    controls
                />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Paper elevation={10} sx={style}>
                        dafafadssssssssssssssssssssssssssssssssssssssssssssssssssss 
                    </Paper>
                </Modal>
            </div>
            
        )
    }


}