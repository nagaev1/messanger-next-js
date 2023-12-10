
import { Container, Paper } from "@mui/material"

import Post from "@/app/components/post"

export default function Home() {
  
  return (
    <Container maxWidth="lg" className="my-14 h-screen">
      <div className="w-1/2">
        <Post />
      </div>
      
    </Container>
  )
}
