
import { Container, Paper, Stack  } from "@mui/material"

import Post from "@/app/components/post"

export default function PostPage() {

    return (
        <Container maxWidth="lg" className="my-14 h-screen">
            <Stack spacing={2} className="">
                <Post
                name="BibiBababobob"
                date="34 минуты назад"
                title="Lorem ipsum dolor sit amet consectdetur adip"
                type="meme"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolore et saepe facilis animi labore ipsum quas aperiam repellat eum."
                
                media={{src: "/томас%20и%20уильям.mp4", component: "video"}}        
                />

                <div className="">
                    comments
                </div>
                
            </Stack>      
            
        </Container>
    )
}