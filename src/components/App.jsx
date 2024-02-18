import React from "react";
import WelcomePage from "pages/WelcomePage";
import LoginModal from "./modal/LoginModal";
import RegistrationModal from "./modal/RegistrationModal";

export const App = () => {
  return (
    <>
      <WelcomePage />
      <LoginModal />
      <RegistrationModal/>
    </>
  );
};
 