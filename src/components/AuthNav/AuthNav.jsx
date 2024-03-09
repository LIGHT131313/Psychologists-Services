import { useState } from 'react';
import { ButtonLogin, ButtonReg, AuthWrap } from './AuthNav.styled';
import { LoginModal } from '../LoginModal/LoginModal';
import { RegistrationModal } from '../RegistrationModal/RegistrationModal';
import { ModalPortal } from '../ModalPortal/ModalPortal';

export const AuthNav = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegistration, setOpenRegistration] = useState(false);
  const handleToggleLogin = () => setOpenLogin(isOpenLogin => !isOpenLogin);
  const handleToggleRegistration = () =>
    setOpenRegistration(isOpenReg => !isOpenReg);

  return (
    <AuthWrap>
      <ButtonLogin
        type="button"
        aria-label="Log In"
        onClick={handleToggleLogin}
      >
        Log In
      </ButtonLogin>
      <ButtonReg
        type="button"
        aria-label="Registration"
        onClick={handleToggleRegistration}
      >
        Registration
      </ButtonReg>

      {openLogin && (
        <ModalPortal isOpen={openLogin} onClose={handleToggleLogin}>
          <LoginModal />
        </ModalPortal>
      )}
      {openRegistration && (
        <ModalPortal
          isOpen={openRegistration}
          onClose={handleToggleRegistration}
        >
          <RegistrationModal />
        </ModalPortal>
      )}
    </AuthWrap>
  );
};
