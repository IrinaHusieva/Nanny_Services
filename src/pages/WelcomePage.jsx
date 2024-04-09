import React, {useState} from 'react';
import Header from 'components/header/Header';
import Hero from 'components/hero/Hero';
import css from "../pages/welcome.module.css";
import RegistrationModal from '../components/modal/RegistrationModal';


const WelcomePage = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
  return (
     <div className={css.container}>
      <div className={css.backgroundContainer}>
 <Header toggleModal={toggleModal} />
                {showModal && <RegistrationModal toggleModal={toggleModal} />}
        <Hero />
      </div>
      </div>
  )
}

export default WelcomePage