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
import {registerUser} from '../../../services/firebase.js'

export default function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            user: data.get('user'),
            email: data.get('email'),
            password: data.get('password'),
        });
        registerUser(data.get('email'), data.get('password'), data.get('user'))
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
            // Provide every color token (light, main, dark, and contrastText) when using
            // custom colors for props in Material UI's components.
            // Then you will be able to use it like this: `<Button color="custom">`
            // (For TypeScript, you need to add module augmentation for the `custom` value)
            custom: {
                light: '#ffffff',
                main: '#000000',
                dark: '#6719F8',
                contrastText: '#ffffff',
            },
            // Used by `getContrastText()` to maximize the contrast between
            // the background and the text.
            contrastThreshold: 3,
            // Used by the functions below to shift a color's luminance by approximately
            // two indexes within its tonal palette.
            // E.g., shift from Red 500 to Red 300 or Red 700.
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