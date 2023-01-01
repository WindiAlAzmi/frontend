import React from 'react';
import logo from './../images/logo-light2.png';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const arrayNavbar = [
        {id:'1', name:'cloud hosting', link:''},
        {id:'2', name:'server', link:''},
        {id:'3', name:'domain', link:''},
        {id:'4', name:'more', link:''},
        {id:'5', name:'login', link:''}

    ]
    return (
        <div className="w-full h-18 flex flex-rows justify-between bg-white ">
             <div className="w-2/6 mx-auto flex flex-rows  items-center  p-2">
                <h3 className="text-red-700 font-bold text-lg">Qwords</h3>
                 <img src={logo} className=" border-black" alt="logo"/>
             </div>
             <div className="w-4/6 flex flex-rows items-center justify-around ">
                {arrayNavbar.map((lNa) => {
                    if(lNa.name === 'login'){
                        return (
                            <button className="bg-red-700 border-white text-white border w-28 rounded-xl font-bold text-base p-2">{lNa.name}</button>
                        )
                    }
                    return (
                           <Link to={lNa.link}><h3 className="text-black text-base font-bold hover:bg-red-700  hover:rounded-lg hover:text-white p-2">{lNa.name}</h3></Link>
                    )
                })}
             </div>
        </div>

    )
}

export default Navbar;