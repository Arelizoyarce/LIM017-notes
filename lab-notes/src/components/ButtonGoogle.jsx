import * as React from 'react';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';

export default function ButtonGoogle() {
    return (
        <Button
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2, backgroundColor: '#ffffff',borderRadius: '20px', minHeight: '39px' , color:'#000000'}}
        >
            <GoogleIcon></GoogleIcon>
            INGRESAR CON GOOGLE
        </Button>
    );
}