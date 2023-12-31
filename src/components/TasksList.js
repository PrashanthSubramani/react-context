import React,{useContext, useState} from "react";
import {Row, Col} from "react-bootstrap";
import MyVerticallyCenteredModal from './UpdateTask';
import { TaskContext } from "../context/taskContext";
import Card from 'react-bootstrap/Card';

const TasksList = () => {

  const {state, dispatch} = useContext(TaskContext);

  const {taskList} = state;

  const updateTask = (task) => {
    console.log("update Task");
    setModalShow(true)
    dispatch({type:'SET_SELECTED_TASK',payload:task})
  };

  const deleteTask = (task) => {
    dispatch({type:'REMOVE_TASK',payload:task});
  };

  const [modalShow,setModalShow] = useState(false)
  return (
    <>
      <h5> <i className="bi bi-file-earmark-text font-weight-bold fs-4"></i> <b>My Notes</b></h5>
      <p className='text-secondary'>Recently Viewed </p>

      <div className="row">
        <div className="col-lg-12">
          <Row>
            {
              taskList && taskList.map((task, index) => {
                return (
                  <Col lg="4" key={task.id} className="mb-3">
                    <Card className='shadow-sm p-3 mb-1 bg-white rounded-3'>
                      <Card.Body>
                        <div className='d-flex justify-content-between'>
                          <div><h4>{task.title}</h4></div>
                          <div>
                            <a href='javascript:void(0)' className='text-muted ' onClick={() => updateTask(task)}>
                              <i className="bi bi-pencil-square"></i>
                            </a> &nbsp;&nbsp;

                            <a href='javascript:void(0)' className='text-muted ' onClick={() => deleteTask(task)}>
                              <i className="bi bi-trash"></i>
                            </a>
                          </div>
                        </div>

                        <p>{task.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TasksList;
