import React, { useState } from 'react';
import { Button, Form, InputGroup, Container } from 'react-bootstrap';
function Reminder() {
    const [reminder,setReminder]=useState([]);
    const [newreminder,setNewReminder]=useState("");

    const handleChange=(event)=>{
        setNewReminder(event.target.value)
    }

    const buttonChange=()=>{
        if(newreminder.trim()){
            setReminder([...reminder,newreminder]);
            setNewReminder("");
        }
    }

    const handleDelete = (index) => {
        setReminder(reminder.filter((item, itemIndex) => itemIndex !== index));
      };
  return (
    <>
    <Container className="mt-5 d-flex justify-content-center">
      <div className="p-4 border rounded shadow-sm" style={{ width: '100%', maxWidth: '500px' }}>
        <h1 className="text-center mb-4">To Do List</h1>
        <InputGroup>
          <Form.Control className='inrem' type="text" placeholder="Enter a reminder" onChange={handleChange} />
          <Button className='inbtn' variant='light' onClick={buttonChange}>Add To-Do</Button>
        </InputGroup>
      </div>
    </Container>
    <ul className='reminder-list'>
            {reminder.map((data,index)=>(
                <li key={index}>
                    {data}
                <button onClick={() => handleDelete(index)}><i class="fa-solid fa-check" style={{color:'#c49797'}}></i></button>
                    </li>
            )
        )}
        </ul>
    </>
  );
}

export default Reminder;
