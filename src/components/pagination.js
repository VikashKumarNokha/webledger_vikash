import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({totalItem, pagefun}) {

   //console.log("iiiii", pagefun)

  return (
    <Stack spacing={2}>
      <Pagination count={ totalItem ? Math.ceil(totalItem/20) : 1}  onChange={(e, page)=>{ pagefun(page)}} variant="outlined" shape="rounded" />
    </Stack>
  );
}