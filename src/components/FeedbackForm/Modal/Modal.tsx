import React, { useEffect, useState } from 'react';
import EmailValidator from '../../../helpers/emailValidator';
import Button from '../../Button/Button';

import styles from './Modal.module.scss';

function Modal() {
  const [email, setEmail] = useState(' ');
  const [name, setName] = useState(' ');
  const [message, setMessage] = useState(' ');

  const [emailDirty, setEmailDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [messageDirty, setMessageDirty] = useState(false);

  const [emailError, setEmailError] = useState("Email can't be empty");
  const [nameError, setNameError] = useState("Name can't be empty");
  const [messageError, setMessageError] = useState("Message can't be empty");
  const [formValid, setFormValid] = useState(false);

  const onBlurHandler = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>,
  ) => {
    switch (e.currentTarget.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'name':
        setNameDirty(true);
        break;
      case 'message':
        setMessageDirty(true);
        break;
    }
  };

  const onInputHandler = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>,
  ) => {
    if (e.currentTarget.name === 'email') {
      setEmail(e.currentTarget.value);

      if (!EmailValidator(e)) {
        setEmailError('email is not valid');
      } else {
        setEmailError('');
      }
    } else {
      switch (e.currentTarget.name) {
        case 'name':
          setName(e.currentTarget.value);
          if (e.currentTarget.value.length < 4) {
            setNameError('name is to short');
          } else {
            setNameError('');
          }
          break;
        case 'message':
          setMessage(e.currentTarget.value);
          if (e.currentTarget.value.length < 20) {
            setMessageError('message is to short');
          } else {
            setMessageError('');
          }
          break;
      }
    }
  };

  useEffect(() => {
    if (emailError || nameError || messageError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, nameError, messageError]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>SEND US MESSAGE</h2>
      <form>
        <div className={styles.input_block}>
          <label>Full Name</label>
          <input
            onChange={(e) => onInputHandler(e)}
            value={name}
            onBlur={(e) => onBlurHandler(e)}
            name="name"
            placeholder="Your Name"
          />
          {nameDirty && <p>{nameError}</p>}
        </div>
        <div className={styles.input_block}>
          <label>Email</label>
          <input
            onChange={(e) => onInputHandler(e)}
            value={email}
            onBlur={(e) => onBlurHandler(e)}
            name="email"
            placeholder="Your Email"
          />
          {emailDirty && <p>{emailError}</p>}
        </div>
        <div className={styles.input_block}>
          <label>Message</label>
          <textarea
            onChange={(e) => onInputHandler(e)}
            value={message}
            onBlur={(e: React.FormEvent<HTMLTextAreaElement>) =>
              onBlurHandler(e as React.FormEvent<HTMLTextAreaElement>)
            }
            name="message"
            rows={6}
            placeholder='Your Message'
          />
          {messageDirty && <p>{messageError}</p>}
        </div>
        <div className={styles.button}>
          <Button isDisabled={!formValid}>SUBMIT</Button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
