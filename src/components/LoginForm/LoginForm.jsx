import React, { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
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

  const handleRegistration = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('Registered:', user);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(userCredential => {
        // console.log('LogOUT');
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  const handleCurrent = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        console.log('Current user UID and email:', uid, email);
      } else {
        console.log('User signOUT');
      }
    });
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Увійти</button>
      <button onClick={handleRegistration}>Зареєструватися</button>
      <button onClick={handleLogout}>Вийти</button>
      <button onClick={handleCurrent}>Юзер</button>
    </div>
  );
};
