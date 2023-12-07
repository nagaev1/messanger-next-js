
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Loading () {

    return (
        <div>
            <Stack className="min-w-max w-5/6 m-auto py-10">
                 <Skeleton sx={{height: "6rem"}}/>
                 <Skeleton sx={{height: "6rem"}}/>
                 <Skeleton sx={{height: "6rem"}}/>
            </Stack>
        </div>
    )
}