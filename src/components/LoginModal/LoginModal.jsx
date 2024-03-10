// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { setUser } from '../../redux/auth/authSlice';

import {
  ModalBtnLogIn,
  LogInText,
  LogInTitle,
  StyledForm,
  StyledLabel,
  ErrorMsg,
} from './LoginModal.styled';
import { Formik } from 'formik';
import { LoginFormSchema } from 'schemas';
import { PasswordInput } from 'components/PasswordInput/PasswordInput';

export const LoginModal = () => {
  const dispatch = useDispatch();

  // const onLogIn = values => dispatch(logIn(values));

  const handleLogin = async ({ email, password }) => {
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      if (user) {
        const userToken = await user.getIdToken();
        dispatch(
          setUser({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            token: userToken,
          })
        );
      }
      console.log('Login successful:', user);
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        alert(
          'The supplied auth credential is incorrect, malformed or has expired.'
        );
      } else if (error.code === 'auth/user-disabled') {
        alert('The user account has been disabled by an administrator.');
      }
    }
  };

  return (
    <>
      <LogInTitle>Log In</LogInTitle>
      <LogInText>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </LogInText>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginFormSchema}
        onSubmit={(values, actions) => {
          handleLogin(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <ErrorMsg name="email" component="div" />
          <StyledLabel
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="off"
          />
          <ErrorMsg name="password" component="div" />
          <PasswordInput />
          <ModalBtnLogIn type="submit">Log In</ModalBtnLogIn>
        </StyledForm>
      </Formik>
    </>
  );
};
