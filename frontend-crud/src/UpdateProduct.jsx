import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router';

const UpdateProduct = () => {

    const BASE_URL = "https://localhost:7267";

    const { id } = useParams();
    const nav = useNavigate();
    const prodName = useRef();
    const prodPrice = useRef();
    const prodDescp = useRef();

    async function getProducts() {
        try {
            const response = await axios.get(`${BASE_URL}/api/Product/fetch/${id}`)

            prodName.current.value = response.data.prodName;
            prodPrice.current.value = response.data.price;
            prodDescp.current.value = response.data.descp;

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts();
    }, [])


    async function UpdateProdHandler(e) {
        e.preventDefault();
        try {
             await axios.put(`${BASE_URL}/api/Product`,{
                id: id,
                prodName: prodName.current.value,
                price: prodPrice.current.value,
                descp: prodDescp.current.value
            })
            nav('/')

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <h2 className='text-center'>Update Product</h2>
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


                    <button onClick={UpdateProdHandler} type="submit" className="btn btn-primary btn-block mb-4">Update Product</button>


                </form>
            </div>
        </>
    )
}

export default UpdateProduct