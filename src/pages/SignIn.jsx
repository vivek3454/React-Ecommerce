import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { AppContext } from '../context/Context';

const SignIn = () => {
    const { setIsLogin } = useContext(AppContext);
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const [testUserInfo] = useState({ email: "testuser@gmail.com", password: "testuser@01082023" });
    const [errorMessage, setErrorMessage] = useState('');

    const handleOnChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
    const handleTestUser = () => {
        setUserInfo({ email: testUserInfo.email, password: testUserInfo.password });
        setErrorMessage('');
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (testUserInfo.email === userInfo.email && testUserInfo.password === userInfo.password) {
            setIsLogin(true);
            sessionStorage.setItem('isLogin', true);
            navigate('/');
        }
        else {
            setErrorMessage('Please use test user');
        }
    }

    return (
        <section className="w-full h-screen px-2 flex justify-center items-center">
            <div className="border-2 rounded p-8 w-96">
                <form>
                    <h2 className="text-gray-900 text-3xl font-bold text-center mb-5">Login</h2>
                    <div className="relative mb-4">
                        <label htmlFor="email" className='font-semibold'>email</label>
                        <input type="text" onChange={handleOnChange} value={userInfo.email} placeholder='email' autoComplete='false' id="email" name="email" className="w-full mt-1 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="password" className='font-semibold'>password</label>
                        <input type="password" onChange={handleOnChange} value={userInfo.password} placeholder='password' autoComplete='false' id="password" name="password" className="w-full mt-1 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    {errorMessage && <p className="mb-3 text-sm text-red-600">*{errorMessage}</p>}
                    <div className='flex justify-center'>
                        <button onClick={handleFormSubmit} className="text-white bg-[#4CB5F9] active:bg-[#4CB5F9] border-0 w-full py-1 px-8 focus:outline-none hover:bg-[#369fe6] rounded-xl text-lg">Log in</button>
                    </div>

                </form>
                <div className="mt-4 text-center">
                    <button onClick={handleTestUser} className="text-white bg-[#4CB5F9] active:bg-[#4CB5F9] border-0 py-1 px-8 focus:outline-none hover:bg-[#369fe6] rounded-xl text-lg">Test user</button>
                </div>
            </div>
        </section>
    )
}

export default SignIn