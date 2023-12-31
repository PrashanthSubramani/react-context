import React,{useContext, useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form  from 'react-bootstrap/Form';
import { TaskContext } from "../context/taskContext";

const MyVerticallyCenteredModal = (props) => {

    const {state,dispatch} = useContext(TaskContext);
    const {selectedTask} = state;

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const [id, setId] = useState(0) 

    useEffect(()=>{
      if(Object.keys(selectedTask).length > 0){
        setTitle(selectedTask.title)
        setDescription(selectedTask.description)
        setId(selectedTask.id)
      }
    },[selectedTask])

    const updateTask = () => {
        props.onHide()
        dispatch({type:'UPDATE_TASK',payload:{title, description, id}})
    }
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Update Note
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
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
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" type="submit" onClick={(e) => updateTask(e)}>
        Update
      </Button>
    </Modal.Footer>
  </Modal>
  );
};

export default MyVerticallyCenteredModal;
