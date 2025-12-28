import React from 'react'
import axios from 'axios'
import { useRef } from 'react'

const AddProduct = () => {
    const BASE_URL = "https://localhost:7267";


  const prodName = useRef();
  const prodPrice = useRef();
  const prodDescp = useRef();

  const AddProductandler = async() =>{
    await axios.post(`${BASE_URL}/api/Product`, {
    prodName: prodName.current.value,
    price: prodPrice.current.value,
    descp: prodDescp.current.value
  })

console.log(prodName.current.value)

  }

  return (
    <>
      <h2 className='text-center'>AddProduct</h2>
      <div className="container">
        <form>
          <div data-mdb-input-init className="form-outline mb-4">
            <input ref={prodName} type="text" id="form2Example1" className="form-control border" />
            <label className="form-label" htmlFor="form2Example1">Product Name</label>
          </div>

          <div data-mdb-input-init className="form-outline mb-4">
            <input ref={prodPrice} type="text" id="form2Example2" className="form-control border" />
            <label className="form-label" htmlFor="form2Example2">Price</label>
          </div>
          <div data-mdb-input-init className="form-outline mb-4">
            <input ref={prodDescp} type="text" id="form2Example2" className="form-control border" />
            <label className="form-label" htmlFor="form2Example2">Description</label>
          </div>


          <button data-mdb-ripple-init onClick={AddProductandler} type="submit" className="btn btn-primary btn-block mb-4">Add Product</button>


        </form>
      </div>
    </>
  )
}

export default AddProduct