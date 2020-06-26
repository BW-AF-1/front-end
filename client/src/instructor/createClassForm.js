import React, {useState} from 'react';
import {Button, Form, Modal, Dropdown, ButtonGroup} from 'react-bootstrap';

function ModalAfterSubmit(){
    return(
        <>
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </>
    )
}

export default function CreateClass() {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const [formState, setFormState] = useState({
            className:'',
            classDescription:'',
            classCost:'',
            classEquipment:'',
            miami:false,
            la:false,
            ny:false,
            cardio:false,
            weights:false,
            crossFit:false,
            classSize:'',
            classLength:'',
            easy:false,
            medium:false,
            hard:false,
            classArrivalTime:'',
            classKnowledge:'',
            startTime:'',
            endTime:'',
            sunday:false,
            monday:false,
            tuesday:false,
            wednesday:false,
            thurday:false,
            friday:false,
            saturday:false,
            sunday:false
        })

        const changeHandelerString = (event) => {
            setFormState({
                ...formState, 
                [event.target.name]:event.target.value
            })
        }

        const changeHandelerBool = (event) => {
            setFormState({
                ...formState,
                [event.target.name]:event.target.checked
            })
        }

        const submitHandeler = (event) => {
            event.preventDefault();
            console.log(`
            Class Name:${formState.className},
            Class Description:${formState.classDescription},
            Cost:${formState.classCost},
            Class Equipment:${formState.classEquipment},
            Location: Miami - ${formState.miami}; New York - ${formState.ny}; Los Angeles - ${formState.la},
            Type: Cardio - ${formState.cardio}; Weights - ${formState.weights}; Cross Fit - ${formState.crossFit},
            Class Size:${formState.classSize},
            Class Length:${formState.classLength},
            Mode: Easy - ${formState.easy}; Medium - ${formState.medium}; Hard - ${formState.hard}
            Arrival Time: ${formState.classArrivalTime},
            What to Know: ${formState.classKnowledge},
            Class Time: Start Time ${formState.startTime} - End Time ${formState.endTime},
            Class Day(s): Monday: ${formState.monday} ;Tuesday: ${formState.tuesday} ;Wednesday: ${formState.wednesday} ;Thursday: ${formState.thursday} ;Friday: ${formState.friday} ;Saturday: ${formState.saturday} ;Sunday: ${formState.sunday}
            `)
            setFormState({
                className:'',
                classDescription:'',
                classCost:'',
                classEquipment:'',
                miami:false,
                la:false,
                ny:false,
                cardio:false,
                weights:false,
                crossFit:false,
                classSize:'',
                classLength:'',
                easy:false,
                medium:false,
                hard:false,
                classArrivalTime:'',
                classKnowledge:'',
                startTime:'',
                endTime:'',
                sunday:false,
                monday:false,
                tuesday:false,
                wednesday:false,
                thurday:false,
                friday:false,
                saturday:false,
                sunday:false
            })
        }
      
        return (
          <div style={{margin:'auto 5rem'}}>
            <button style={{backgroundColor:'#FF6900', border:'none', outline:'none',color:'black'}} onClick={handleShow}>
              Create a Class
            </button>
            
            <Modal show={show} onHide={handleClose} dialogClassName='modal-container' size='lg'>
                <Modal.Header closeButton >
                    <Modal.Title>Create a Class</Modal.Title>
                </Modal.Header>
                <Form onSubmit={submitHandeler}>
                    <Modal.Body dialogClassName='modal-body'>
    
                        <Form.Group controlId="className" style={{paddingLeft:'5%'}}>
                            <label htmlFor='className'>Class Name</label>
                            <Form.Control onChange={changeHandelerString} name='className' value={formState.className} type="name" style={{width:'50%'}}  />                    
                        </Form.Group>
    
                        <Form.Group controlId="classDescription" style={{paddingLeft:'5%'}}>
                            <label htmlFor='classDescription'>Class Description</label>
                            <Form.Control onChange={changeHandelerString} name='classDescription' value={formState.classDescription} type="text" style={{width:'50%', height:'7.5rem'}}  />                    
                        </Form.Group>
    
                        <Form.Group controlId="classCost" style={{paddingLeft:'5%'}}>
                            <label htmlFor='classCost'>Cost of Class</label>
                            <Form.Control onChange={changeHandelerString} name='classCost' value={formState.classCost} type="text" style={{width:'50%'}}  />                    
                        </Form.Group>
    
                        <Form.Group controlId="classEquipment" style={{paddingLeft:'5%'}}>
                            <label htmlFor='classEquipment'>Class Equipment Requirements</label>
                            <Form.Control onChange={changeHandelerString} name='classEquipment' value={formState.classEquipment} type="text" style={{width:'50%', height:'3.5rem'}}  />                    
                        </Form.Group> 
    
                        <Form.Group controlId="classAddress" style={{paddingLeft:'5%' ,width:'25%'}}>
                            <label htmlFor='classAddress'>Class Address</label>
                                <Form.Control onChange={changeHandelerBool} as='select' name='cities' value={formState.cities}>
                                    <option name='miami' value='miami'>Miami, FL</option>
                                    <option name='la' value='la' >Los Angeles, CA</option>
                                    <option name='ny' value='ny' >New York, NY</option>
                                </Form.Control>                 
                        </Form.Group>     
    
                        <Form.Group controlId="classType" style={{paddingLeft:'5%'}}>
                            <label htmlFor='classType'>Class Type</label>
                            <Dropdown>
                                <Dropdown.Toggle style={{backgroundColor:'#FF6900', border:'none', outline:'0'}} id="dropdown-basic">
                                    Type
                                </Dropdown.Toggle>
    
                                <Dropdown.Menu>
                                    <Dropdown.Item onSelect={changeHandelerBool} name='cardio' value={formState.cardio} >Cardio</Dropdown.Item>
                                    <Dropdown.Item onChange={changeHandelerBool} name='weights' value={formState.weights} >Weight Training</Dropdown.Item>
                                    <Dropdown.Item onChange={changeHandelerBool} name='crossFit' value={formState.crossFit} >Cross Fit</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>                   
                        </Form.Group>
    
                        <Form.Group controlId="classSize" style={{paddingLeft:'5%'}}>
                            <label htmlFor='classSize'>Class Size</label>
                            <Form.Control onChange={changeHandelerString} name='classSize' value={formState.classSize} type="text" style={{width:'15%'}}  />                    
                        </Form.Group>
    
                        <Form.Group controlId="classLength" style={{paddingLeft:'5%'}}>
                            <label htmlFor='classLength'>Class Length(in minutes)</label>
                            <Form.Control onChange={changeHandelerString} name='classLength' value={formState.classLength} type="number" style={{width:'25%'}}  />                    
                        </Form.Group>
    
                        <Form.Group controlId="classLevel" style={{paddingLeft:'5%'}}>
                            <label htmlFor='classLevel'>Class Type</label>
                            <Dropdown>
                                <Dropdown.Toggle style={{backgroundColor:'#FF6900', border:'none'}} id="dropdown-basic">
                                    Class Level
                                </Dropdown.Toggle>
    
                                <Dropdown.Menu>
                                    <Dropdown.Item onChange={changeHandelerBool} name='easy' value={formState.easy} >Easy</Dropdown.Item>
                                    <Dropdown.Item onChange={changeHandelerBool} name='medium' value={formState.medium} >Medium</Dropdown.Item>
                                    <Dropdown.Item onChange={changeHandelerBool} name='hard' value={formState.hard} >Hard</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>                   
                        </Form.Group>
    
                        <Form.Group controlId="classArrivalTime" style={{paddingLeft:'5%'}}>
                            <label htmlFor='classArrivalTime'>When to Arrive</label>
                            <Form.Control onChange={changeHandelerString} name='classArrivalTime' value={formState.classArrivalTime} type="text" style={{width:'35%', height:'3.5rem'}}  />                    
                        </Form.Group>
    
                        <Form.Group controlId="classKnowledge" style={{paddingLeft:'5%'}}>
                            <label htmlFor='classKnowledge'>What You Need to Know</label>
                            <Form.Control onChange={changeHandelerString} name='classKnowledge' value={formState.classKnowledge} type="text" style={{width:'35%', height:'6rem'}}  />                    
                        </Form.Group>
    
                        <Form style={{paddingLeft:'5%'}}>
                            <label htmlFor='classTime'>Class Time</label>
                            <Form.Row name='classTime'>
                                <Form.Control onChange={changeHandelerString} type="text" name='startTime' value={formState.startTime} style={{width:'20%', marginRight:'1rem' }} placeholder="Start Time" />
                                <h6 style={{margin:'auto 0'}}> to </h6>
                                <Form.Control onChange={changeHandelerString} type='text' name='endTime' value={formState.endTime} style={{width:'20%', marginLeft:'1rem'}} placeholder="End Time" />
                            </Form.Row>
                        </Form>
    
                        <Form style={{paddingLeft:'5%', marginTop:'1rem'}}>
                            <label>Class Day(s)</label>
                            <ButtonGroup aria-label="Basic example">
                                <Button onChange={changeHandelerBool} name='sunday' value={formState.sunday} style={{fontSize:'.8rem',margin:'auto', backgroundColor:'#FF6900'}} variant="secondary">Sunday</Button>
                                <Button onChange={changeHandelerBool} name='monday' value={formState.monday} style={{fontSize:'.8rem',margin:'auto 0 auto .5rem', backgroundColor:'#FF6900', border:'none'}} variant="secondary">Monday</Button>
                                <Button onChange={changeHandelerBool} name='tuesday' value={formState.tuesday} style={{fontSize:'.8rem',margin:'auto 0 auto .5rem', backgroundColor:'#FF6900', border:'none'}} variant="secondary">Tuesday</Button>
                                <Button onChange={changeHandelerBool} name='wednesday' value={formState.wednesday} style={{fontSize:'.8rem',margin:'auto 0 auto .5rem', backgroundColor:'#FF6900', border:'none'}} variant="secondary">Wednesday</Button>
                                <Button onChange={changeHandelerBool} name='thursday' value={formState.thursday} style={{fontSize:'.8rem',margin:'auto 0 auto .5rem', backgroundColor:'#FF6900', border:'none'}} variant="secondary">Thursday</Button>
                                <Button onChange={changeHandelerBool} name='friday' value={formState.friday} style={{fontSize:'.8rem',margin:'auto 0 auto .5rem', backgroundColor:'#FF6900', border:'none'}} variant="secondary">Friday</Button>
                                <Button onChange={changeHandelerBool} name='saturday' value={formState.saturday} style={{fontSize:'.8rem',margin:'auto 0 auto .5rem', backgroundColor:'#FF6900', border:'none'}} variant="secondary">Saturday</Button>
                            </ButtonGroup>
                        </Form>
    
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onSubmit={submitHandeler} type='submit' style={{backgroundColor:'#FF6900', border:'none'}} onClick={handleClose}>
                        Create Class
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
          </div>
        );
    }
