import React from 'react';
import { Link } from "react-router-dom";

const Structure = ({email, username, role, timezone, values, checked}) => {
    return (
        <section className="max-w-[70%] m-auto">
            <Link to="/" className="inline-flex items-center font-medium text-blue-600  hover:underline p-2 mb-6 mt-2">tasks</Link>
            <h1 className="text-3xl p-2 font-display mb-6"> Hello, <span className="font-medium text-gray-600">{username}</span>👋</h1>
            
            <div className="flex flex-wrap flex-row justify-center gap-4 p-3 ">
                
                {/* section tags =========================================================== */}
                <div className="flex flex-grow-0 flex-col min-w-[13%] items-center border-slate-300 bg-indigo-100 rounded-md hover:shadow-md p-2 border">
                    <h4 className="font-display text-center text-slate-600 p-1 text-lg"> 📀 tags</h4>
                    {Array.isArray(values) && values.length !== 0 ? (
                        values.map((val, index) => {

                            
                            return <div className='flex p-2' key={index}>
                                <p className='text-center font-medium text-blue-500'>{val.tag}</p>
                            </div>
                        })
                    ): <p className='text-center font-medium text-indigo-800'>no tags</p>}

                </div>
                {/* section Profile Informations =========================================== */}
                <div className="flex  border rounded-md hover:shadow-md p-2">
                    <h1 className="font-display text-center text-slate-600 p-1 text-xl mb-4">Profile informations 🌐</h1>
                    
                    <div className='flex justify-evenly items-center'>
                        <div className='flex flex-col flex-wrap justify-start items-start p-2 max-w-[300px]'>
                            <p className="font-display text-center text-slate-600 p-1 text-lg ">Email : <span className='font-medium'>{email}</span></p>
                            <p className="font-display text-center text-slate-600 p-1 text-lg ">UserName : <span className='font-medium'>{username}</span></p>
                            <p className="font-display text-center text-slate-600 p-1 text-lg ">Role : <span className='font-medium'>{role}</span></p>
                            <p className="font-display text-center text-slate-600 p-1 text-lg ">timezone : <span className='font-medium'>{timezone}</span></p>
                        </div>

                        <div className='flex flex-col flex-wrap'>
                            <div className='flex flex-col justify-center items-start p-2  '>
                                    <Link to="/profile/update" className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                                        update your profile 
                                    </Link>
                            </div>
                            <div className='flex flex-col justify-center items-start p-2'>
                                    <Link to="/profile/updatePassword" className='text-white bg-gradient-to-br from-indigo-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                                        update your password 
                                    </Link>
                            </div>
                        </div>
                       
                    </div>
                   
                 {/* section Tasks =========================================== */}
                </div>
                <div className="flex flex-col border rounded-md min-w-[13%] items-center border-slate-300 bg-indigo-100 hover:shadow-md">
                    <h4 className="font-display text-center text-slate-600 p-1 text-lg"> 💫 tasks</h4>
                    {Array.isArray(values) && values.length !== 0 ? (
                        values.map((val, index) => {
                           return <div className='flex p-2' key={index}>
                        
                                 <input type="checkbox" name="" id="" className='mr-2' onClick={() => checked(val.id)} key={index}/>
                                <p className='text-center font-medium text-blue-500'>{val.notes}</p>
                            </div>
                        })
                    ): <p className='text-center font-medium text-indigo-800'>no tags</p>}
                </div>
            </div>
        </section>
        
    );
}

export default Structure;
