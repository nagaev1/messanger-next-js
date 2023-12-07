
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Loading () {

    return (
        <div>
            <h1 className='text-3xl text-center'>Loading...</h1>
            <Stack spacing={2} className="min-w-max w-5/6 m-auto py-10">
                 <Skeleton sx={{height: "4rem"}}/>
                 <Skeleton sx={{height: "4rem"}}/>
                 <Skeleton sx={{height: "4rem"}}/>
            </Stack>
        </div>
    )
}