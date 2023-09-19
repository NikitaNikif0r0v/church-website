'use client';
import React, { useState } from 'react';
import styles from './styles.module.scss';
//import axios from 'axios';
//import axios, { AxiosResponse } from 'axios';

const ViberForm: React.FC = () => {
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('');
  const [choice, setChoice] = useState('');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    language: "",
    choice: "",
    //subject: "",
    message: "",
    //access_key: process.env.REACT_APP_ACCESS_KEY,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      name: name,
      language: language,
      choice: choice,
      message: message,
      access_key: "60829245-4068-4083-bc62-2704f53261e7"
    };
    const data = JSON.stringify(formData);
    
    console.log( 'data=', JSON.stringify(formData), data);
    //
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        //setSending(false);
        //setSuccess(true);
        //setFailed(false);
        setFormData({
          ...formData,
          name: '',
          language: '',
          choice:"",
          message:"",
          //message: "",
        });
        setTimeout(() => {
          //setSuccess(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        //setSending(false);
        //setFailed(true);
      });
      setName('');
      setLanguage('');
      setChoice('');
      setMessage('');
  };

    //axios.post('https://invite.viber.com/?g=0-Jx_HvB21BfKedr2ImRUxLItGMCACZ7', formData)
      // .then(response => {
        // console.log(response.data);
    //   })
      // .catch(error => {
        // console.error(error);
 //      });
   // setName('');
//    setChoice('');
  //  setMessage('');
  //};

  return (
    <>
    <h2>Ako imate pitanja pišite</h2>
    <form onSubmit={handleSubmit} className={styles.wrapperForm}>
      <label>
      Kako se obratiti vama?
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
      Izaberite jezik za komunikaciju
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="">Izaberite</option>
          <option value="Srpski jezik">Srpski jezik</option>
          <option value="English language">English language</option>
          <option value="Русский язык">Русский язык</option>
        </select>
      </label>

      <label>
      Izaberite temu razgovora
        <select value={choice} onChange={(e) => setChoice(e.target.value)}>
          <option value="">Izaberite</option>
          <option value="Treba mi molitvena podrška">Treba mi molitvena podrška</option>
          <option value="Pomozite mi da pronađem odgovor na pitanje">
            Pomozite mi da pronađem odgovor na pitanje
          </option>
        </select>
      </label>

      <label>
      Vaša poruka
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>

      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default ViberForm;