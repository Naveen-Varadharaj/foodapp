import React, { useContext } from 'react'
import { UserContext } from './Home';
import { Link } from 'react-router-dom';



export default function Card({change}) {
  let user=useContext(UserContext);
  return (

    <div className='py-4 px-4 bg-gray-200 rounded-lg grid justify-items-center shadow-xl my-2  ' >
    <Link to="/Singlecard" >
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
        <img className="w-full" src={user.strMealThumb} alt="pic" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{user.strMeal}</div>
        </div>
    </div>    
    </Link>
    <button onClick = {() => change()} className='w-1/2 bg-green-500 rounded-lg mt-2 mx-auto text-center font-semibold text-lg py-2 px-3 text-white'> Add to cart </button>
    </div>
  )
}
