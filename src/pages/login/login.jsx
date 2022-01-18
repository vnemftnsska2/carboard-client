import React, { useState, } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import Logo from '../../static/images/b-logo.png';
import { useNavigate, } from 'react-router-dom';

const Login = (props) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginInfo = {
      user_id: data.get('user_id'),
      password: data.get('password'),
    };

    if (loginInfo.user_id === 'admin') {
      return navigate('/task');
    }
    return alert('로그인 정보를 확인해주세요 😡');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img src={Logo} width={410}/>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="사용자 ID"
            name="user_id"
            autoComplete="id"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="패스워드"
            type="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disableElevation
            sx={{ mt: 3, mb: 2, backgroundColor: 'black' }}
          >
            <b>로그인</b>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;