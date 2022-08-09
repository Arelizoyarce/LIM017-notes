/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { updateNote } from '../../services/firebase';

export default function ModalEdit(props) {
    
    const initValue = {
        title: props.newTitleModal,
        containerNote: props.description
    }

    const [newNote, setNewNote] = React.useState(initValue)

    const handleOnChange = ({ target: { name, value } }) => {
        setNewNote({ ...newNote, [name]: value })
    };

    const updateNewNote = () => {
        updateNote(props.docIdent, newNote.title, newNote.containerNote)
    };
    const handleClose = ()=>{

    }
    return (
        <div>
            <DialogTitle>Editar nota</DialogTitle>
            <DialogContent>
                <TextField
                    value={newNote.title}
                    autoFocus
                    name="title"
                    margin="dense"
                    id="title"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={handleOnChange}
                />
                <TextField
                    value={newNote.containerNote}
                    autoFocus
                    name="containerNote"
                    margin="dense"
                    id="description"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={handleOnChange} />
            </DialogContent>
            <Button onClick={updateNewNote}>Editar</Button>
            <Button onClick={handleClose}>Cancelar</Button>
        </div>)
}