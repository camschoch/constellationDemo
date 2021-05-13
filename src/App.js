import React, { useState } from 'react';
import './App.css';
import InputForm from './Pages/InputForm';
import {Navigator} from 'react-onsenui';

function App(props) {
  const [values, setValues] = useState({
    text: '',
    date: '',
    checkboxes: {box1: false, box2: false, box3: false},
    radio: '',
    select: 'default'
  });

  const renderPage = (route, navigator) => {
    const props = route.props || {};
    props.navigator = navigator;
    props.values = values;
    props.setValues = setValues;

    return React.createElement(route.component, props);
  }


  return (    
    <Navigator
      id="navigator"
      renderPage={renderPage}
      initialRoute={{
        component: InputForm
      }} 
    />    
  );
}

export default App;
