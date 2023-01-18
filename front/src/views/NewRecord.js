import React, { useEffect, useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';

export default function NewRecord() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    const sendDataToAPI = () => {
    axios.post('https://localhost:7215/api/records', {
        name,
        description
    }).then(() => {
        navigate('/');
    })
  }
  return (
    <section>
      <h1>New Record</h1>
      <br></br>
      <Form>
        <Form.Field>
          <label>Name</label>
          <br></br>
          <input name="fname" 
          type="text"
          autoComplete="off"
          required
          onChange={(e) => setName(e.target.value)} 
          placeholder='Name' />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <br></br>
          <input 
          name="lname" 
          type="text"
          autoComplete="off"
          required
          placeholder='Description' 
          onChange={(e) => setDescription(e.target.value)} 
          />
        </Form.Field>
        <Button type='submit' onClick={sendDataToAPI}>Add</Button>
      </Form>
    </section>
  )
}