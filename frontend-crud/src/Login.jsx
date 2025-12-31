import axios from 'axios'
import React, {useState} from 'react'

const Login = () => {

    const BASE_URL = "https://localhost:7267";

    const [formValue, setFormValue] = useState({
        Email: "",
        PasswordHash: "",
        })

        const onChange = (e) =>{
            setFormValue({...formValue,[e.target.name]: e.target.value})
            console.log(formValue)
            
        }

        const loginHandler = async(e) =>{
            e.preventDefault();
            try {
                const{data} = await axios.post(`${BASE_URL}/api/Auth/login`,
                    formValue)
                    console.log(data.token)
                    localStorage.setItem("userToken", data.token);
                    console.log("login successfully")
            } catch (error) {
                console.log(error)
            }
        }

    return (
        <>
            <h2 className='text-center mt-3'>Login</h2>
            <div className="container mt-3 ">
                <form>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="email"
                        onChange={onChange}
                        name='Email'
                        value={formValue.Email} 
                        className="border form-control" />
                        <label className="form-label" htmlFor="form1Example1">Email</label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="password"
                        onChange={onChange}
                        name='PasswordHash'
                        value={formValue.PasswordHash} className="form-control border" />
                        <label className="form-label" htmlFor="form1Example2">Password</label>
                    </div>

                    <div className="row mb-4">
                        <div className="col text-center">
                            <p>Don't have an account? <a href="#!">Signup</a></p>
                        </div>
                    </div>

                    <button data-mdb-ripple-init type="submit" 
                    onClick={loginHandler}
                    className="btn
                     btn-primary btn-block">Sign up</button>
                </form>
            </div>
        </>
    )
}

export default Login