import * as React from 'react';
import Grid from '@mui/material/Grid';

export default function Banner() {
    return (
        <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                backgroundImage: 'url(https://user-images.githubusercontent.com/98667463/181680538-6e150ce8-0e7f-4865-8cbf-e2c15422c706.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        />
    )
}
