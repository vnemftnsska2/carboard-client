import React, { useRef, } from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Container,
} from '@mui/material';
import Logo from '../../static/images/b-logo.png';
import { useNavigate, } from 'react-router-dom';
import crypto from 'crypto-js';

const Login = ({ authRepository }) => {
  const navigate = useNavigate();
  const passwordRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginInfo = {
      user_id: data.get('user_id'),
      password: crypto.AES.encrypt(data.get('password'), process.env.REACT_APP_CRYPT_KEY).toString(),
    };

    const authRet = await authRepository.login(loginInfo);
    if (authRet.status === 200) {
      return navigate('/task');
    } else if (authRet.status === 401) {
      alert('로그인 정보를 확인해주세요 😡');
      passwordRef.current.value = '';
    }
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
            inputRef={passwordRef}
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