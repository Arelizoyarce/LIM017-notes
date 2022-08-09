/* eslint-disable no-unused-vars */
import { Box, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CardContent from '@mui/material/CardContent';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalEdit from './Modal.jsx';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { getNote, deleteNote, getOneNote } from '../../services/firebase.js'

export default function AllNotes() {

    //firebase and print data
    const [notes, setNotes] = useState([]);

    const getAllNotes = () => {
        getNote((query) => {
            const docs = [];
            const idUser = localStorage.getItem('userId')
            query.forEach((doc) => {
                docs.push({ ...doc.data(), idDoc: doc.id })
            });
            const docsUserLogin = docs.filter((e) => e.id === idUser)
            setNotes(docsUserLogin)
        })
    };
    //menu
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        //close menu
        setAnchorEl(null);
        //close Dialog
        setOpen(false);
        //close Modal
        setOpenModal(false)
    };

    //dialog
    const [openDialog, setOpen] = useState(false);
    const handleOpenDialog = () => {
        setOpen(true);
    };

    //modal
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        getAllNotes()
    });

    //delete note
    const deleteNotes = (event) => {
        setOpen(false);
        deleteNote(event.target.id)
    };

    //enviar props a modal
    const [titleModal, setTitleModal] = useState('');
    const [descriptionModal, setDescriptionModal] = useState('')
    const [docId, setDocId]=useState('')
    const handleEditNote = (event) => {
        getOneNote(event.target.id).then((note) => {
            setOpenModal(true)
            setDocId(event.target.id)
            setTitleModal(note.data().title);
            setDescriptionModal(note.data().containerNote)
        });
    }


    return (
        <Box sx={{ marginTop: 20 }}>
            {notes.map((e) => {
                return <Card key={e.idDoc} sx={{ minWidth: 275, m: 4 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {e.title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {e.containerNote}
                        </Typography>
                        <CardActions>
                            <Button onClick={handleClick}><MoreHorizIcon></MoreHorizIcon></Button>
                            <Menu onClose={handleClose}
                                anchorEl={anchorEl}
                                open={open}>
                                <MenuItem id={e.idDoc} onClick={handleEditNote} disableRipple>
                                    <EditIcon />
                                    Editar
                                </MenuItem>
                                <Divider sx={{ my: 0.5 }} />
                                <MenuItem onClick={handleOpenDialog} disableRipple>
                                    <DeleteIcon />
                                    Eliminar
                                </MenuItem>
                            </Menu>
                            <Dialog
                                open={openDialog}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    ¿Está segurx de eliminar esta nota?
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Esta acción es irrevercible
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancelar</Button>
                                    <Button id={e.idDoc} onClick={deleteNotes}>
                                        Eliminar
                                    </Button>
                                </DialogActions>
                            </Dialog>
                            <Dialog open={openModal}>
                                <ModalEdit
                                    newTitleModal={titleModal}
                                    description={descriptionModal}
                                    docIdent={docId}
                                />
                            </Dialog>
                        </CardActions>
                    </CardContent>
                </Card>
            })}
        </Box>
    )
}

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// export default function AlertDialog() {
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open alert dialog
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           {"Use Google's location service?"}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Let Google help apps determine location. This means sending anonymous
//             location data to Google, even when no apps are running.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Disagree</Button>
//           <Button onClick={handleClose} autoFocus>
//             Agree
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

