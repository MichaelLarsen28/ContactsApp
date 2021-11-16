import React from 'react';
//Helmet is used to set the title tag of the web page
import { Helmet } from "react-helmet";
import ContactList from "./sections/ContactList";
import './App.css';

function App() {
  return (
      <div className="App">
        <Helmet>
          <title>Contacts App</title>
        </Helmet>
        <ContactList/>
      </div>
  );
}

export default App;
