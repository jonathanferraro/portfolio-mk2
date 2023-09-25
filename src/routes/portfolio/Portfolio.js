import React, { useState, useEffect } from 'react';
import '../../index.css';
import './Portfolio.css'


import { Header } from '../../components/Header/Header';
import { AboutMe } from '../../components/AboutMe/AboutMe';
import { Skills } from '../../components/Skills/Skills';
import { Projects } from '../../components/Projects/Projects';
import portrait from '../../logos/portrait3.jpg';


export function Portfolio() {
    const [randNum, setRandNum] = useState(0);

    const genRandNum = () => {
        let num = Math.random().toFixed(2)
        setRandNum(num);
    }

    useEffect(() => {
        genRandNum();
    }, []);


    return (
        <div className='portfolio dark:bg-gray-900 dark:text-white pr-5'>
            <Header />
            <p className='border mb-5'></p>

            <div className='main 
            ml-10 lg:ml-40'>
                <p className='text-sm text-gray-400 -mt-4 mb-1'>{`About 5.000,000,000 results (${randNum} seconds)`}</p>

                <div className='image-container'>
                    <div className='image-title mb-4'>
                        <svg style={{'color': 'gray', 'margin-right': '10px'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="7.499" cy="9.5" r="1.5" fill="currentColor"/><path fill="currentColor" d="m10.499 14l-1.5-2l-3 4h12l-4.5-6z"/><path fill="currentColor" d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z"/></svg>
                        <p className='text-2xl'>Images for Jonathan</p>
                        <svg className='dots3-svg' style={{'color': 'gray', 'margin-left': '20px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="currentColor"><circle cx="10" cy="15" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="5" r="2"/></g></svg>

                    </div>
                    <img
                     className='rounded-3xl'
                     src={portrait}/>
                </div>

                <AboutMe />
                <Skills />

                <Projects />



                <h1>Contact Section</h1>
                <input />
                <br/>
                <input />
                <br/>
                <input />
                <br/>
                <br/>
                <br/>
                <br/>



                

            </div>
        </div>
    )
}

