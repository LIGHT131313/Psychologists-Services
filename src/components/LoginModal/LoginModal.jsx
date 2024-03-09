import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
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
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const dispatch = useDispatch();

  // const onLogIn = values => dispatch(logIn(values));

  const handleLogin = ({ email, password }) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('Logged in:', user);
      })
      .catch(error => {
        console.log('Error:', error);
      });
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
          <StyledLabel name="email" type="email" placeholder="Email" />
          <ErrorMsg name="password" component="div" />
          <PasswordInput />
          <ModalBtnLogIn type="submit">Log In</ModalBtnLogIn>
        </StyledForm>
      </Formik>
    </>
  );
};
