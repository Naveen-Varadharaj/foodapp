import React from 'react'
export default function Singlecard({props}) {
  const i1= props.strIngredient1;
  const i2= props.strIngredient2;
  const i3= props.strIngredient3;
  const i4= props.strIngredient4;
  const i5= props.strIngredient5;
  const i6= props.strIngredient6;
  const i7= props.strIngredient7;
  const i8= props.strIngredient8;
  const i9= props.strIngredient9;
  const i10= props.strIngredient10;
  const i11= props.strIngredient11;
  const i12= props.strIngredient12;
  const i13= props.strIngredient13;
  const i14= props.strIngredient14;
  const i15= props.strIngredient15;
  const i16= props.strIngredient16;
  const i17 = props.strIngredient17;
  const i18= props.strIngredient18;
  const i19= props.strIngredient19;
  const i20= props.strIngredient20;
 console.log(props)
  
  return (
    <div>
    <div className='text-5xl text-center font-bold text-orange-950 -mt-3 '>Details</div>
      <div className=' my-3 mt-5  w-11/12 mx-auto py-4 px-10 rounded-lg max-sm:w-full max-[1040px]:w-full  '>
       <div className='py-3 px-3  mb-3 rounded-lg grid justify-items-center'>
       <div className='w-fit py-2 px-6 rounded-lg bg-zinc-500'>
        <img className='w-96 h-96 rounded mx-auto mt-5' src={props.strMealThumb} alt='pic'/>
       <h1 className='text-3xl text-center font-semibold my-3'>{props.strMeal}</h1>
       </div>
       </div>
       <div className=' bg-rose-800 py-3 px-3 rounded-lg shadow-md mb-5 text-gray-300'> 
       <h1 className='text-3xl  my-4 text-zinc-800 font-bold '>Category<h1 className='text-2xl font-normal my-2 ml-2 text-gray-300'> {props.strCategory}</h1></h1>
       <h1 className='text-3xl  my-4  text-zinc-800 font-bold '>Location:<h1 className='text-2xl font-normal my-2 font-Ubuntu ml-2 text-gray-300'> {props.strArea}</h1></h1>
       <h1 className='text-3xl  my-4  text-zinc-800 font-bold '>Instructions</h1>
       <h1 className='text-2xl font-normal mt-2 mb-4 text-justify font-Ubuntu ml-2 text-gray-300'>{props.strInstructions}</h1>
       
       <h1 className='text-3xl text-zinc-800 font-bold  mt-4 mb-2 '>Ingredients</h1>
       <div className='grid justify-items-start text-left font-Ubuntu text-gray-300 ml-2 '>
        
       <h1 className='text-2xl font-normal my-2'>{i1!== null? i1 :null} </h1>
       <h1 className='text-2xl font-normal my-2'>{i2!==null ? i2 :null} </h1>
       <h1 className='text-2xl font-normal my-2'>{i3!==null ? i3 :null} </h1>
       <h1 className='text-2xl font-normal my-2'>{i4!==null ? i4 :null} </h1>
       <h1 className='text-2xl font-normal my-2'>{i5!==null ? i5 :null} </h1>
        <h1 className='text-2xl font-normal my-2'>{i6!==null ? i6 :null} </h1>
      <h1 className='text-2xl font-normal my-2'>{i7!==null ? i7 :null} </h1>
       <h1 className='text-2xl font-normal my-2'>{i8!==null ? i8 :null} </h1>
        <h1 className='text-2xl font-normal my-2'>{i9!==null ? i9 :null} </h1>
       <h1 className='text-2xl font-normal my-2'>{i10!==null ? i10 :null} </h1>
      <h1 className='text-2xl font-normal my-2'>{i11!==null ? i11 :null} </h1>
       <h1 className='text-2xl font-normal my-2'>{i12!==null ? i12 :null} </h1>
       <h1 className='text-2xl font-normal my-2'>{i13!==null ? i13 :null} </h1>
       <h1 className='text-2xl font-normal my-2'>{i14!==null ? i14 :null} </h1>
       <h1 className='text-2xl font-normal my-2'>{i15!==null ? i15 :null} </h1>
      <h1 className='text-2xl font-normal my-2'>{i16!==null ? i16 :null} </h1>
       <h1 className='text-2xl font-normal my-2'>{i17!==null ? i17 :null} </h1>
       <h1 className='text-2xl font-normal my-2'>{i18!==null ? i18 :null} </h1>
       <h1 className='text-2xl font-normal my-2'>{i19!==null ? i19 :null} </h1>
       <h1 className='text-2xl font-normal my-2'>{i20!==null ? i20 :null} </h1>   
       </div>   
       </div>   
       </div>
       </div>
  )
}
