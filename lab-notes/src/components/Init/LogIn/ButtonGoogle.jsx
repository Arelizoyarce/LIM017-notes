import * as React from 'react';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import {googleSingIn} from '../../../services/firebase.js'
import { useNavigate } from 'react-router-dom';

export default function ButtonGoogle() {
    const navigate = useNavigate()
    
    const handleSingInWithGoogle=()=>{
        googleSingIn().then((data)=>{
            localStorage.setItem('userId',data.user.uid)
            navigate('/home')
        })
    }
    return (
        <Button onClick={handleSingInWithGoogle}
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2, backgroundColor: '#ffffff',borderRadius: '20px', minHeight: '39px' , color:'#000000'}}
        >
            <GoogleIcon></GoogleIcon>
            INGRESAR CON GOOGLE
        </Button>
    );
}