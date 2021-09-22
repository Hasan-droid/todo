import React from 'react'
import { useState ,  } from 'react';
import useForm from '../hooks/form.js';
import { v4 as uuid } from 'uuid';

export const SettingsContext = React.createContext();

export default function context(props) {
    const [hide] = useState(false);
    const [itemNumber] = useState(3);
    const [sort] = useState(''); 

  
    const [list, setList] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    const { handleChange, handleSubmit } = useForm(addItem);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(itemNumber);

    
  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    let newList = [];

    list.map((e, idx) => {
      if (idx !== id) newList.push(e);
      return 0;

    })
    setList(newList);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  function pagination(){
    let result = list.slice(startIndex, endIndex);
    return result;
  }

  function next() {
    setStartIndex(startIndex + itemNumber);
    setEndIndex(endIndex + itemNumber);
  }

  function previous() {
    setStartIndex(startIndex - itemNumber);
    setEndIndex(endIndex - itemNumber);
  }


    return (
      <SettingsContext.Provider value={{ hide, itemNumber, sort , list , setList , incomplete, setIncomplete , 
       handleChange, handleSubmit , startIndex, setStartIndex , endIndex, setEndIndex  , addItem , deleteItem , toggleComplete , pagination , next , previous}}>
        {props.children}
      </SettingsContext.Provider>
    )
}
