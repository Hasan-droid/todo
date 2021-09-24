import React, { useEffect } from 'react';
import { FormGroup, InputGroup, Button, Card, Elevation, Callout , Switch } from '@blueprintjs/core';


import { useContext } from 'react';
import { SettingsContext } from './context.js';
import { LoginContext } from './loginProvider/context.js';
import { v4 as uuid } from 'uuid';
import { When } from 'react-if';
import Auth from './auth/auth.js';

const ToDo = () => {

  const settings = useContext(SettingsContext);
  const loginContx=useContext(LoginContext);

  useEffect(() => {
    let incompleteCount = settings.list?.filter(item => !item.complete).length;
    settings.setIncomplete(incompleteCount);
    document.title = `To Do List: ${settings.incomplete}`;
  }, [settings?.list , settings.incomplete]);

  return (
    
   <>
    {/* <When condition={!loginContx.loggedIn}>
     <p>loggedOut</p>
   </When> */}
   
   <When condition={loginContx.loggedIn}>
     <p>loggedIn</p>
     
    
  
      <Callout interactive={false} elevation={Elevation.TWO}>
      <Auth capability="read">
     
   
        <header>
          <h3>To Do List: {settings?.incomplete} items pending / items render per page: {settings.endIndex} </h3>
        </header>
        </Auth>
      </Callout>
      <Auth capability="create">
      <Card elevation={3} style={{ width: '35rem', margin: 'auto' }}>
        <form>

      
          <FormGroup
            // inline={true}
            helperText="Choose any item you want"
            label="To Do Item"
            labelFor="item-details"

          >
            <InputGroup name="text" id="item-details" placeholder="Item Details" onChange={settings.handleChange} />
          </FormGroup>
          <FormGroup
            // inline={true}
            helperText="Choose person name"
            label="Assigned To"
            labelFor="Assignee-Name"

          >
            <InputGroup name="assignee" id="Assignee-Name" placeholder="Assignee Name" onChange={settings.handleChange} />
          </FormGroup >
          <FormGroup
            inline={true}
            label="difficulty"
            labelFor="item-details"

          >
            <InputGroup
              name="difficulty"
              id="difficulty"
              type='range'
              placeholder="Assignee Name"
              min={0}
              max={5}
              initialValue={3}
              labelStepSize={5}
              onChange={settings.handleChange}
            
            />
            {
              console.log("settings.handleChange",settings.handleChange)
            }
             </FormGroup>
                   
            <Auth capability="rend">
             <FormGroup
               inline={true}
             label="items per page"
             labelFor="items-page">
         
             <InputGroup
              name="itemperpage"
              id="itemperpage"
              type='range'
              placeholder="get items"
              min={1}
              max={10}
              initialValue={3}
              labelStepSize={5}
               onChange={settings.handlePaginationChange}
            />
           
            </FormGroup>
            </Auth>

         
     
          <Button intent='success' onClick={settings.handleSubmit}>click here</Button>
          <Auth capability="delete">
          <Button intent='danger' onClick={settings.clearLocalStorage}>clear</Button>
          </Auth>
        

        </form>
      </Card>
      </Auth>
      <br></br>
      {settings.pagination()?.map((item, idx) => (
        <>

<br></br>

          <Card vertical={true} style={{ width: '20rem' }} id={item.id} interactive={true} elevation={Elevation.THREE}>
            {
              console.log("item" , item)
            }
              <Auth capability="read">
            {!item.complete &&
              <>
                <h5>{item.text}</h5>
                <p><small>Assigned to: {item.assignee}</small></p>
                <p><small>Difficulty: {item.difficulty}</small></p>
              </>
            }
            </Auth>
            <Auth capability="update">
                  <Switch onClick={() => settings.toggleComplete(idx)}>Complete: {item.complete.toString()}</Switch>
                  </Auth>
                  <Auth capability="delete">
            <Button intent='danger' onClick={() => settings.deleteItem(idx)}>X</Button>
            </Auth>
          </Card>
        </>

      ))}

      <button onClick={settings.previous}>Previous</button>
      <button onClick={settings.next}>Next</button>
      </When>
    </>
  );
};

export default ToDo;