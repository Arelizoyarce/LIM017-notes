
import * as React from 'react';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
// function Copyright(props: any) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme({
//     palette: {
//         primary: {
//           light: '#757ce8',
//           main: '#3f50b5',
//           dark: '#000000',
//           contrastText: '#fff',
//         },
//         secondary: {
//           light: '#ff7961',
//           main: '#f44336',
//           dark: '#ba000d',
//           contrastText: '#000',
//         },
//       },
// });

export default function WelcomePage() {

    return (
        <Container component="main" maxWidth="cover" sx={{
            minHeight: '100vh',
            backgroundImage: 'url(https://user-images.githubusercontent.com/98667463/181661283-f665150c-3eac-4fe4-97c3-34f44ec0a0ca.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Typography component="h1" variant="h3" sx={{ fontWeight: 'bold', margin: 1 }}>
                        LAB NOTES
                    </Typography>
                    <Typography component="h2" variant="h6">
                        Organiza | Descubre | Disfruta
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image="https://user-images.githubusercontent.com/98667463/181664348-85966d11-a539-43cb-ae14-000df1a88742.png"
                            alt="Paella dish"
                        />

                        <Link to='/register'>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 1, mb: 2, backgroundColor: '#000000', borderRadius: '20px', minHeight: '39px' }}
                            >
                                REGISTRATE
                            </Button>
                        </Link>
                        <Link to='/login'>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 1, mb: 2, color: '#000000', backgroundColor: '#ffffff', borderRadius: '20px', minHeight: '39px', border: 'solid #000000' }}
                            >
                                INGRESA
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
