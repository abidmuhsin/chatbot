import { AiOutlineClose } from "react-icons/ai"; 
import { AiOutlineRight } from "react-icons/ai"; 
import { AiOutlineLeft } from "react-icons/ai"; 
import { RiArrowDropDownLine } from "react-icons/ri";  
import { ImLocation } from "react-icons/im"; 
import { CiLocationOn } from "react-icons/ci"; 
import bps from '../assets/bps.png'
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';

const Navbar =()=>{

    return (
        <div>
            <div className="bg-[#002b6a] max-w-full min-h-20 flex items-center justify-center">
                <div className='flex max-w-72 ml-3 mr-5'>
                    <img src={bps} alt="" className='w-16 h-10 mt-2'/>
                    <h1 className='italic text-white font-bold text-lg'>BADAN PUSAT STATISTIK KOTA PALU</h1>
                </div>
                <div className=''>
                    <ul className='flex gap-7 text-white'>
                        <li>Beranda</li>
                        <li>Rencana Terbit</li>
                        <li className="flex items-center">Produk
                            <RiArrowDropDownLine />
                        </li>
                        <li>Layanan</li>
                        <li className="flex items-center">Informasi Publik
                        <RiArrowDropDownLine />
                        </li>
                    </ul>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#003c80] flex items-center justify-center ml-8">
                    <ImLocation className="text-white text-md"/>
                </div>
                <div className="max-w-20 ml-8 flex flex-row">
                    <img className="w-8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAACUCAMAAADLemePAAAAKlBMVEX/AAD////k5ObmsbP/XV3/5+fkubvgzM7mrrDlt7nkwsP/UlLg4OLk3+CwfFvCAAAA10lEQVR4nO3PiQ3CMADAwFCgP/uvyxQIXeSbwB7b/pzWvo1jTOwY678TfmltD9aerD1Ze7L2ZO3J2pO1J2tP1p6sPVl7svZk7cnak7Una0/Wnqw9WXuy9mTtydqTtSdrT9aerD1Ze7L2ZO3J2pO1J2tP1p6sPdk6zus1rescn/fEPmN5TGxpD9aerD1Ze7L2ZO3J2pO1J2tP1p6sPVl7svZk7cnak7Una0/Wnqw9WXuy9mTtydqTtSdrT9aerD1Ze7L2ZO3J2pO1J2tP1p6sPdn0e/cysfsLfENO26bUq4gAAAAASUVORK5CYII=" alt="" />
                    <RiArrowDropDownLine className="text-white text-xl"/>
                </div>
            </div>
            <div className="w-full bg-blue-500 h-12 flex items-center" >
                <div className="w-[76%] flex justify-between m-auto">
                    <h1 className="text-white">Laporkan Pengaduan Anda Melalui : s.bps.go.id/pengaduan7271</h1>
                    <div className="flex text-white">
                        <AiOutlineLeft className="mt-[5px]" />
                        <h1 className="">1/2</h1>
                        <AiOutlineRight className="mt-[5px]"/>
                        <AiOutlineClose className="text-blue-500 bg-white w-5 mt-1 h-5 p-1 font-bold rounded-md"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;