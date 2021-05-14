import '../App.css';
import {Page, Button} from 'react-onsenui';

function AnswersPage(props) {
  const getSelectedCheckboxes = () => {
    return Object.keys(props.values.checkboxes).map((key) => {
      return <p>{`${key}: ${props.values.checkboxes[key]}`}</p> 
    })
  }

  const getSelectValue = (value) => {
    switch(value){
      case 'default':
        return "select a value"
      case '1':
        return "option 1"
      case '2':
        return "option 2"      
      case '3':
        return "option 3"
      default:
        return 'N/A'        
    }
  }

  return (
    <Page contentStyle={{padding: 40}}>
      <Button id="submitButton" onClick={() => props.navigator.popPage()}>Back</Button>
      <p>Text: {props.values.text}</p>
      <p>Date: {props.values.date}</p>
      <p>Selected checkboxes: {getSelectedCheckboxes()}</p>
      <p>Radio: {props.values.radio}</p>
      <p>Select: {getSelectValue(props.values.select)}</p>

    </Page>
  );
}

export default AnswersPage;