import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { TaskContext } from "../context/taskContext";
import Card from 'react-bootstrap/Card';
const AddTask = () => {

    const {dispatch} = useContext(TaskContext);

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')


    const addTask = (e) => {
        e.preventDefault()
        dispatch({type:'ADD_TASK', payload:{title,description}})
        setTitle('');
        setDescription('');
    }
  return (
    <Card className='mt-5 shadow-sm p-3 mb-5 bg-white rounded-5'>
    <Card.Body>
            <h1>Add a Note</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    type="text"
                    className='border-0 fs-3' // Apply custom class here
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                    as="textarea"
                    className='border-0' // Apply custom class here
                    rows={5}
                    value={description}
                    placeholder="Take a note.."
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>

            <div className="text-end">
                <Button variant="secondary" type="submit" onClick={(e) => addTask(e)}>
                      <i class="bi bi-plus-square-fill"></i> Add Note
                </Button>
            </div>
        </Form>
    </Card.Body>
</Card>
  );
};

export default AddTask;
