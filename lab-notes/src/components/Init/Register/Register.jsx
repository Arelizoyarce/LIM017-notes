import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Banner from '../Banner';
import {registerUser} from '../../../services/firebase.js';
import { useState } from "react";

export default function Register() {

    const [userRegister, setValue] = useState({
        user: '',
        email: '',
        password: ''
    })

    const handleChangesValues = ({ target: { name, value }})=>{
        setValue({...userRegister, [name]: value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        registerUser(userRegister.email, userRegister.password, userRegister.user)
    };

    
    const theme = createTheme({
        palette: {
            primary: {
                main: '#ffffff'
                // dark: will be calculated from palette.primary.main,
                // contrastText: will be calculated to contrast with palette.primary.main
            },
            secondary: {
                light: '#ffffff',
                main: '#000000',
                // dark: will be calculated from palette.secondary.main,
                contrastText: '#ffffff',
            },
            custom: {
                light: '#ffffff',
                main: '#000000',
                dark: '#6719F8',
                contrastText: '#ffffff',
            },
            contrastThreshold: 3,
            tonalOffset: 0.2,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Banner></Banner>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: '#31D0FF', px:3 }}>
                    <Link to='/'>
                        <Box sx={{ my: 9, mx: 4, display: 'flex', alignItems: 'end' }}>
                            <ClearIcon sx={{ border: 'solid #ffffff', color: '#ffffff', borderRadius: '20px' }}></ClearIcon>
                        </Box>
                    </Link>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', margin: 1, color: '#ffffff' }}>
                            Registrate
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="user"
                                label="User:"
                                name="user"
                                autoComplete="user"
                                autoFocus
                                onChange={handleChangesValues}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email:"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleChangesValues}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password:"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChangesValues}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="custom"
                                sx={{ mt: 1, mb: 2,borderRadius: '20px', minHeight: '39px'}}
                            >
                                CREAR CUENTA
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            </ThemeProvider>
    );
}