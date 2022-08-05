import * as React from 'react';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import {addNote} from '../../services/firebase.js'


export default function CreateNotes() {
    const initValuesNote = {
        id: localStorage.getItem('userId'),
        title: '',
        containerNote: ''
    };
    const [note, setNote] = useState(initValuesNote);

    const handleChangesNoteValue = ({ target: { name, value } }) => {
        setNote({ ...note, [name]: value })
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        addNote(note);
        setNote({...initValuesNote})
    }
    return (
        <Box sx={{ marginTop: 20, maxWidth: 300 }}>
            <Typography sx={{ fontSize: 40 }}>
                Crear nueva nota
            </Typography>
            <Box>
            <TextField id="standard-basic" label="Title" variant="standard" fullWidth name='title' onChange={handleChangesNoteValue}  value={note.title}/>
            <TextField
                onChange={handleChangesNoteValue}
                sx={{
                    mt: 5
                }}
                fullWidth
                id="standard-multiline-static"
                label="Note"
                multiline
                rows={4}
                variant="standard"
                name='containerNote'
                value={note.containerNote}
            />
            <Button onClick={handleSubmit}>Submit</Button>
            </Box>
        </Box>
    );
}