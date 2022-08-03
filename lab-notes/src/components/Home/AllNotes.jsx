import { Box } from '@mui/material';
import * as React from 'react';
import { getNote } from '../../services/firebase.js'

export default class AllNotes extends React.Component {
    constructor() {
        super();
        this.arrayNotes = []
        this.seeNotes = this.arrayNotes.map(note => <p key={note.id}>{note.title}</p>)
      }
    componentDidMount() {
        getNote((query) => {
            const containerNotes = []
            query.forEach((doc)=>{
             containerNotes.push(doc.data())
            })
            this.arrayNotes = containerNotes;
        })
    }
    render() {
        return (
            <Box sx={{ marginTop: 20 }}>
                {this.seeNotes}
            </Box>
        )
    }
}

// {data.map(person => <p key={person.name}>{`${person.name}, ${person.age} years old`}