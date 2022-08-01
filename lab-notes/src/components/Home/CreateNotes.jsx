import * as React from 'react';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


export default function CreateNotes() {
    return (
        <Box sx={{ marginTop: 20, maxWidth: 300}}>
            <Typography sx={{ fontSize: 40 }}>
                Crear nueva nota
            </Typography>
            <TextField id="standard-basic" label="Title" variant="standard" fullWidth />
            <TextField
                sx={{
                    mt: 5
                }}
                fullWidth
                id="standard-multiline-static"
                label="Note"
                multiline
                rows={4}
                variant="standard"
            />
            <Button>Submit</Button>
        </Box>
        // <Card sx={{ minWidth: 275 }}>
        //   <CardContent>
        //     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        //       Word of the Day
        //     </Typography>
        //     <Typography variant="h5" component="div">
        //       be{bull}nev{bull}o{bull}lent
        //     </Typography>
        //     <Typography sx={{ mb: 1.5 }} color="text.secondary">
        //       adjective
        //     </Typography>
        //     <Typography variant="body2">
        //       well meaning and kindly.
        //       <br />
        //       {'"a benevolent smile"'}
        //     </Typography>
        //   </CardContent>
        //   <CardActions>
        //     <Button size="small">Learn More</Button>
        //   </CardActions>
        // </Card>
    );
}