import React from 'react'
import { useState, createContext, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import {   Route, Routes } from 'react-router-dom';
import Singlecard from './Singlecard'


export const UserContext = createContext() 

export default function Home() {
    const [list, setList] = useState([]);
    const [user1, setUser1] = useState(0);
    const[search,setSearch]= useState("");
    const[cartvis,setCartvis]=useState(false);
    const[cart,setCart]=useState([]);

    const handleChange=(result)=>{
      setUser1(result);
    }
   
    useEffect(()=>{   
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(json => setList(json.data.meals));
          },[]);

   const handleAdd=(name)=>{
    
    if(!(cart.some(el=> el.name === name))){
    setCart([...cart,{"name":name, "quantity1": 1 }])  
    
   }
   else {
    const index = cart.findIndex(obj => obj.name === name);
    console.log(index);
    var resul=0;
    resul=(cart[index].quantity1);
    for(let i=0;i<cart.length;i++){
      if(cart[index].name===cart[i].name){
        cart[index].quantity1=resul+1;
      }
    }
   }
  }
  const handleVisible=(e)=>{
    e.stopPropagation();
    setCartvis(!cartvis)
 }
 const handleVisible1=()=>{
  setCartvis(false)
 }

 

  return (

   <div onClick={handleVisible1} > 
    <header className='text-9xl text-center font-bold   py-10 header  max-sm:text-6xl max-[1000px]:text-7xl '>
      <h1 className='text-black bg-slate-100 bg-opacity-70 w-fit mx-auto rounded-2xl px-3 py-2  '>FOOD APP</h1>
      </header>
     

  <div className='flex bg-slate-400'>
   <div className="flex justify-center gap-x-4 py-2 px-4 w-4/6  mx-auto my-0 ">
      <label className='text-2xl py-2 px-3 font-semibold '>Search</label>
      <input className='border rounded-lg bg-slate-200 w-2/3 py-2 px-3' placeholder="Ex: Name" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        <div className='  grid grid-cols-1  px-2  w-2/6 ml-auto py-4   '>
        <button className='ml-auto text-center font-semibold bg-amber-300 py-2 px-4 rounded-lg' onClick={handleVisible}>Cart Items - {cart.length}
        <div {...cart.length!==0 && cartvis ? {className :'mt-3 ml-auto bg-green-300 rounded-lg block w-96 absolute mx-auto right-0 border-2 border-green-600'} : {className:'hidden'}} >
          {cartvis?
        <ul className="grid grid-cols-1 py-2 px-4 text-lg font-semibold ">
          {
            cart.map((item)=>{
              return(
              <li className='flex gap-2'><div className='w-5/6 text-left px-2'>{item.name}</div><div className='text-right w-1/6 px-2'>{item.quantity1}</div></li>
              )
            })
          }
        </ul>:null}
        </div></button>
      </div> </div>
   <div className=' bg-gradient-to-r from-yellow-300  via-pink-600 to-orange-300 py-3'>
   <ul className='grid grid-cols-3 justify-items-center gap-3 my-5 max-sm:grid-cols-1 max-[1000px]:grid-cols-2' >
    {
      list.filter((item) => {
        return (search.toLowerCase() === ""
          ? item : item.strMeal.toLowerCase().includes(search) || item.strMeal.toUpperCase().includes(search)  );
        }).map((res) => { 
        return(
          
             <UserContext.Provider value={res} key={res.id} >  
              <div onClick={()=>handleChange(res)}>     
               <Routes >
               <Route exact path="/vgtstask" element={ <Card change={()=>handleAdd(res.strMeal)}/>}   />  
              </Routes> 
              
              </div>
              
             </UserContext.Provider>
             
       )})
     }
   </ul>
   
     <Routes>
     <Route exact path="/vgtstask/Singlecard" element={<Singlecard props={user1}/>}/>
     </Routes> 
     </div>
   </div>
  )
}


