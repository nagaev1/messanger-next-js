
import { Container, Paper, Stack  } from "@mui/material"

import Post from "@/app/components/post"

export default function Home() {
  
  return (
    <Container maxWidth="md" className="mt-20 mb-40 min-h-screen">
      <Stack spacing={2} className="">
        <Post
          name="BibiBababobob"
          date="34 минуты назад"
          url="/u/me/post/postID/PostName"
          title="Lorem ipsum dolor sit amet consectdetur adip"
          type="meme"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolore et saepe facilis animi labore ipsum quas aperiam repellat eum."
          media={{src: "/томас%20и%20уильям.mp4", component: "video"}}        
        />
        <Post
          name="BibiBababobob"
          date="34 минуты назад"
          url="/u/me/post/postID/PostName"
          title="Lorem ipsum dolor sit amet consectetur adip"
          type="Discussion"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius sunt repellendus a consequatur quos, officia voluptas autem repellat optio quam eligendi, labore omnis facere, cumque consectetur culpa quaerat corporis facilis enim sapiente velit pariatur quod recusandae! Nam iusto quae sunt et rerum doloremque eum rem. Libero totam officia quidem odit commodi quo, illum corrupti cupiditate a vero blanditiis, enim velit neque reprehenderit consectetur sed delectus facilis omnis dolor quos quaerat rem ea error. Laudantium minima doloribus tempora amet libero commodi, aperiam recusandae necessitatibus. Ea aperiam vel tenetur, culpa impedit reprehenderit odit, similique ab et molestiae, minus quos quis tempore natus. Iusto tempore praesentium dolorem consectetur eligendi deleniti! Quis eligendi doloremque ipsum iste, facilis, nostrum sint corporis voluptates nesciunt ullam ad excepturi natus numquam minus sed et repudiandae aspernatur ea dignissimos! Eum earum nam ipsum odit odio dolorum reiciendis nihil hic, quos blanditiis optio. Qui facilis esse rerum vitae praesentium nemo at enim inventore suscipit officiis. Animi labore expedita amet doloremque delectus architecto. Expedita sit consectetur accusamus iusto culpa id amet consequuntur optio adipisci. Laudantium numquam cum sit beatae voluptatem! Repellat voluptate totam quod, excepturi quam fuga adipisci qui necessitatibus unde ipsa sint inventore doloribus illo aliquid maiores consectetur sit. Perspiciatis!."
          media={{src: "/cat.gif", component: "img"}}        
        />
        <Post
          name="BibiBababobob"
          date="34 минуты назад"
          url="/u/me/post/postID/PostName"
          title="Lorem ipsum dolor sit amet consectetur adip"
          type="Discussion"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius sunt repellendus a consequatur quos, officia voluptas autem repellat optio quam eligendi, labore omnis facere, cumque consectetur culpa quaerat corporis facilis enim sapiente velit pariatur quod recusandae! Nam iusto quae sunt et rerum doloremque eum rem. Libero totam officia quidem odit commodi quo, illum corrupti cupiditate a vero blanditiis, enim velit neque reprehenderit consectetur sed delectus facilis omnis dolor quos quaerat rem ea error. Laudantium minima doloribus tempora amet libero commodi, aperiam recusandae necessitatibus. Ea aperiam vel tenetur, culpa impedit reprehenderit odit, similique ab et molestiae, minus quos quis tempore natus. Iusto tempore praesentium dolorem consectetur eligendi deleniti! Quis eligendi doloremque ipsum iste, facilis, nostrum sint corporis voluptates nesciunt ullam ad excepturi natus numquam minus sed et repudiandae aspernatur ea dignissimos! Eum earum nam ipsum odit odio dolorum reiciendis nihil hic, quos blanditiis optio. Qui facilis esse rerum vitae praesentium nemo at enim inventore suscipit officiis. Animi labore expedita amet doloremque delectus architecto. Expedita sit consectetur accusamus iusto culpa id amet consequuntur optio adipisci. Laudantium numquam cum sit beatae voluptatem! Repellat voluptate totam quod, excepturi quam fuga adipisci qui necessitatibus unde ipsa sint inventore doloribus illo aliquid maiores consectetur sit. Perspiciatis!."
          media={[{src: "/cat.gif", component: "img"}, {src: "/томас%20и%20уильям.mp4", component: "video"}]}        
        />
      </Stack>      
      
    </Container>
  )
}
