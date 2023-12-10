
import { Container, Paper, Stack  } from "@mui/material"

import Post from "@/app/components/post"

export default function Home() {
  
  return (
    <Container maxWidth="lg" className="my-14 h-screen">
      <Stack spacing={2} className="w-1/2">
        <Post
          name="BibiBababobob"
          date="34 минуты назад"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolore et saepe facilis animi labore ipsum quas aperiam repellat eum."
          media={{src: "/томас%20и%20уильям.mp4", component: "video"}}        
        />
        <Post
          name="BibiBababobob"
          date="34 минуты назад"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolore et saepe facilis animi labore ipsum quas aperiam repellat eum."
          media={{src: "/томас%20и%20уильям.mp4", component: "video"}}        
        />
      </Stack>      
    </Container>
  )
}
