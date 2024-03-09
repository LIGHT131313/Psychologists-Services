import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
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
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const dispatch = useDispatch();

  // const onLogIn = values => dispatch(logIn(values));

  const handleRegistration = ({ email, password }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log(userCredential);
        const user = userCredential.user;
        console.log('Registered:', user);
      })
      .catch(error => {
        console.log('Error:', error);
      });
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
          <StyledLabel name="name" type="text" placeholder="Name" />
          <ErrorMsg name="email" component="div" />
          <StyledLabel name="email" type="email" placeholder="Email" />
          <ErrorMsg name="password" component="div" />
          <PasswordInput />
          <ModalBtnLogIn type="submit">Sign Up</ModalBtnLogIn>
        </StyledForm>
      </Formik>
    </>
  );
};
