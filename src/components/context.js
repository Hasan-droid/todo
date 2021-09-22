import React, { useEffect } from 'react'
import { useState ,  } from 'react';
import useForm from '../hooks/form.js';
import { v4 as uuid } from 'uuid';

export const SettingsContext = React.createContext();

export default function context(props) {
    const [hide] = useState(false);
    const [itemNumber , setItemNumber] = useState(1);
    const [sort] = useState(''); 

  
    const [list, setList] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    const { handleChange, handleSubmit } = useForm(addItem);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(itemNumber);

    useEffect(()=>{
       
      console.log("handleChange-context",list)
    },[handleChange])

  function addItem(item) {
 
   
    console.log("addItem",item);
    console.log("itemPerPage" , item.itemperpage)
  
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
    console.log("endIndex" , endIndex)
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

  function handlePaginationChange(e) {
    let numItem=parseInt(e.target.value)
   setItemNumber(numItem);
  }
 
  useEffect(()=>{
       setStartIndex(0);
       if(itemNumber !== 1)
       localStorage.setItem('last saved items per page value' , itemNumber)
     let  savedValue=JSON.parse(localStorage.getItem('last saved items per page value'))
     if(savedValue)
     return   setEndIndex(savedValue)
       setEndIndex(itemNumber)
  },[itemNumber])

  //here we need to save all use perfernces to local storage

  useEffect(()=>{
   if(list.length!= 0 ){
    localStorage.setItem('list' , JSON.stringify(list))
 
   }
  
   console.log("localStorage setItems" , list)
   
  },[list])


  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('list'))){
      setList(JSON.parse(localStorage.getItem('list')))
      console.log("localStorage , getItems" , list)
    }

  },[])

  function clearLocalStorage(){
     localStorage.clear();
     setList([])
  }

    return (
      <SettingsContext.Provider value={{ hide, itemNumber, sort , list , setList , incomplete, setIncomplete , 
       handleChange, handleSubmit , startIndex, setStartIndex , endIndex, setEndIndex  , addItem , deleteItem , toggleComplete , pagination , next , previous , handlePaginationChange , clearLocalStorage}}>
        {props.children}
      </SettingsContext.Provider>
    )
}
