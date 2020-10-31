import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo_1.png';
import { apiIntegracaoImvs } from '../../services/apiIntegracaoImoveis';
import { Background, LogoContainer, useStyles } from './styles';

export default function SignUp() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastname] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      firstName,
      lastName,
      email,
      password,
    };

    const resetFiled = () => {
      setFirstName('');
      setLastname('');
      setUsername('');
      setEmail('');
      setPassword('');
      setLoading('');
    };

    await apiIntegracaoImvs.user.signUp(newUser)
      .then(() => {
        setLoading(true);
        resetFiled();
      }).finally(
        () => setLoading(false),
      );
  };

  return (
    <Background>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <LogoContainer>
            <Link to="/Home"><img src={logoImg} alt="" /></Link>
          </LogoContainer>
          <form className={classes.form} noValidate onSubmit={handleSignUp}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Primeiro nome"
                  autoFocus
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Sobrenome"
                  name="lastName"
                  autoComplete="lname"
                  value={lastName}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Usuario"
                  name="username"
                  autoComplete="Usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Link to="Login" variant="body2" className={classes.link}>
                  Ja tem cadastro? Voltar para tela de login.
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {loading ? 'Loading' : 'Cadastrar'}
            </Button>
          </form>
        </div>
        <Box mt={5} />
      </Container>
    </Background>
  );
}
