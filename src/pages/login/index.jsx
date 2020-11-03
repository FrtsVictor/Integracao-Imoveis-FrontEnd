import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthProviderIntegracao';
import { Background, useStyles, LogoContainer } from './styles';
import logoImg from '../../assets/logo_1.png';

export const Login = () => {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) return;

    setLoading(true);

    try {
      await login(username, password);
      console.log('Login Sucess');
      history.push('/favoritos');
    } catch (error) {
      console.log('Login  error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Background>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>

          <LogoContainer>
            <Link to="/Home"><img src={logoImg} alt="" /></Link>
          </LogoContainer>
          <form className={classes.form} noValidate onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Usuário"
              name="username"
              autoComplete="usename"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Sua senha"
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar minhas credenciais"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {loading ? 'Loading' : 'Entrar'}
            </Button>
            <Grid item>
              <Link to="/cadastro" variant="body2">
                Não tem uma conta? Crie aqui
              </Link>
            </Grid>
          </form>
        </div>
      </Container>
    </Background>
  );
};
