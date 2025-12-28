import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router';
// import { data } from 'react-router';

const ViewProduct = () => {

  const BASE_URL = "https://localhost:7267";

  const [ProductsData, setProductsData] = useState([]);

  const updateRef = useNavigate();

  async function getProducts() {
    try {
      const response = await axios.get(`${BASE_URL}/api/Product`);
      setProductsData(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  const prodDeleteHandler = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/Product/${id}`)
      setProductsData(ProductsData.filter(p => p.id !== id));
    }
    catch (error) {
      console.log(error)
    }
  }

  const searchQuery = useRef();

  const searchHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${BASE_URL}/api/Product/${searchQuery.current.value}`)
      setProductsData(response.data);
    }
    catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <h2 className='text-center m-4'>View Products</h2>
      {/* code for searchBar */}
      <div className="container mb-5">
        <div className="input-group">
          <div className="form-outline" data-mdb-input-init>
            <input ref={searchQuery} type="search" onChange={searchHandler} id="form1" className="form-control border" />
            <label className="form-label" htmlFor="form1">Search</label>
          </div>
          <button type="button" onClick={searchHandler} className="btn btn-primary" data-mdb-ripple-init>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      <div className='container'>

        <div className="row">

          {
            ProductsData.map((prod) => (
              <div className="col" key={prod.id}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{prod.prodName}</h4>
                    <h6 className="">Rs: {prod.price}</h6>
                    <p className="">{prod.descp}</p>
                    <button type="submit" className="btn btn-danger" onClick={() => { prodDeleteHandler(prod.id) }}>Delete</button>
                    <button type="submit" className="btn btn-warning" onClick={() => updateRef(`/updateProduct/${prod.id}`)}>Update</button>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </>
  )
}

export default ViewProduct