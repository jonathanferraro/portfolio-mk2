import React, { useState, useEffect } from 'react';
import './Portfolio.css'


import { Header } from '../../components/Header/Header';


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
        <div className='portfolio'>
            <Header />
            <p className='border'></p>

            <div >
                <p className="text-red-300">Test</p>
            </div>

            <div className='main'>
                <p style={{"color": "gray", "margin-top": "-10px"}}>{`About 5.000,000,000 results (${randNum} seconds)`}</p>

                <div className='image-container'>
                    <div className='image-title'>
                        <svg style={{'color': 'gray', 'margin-right': '10px'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="7.499" cy="9.5" r="1.5" fill="currentColor"/><path fill="currentColor" d="m10.499 14l-1.5-2l-3 4h12l-4.5-6z"/><path fill="currentColor" d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z"/></svg>
                        <p className='images-header'>Images for Jonathan</p>
                        <svg className='dots3-svg' style={{'color': 'gray', 'margin-left': '20px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="currentColor"><circle cx="10" cy="15" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="5" r="2"/></g></svg>

                    </div>
                    <img
                     src='https://agreatdream.com/wp-content/uploads/2012/04/question-mark.jpg'/>
                </div>

                <div className='about-me'>
                    <div className='about-me-title'>
                        <div className='about-me-svg'>
                            📕
                        </div>
                        <div className='about-me-link'>

                            <p>About</p>
                            <div className='about-me-url-group'>
                                <p className='about-me-link-url'>https://www.localhost:3000/about</p>
                                <svg className='dots3-svg' style={{'color': 'gray', 'margin-top': '-20px', 'margin-left': '20px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="currentColor"><circle cx="10" cy="15" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="5" r="2"/></g></svg>
                            </div>

                        </div>
                        
                    </div>
                    <div className='about-me-content-title'>About Me</div>
                    <div>text text text text text. text text text text text. text text text text text. text text text text text. text text text text text. text text text text text. text text text text text. text text text text text. text text text text text. text text text text text. text text text text text. text text text text text. text text text text text. </div>


                </div>

                <div className='skills-container'>

                <div className='skills-header'>
                    <p className='skills-title'>People also ask</p>
                    <svg className='dots3-svg' style={{'color': 'gray', 'margin-left': '20px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="currentColor"><circle cx="10" cy="15" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="5" r="2"/></g></svg>
                </div>


                <p className='border'></p>
                <div className='skills'>
                    <div>
                        <p>What skills does Jonathan have?        V</p> 
                    </div>
                    
                </div>
                <p className='border'></p>
                </div>

                <div className='projects-container'>
                    <p className='projects-title'>Projects {'>'} Greater than arrow</p>
                    <p className='border'></p>
                    <div className='project'>
                        <div>
                            <img
                            src='https://agreatdream.com/wp-content/uploads/2012/04/question-mark.jpg'/>
                        </div>
                        <div className='project-info'>
                            <p className='project-indv-title'>Reddit Clone</p>
                            <p>other project detail</p>
                        </div>
                    </div>
                    <p className='border'></p>
                    <div className='project'>
                        <div>
                            <img
                            src='https://agreatdream.com/wp-content/uploads/2012/04/question-mark.jpg'/>
                        </div>
                        <div className='project-info'>
                            <p className='project-indv-title'>E-Commerce Website | Fullstack</p>
                            <p>other project detail</p>
                        </div>
                    </div>
                    <p className='border'></p>
                        
                </div>

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

