import React, {useState} from 'react'
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from "react-toastify";

const Login = ({setToken}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin', {email, password})
            if(response.data.success){
                setToken(response.data.token)
            }
            else{
                toast.error(response.data.message);
            }
        } catch(error){
            console.log(error);
            toast.error(error.message);
        }
    }

  return (
    <div className="flex items-center min-h-screen justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-7 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmitHandler} >
          <div className="mb-3 min-w-72 ">
            <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-mb w-full px-3 py-2 border border-gray-300 outline-none"
              type="text"
              placeholder="Enter Your email"
            ></input>
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-mb w-full px-3 py-2 border border-gray-300 outline-none"
              type="password"
              placeholder="Enter You password"
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login