import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CourseContext } from './CourseContext'

function App() {
  const{products}=useContext(CourseContext);


  const generateOption=()=>{
    const option=[];
    for(let i=0;i<10;i++){
      option.push(<option key={i+1} value={i+1}>{i+1}</option>)
    }
    return option;
  }
  const[quantities,setQuantities]=useState(Array(products.length).fill(1));
  const multi=(e,index)=>{
    const selectedVal=e.target.value;
    setQuantities((prevQuantities)=>{
      const newQuantities=[...prevQuantities];
      newQuantities[index]=parseInt(selectedVal,10);
      return newQuantities;
    });
  };

  return (
   <>
   <div className='container d-flex flex-column gap-5 mt-10'>
    {products.map((data,index)=>(
      <div key={index} className='main'>
        <div key={index} className='d-flex justify-content-between'>
          <div className='img-des d-flex align-items-center gap-5'>
            <div className='image'>
              <img src={data.thumbnail} alt="" />
            </div>
            <div className='image-des'>
              <h4>{data.title}</h4>
              <h4>{data.brand}</h4>
              <h4>{data.description}</h4>
              <h4>{data.category}</h4>
            </div>
          </div>
          <div className='price-des d-flex flex-column justify-content-between'>
            <div className='price-count d-flex'>
              <select onChange={(e)=>multi(e,index)} name="" id="" className='mx-5'>
                {generateOption()}
              </select>
              <div className='price'>
                <strong>${data.price}</strong>
              </div>
            </div>
            <div className='remove-btn align-self-end'>
              <button className='btn btn-danger'>Remove</button>
            </div>
          </div>
        </div>
        <hr/>
        <div className='subtotal'>
          <div className='sub-price d-flex justify-content-between mt-2'>
            <h5>SUBTOTAL:</h5>
            <h5>${data.price*quantities[index]}</h5>
          </div>
          <div className='sub-shopping d-flex justify-content-between mt-2'>
            <h5>SHIPPING:</h5>
            <h5>FREE</h5>
          </div>
        </div>
        <hr/>
        <div className='sub-price d-flex justify-content-between mt-2'>
          <h5>TOTAL</h5>
          <h5>${data.price*quantities[index]}</h5>
        </div>
      </div>
    ))}

   </div>
   </>
  )
}

export default App
