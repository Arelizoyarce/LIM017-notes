import * as React from 'react';
import CreateNotes from './CreateNotes';
import AllNotes from './AllNotes'
import { Grid } from '@mui/material';

export default function Dashboard() {
    return (
        <div>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid item>
                <CreateNotes />
                </Grid>
                <Grid item>
                <AllNotes />
                </Grid>
            </Grid>
        </div>
    )
}