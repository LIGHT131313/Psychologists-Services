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
} from '../LoginModal/LoginModal.styled';
import { Formik } from 'formik';
import { RegistrationFormSchema } from 'schemas';
import { PasswordInput } from 'components/PasswordInput/PasswordInput';

export const RegistrationModal = () => {
  const dispatch = useDispatch();
  // const onLogIn = values => dispatch(logIn(values));

  const handleRegistration = async ({ name, email, password }) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (user) {
        await user.updateProfile({
          displayName: name,
        });
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

      console.log('Registration successful:', user);
    } catch (error) {
      console.error('Registration failed:', error.message);
      if (error.code === 'auth/email-already-in-use') {
        alert('The email address is already in use');
      } else if (error.code === 'auth/invalid-email') {
        alert('The email address is not valid.');
      } else if (error.code === 'auth/operation-not-allowed') {
        alert('Operation not allowed.');
      } else if (error.code === 'auth/weak-password') {
        alert('The password is too weak.');
      }
    }
  };

  return (
    <>
      <LogInTitle>Registration</LogInTitle>
      <LogInText>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </LogInText>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegistrationFormSchema}
        onSubmit={(values, actions) => {
          handleRegistration(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <ErrorMsg name="name" component="div" />
          <StyledLabel
            name="name"
            type="text"
            placeholder="Name"
            autoComplete="off"
          />
          <ErrorMsg name="email" component="div" />
          <StyledLabel
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="off"
          />
          <ErrorMsg name="password" component="div" />
          <PasswordInput />
          <ModalBtnLogIn type="submit">Sign Up</ModalBtnLogIn>
        </StyledForm>
      </Formik>
    </>
  );
};
