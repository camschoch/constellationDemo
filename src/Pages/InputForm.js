import '../App.css';
import {
  Page,
  Button,
  Input,
  Checkbox,
  List,
  ListItem,
  Radio,
  Select
} from 'react-onsenui';
import AnswersPage from './AnswersPage';

function InputForm(props) {
  const setProperty = (property, value) => {
    let newValues = {...props.values};
    newValues[property] = value;
    props.setValues(newValues);
  }

  const handleCheckbox = (row, value) => {
    let newCheckboxes = {...props.values.checkboxes};
    newCheckboxes[row] = value;
    setProperty('checkboxes', newCheckboxes);
  }

  return (
    <Page contentStyle={{padding: 40}}>
      <Input
        className="generalStyles"
        value={props.values.text} float
        onChange={(event) => {setProperty('text', event.target.value)}}
        modifier='material'
        placeholder='Text'
      />

      <Input
        className="generalStyles"
        value={props.values.date} float
        onChange={(event) => {setProperty('date', event.target.value)}}
        modifier='material'          
        type='date'
      />      

      <List
        className="generalStyles"
        dataSource={['box1', 'box2', 'box3']}
        renderRow={(row, idx) => (
          <ListItem>
            {row}
            <Checkbox
              onChange={event => { handleCheckbox(row, event.target.checked)} }
              modifier='material' />
          </ListItem>
      )}
      />

      <List
        className="generalStyles"
        dataSource={['radio1', 'radio2', 'radio3']}
        renderRow={(row, idx) => (
          <ListItem>
            {row}
            <Radio
              value={props.values.radio === row ? true : false}
              checked={props.values.radio === row ? true : false}
              onChange={event => { setProperty('radio', row)} }
              modifier='material' />
          </ListItem>
      )}
      />

      <p>Select your option</p>
      <Select modifier="material"
        className="generalStyles"
        value={props.values.select}
        onChange={(event) => setProperty('select', event.target.value)}>
        <option value="default">select a value</option>
        <option value="1">option 1</option>
        <option value="2">option 2</option>
        <option value="3">option 3</option>
      </Select>
      
      <div>
        <Button id="submitButton" onClick={() => props.navigator.pushPage({component: AnswersPage})}>Submit Form</Button>
      </div>
    </Page>
  );
}

export default InputForm;