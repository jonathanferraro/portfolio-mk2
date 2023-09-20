import React from 'react';


export function AboutMe() {


    return (
        <div className='about-me'>
        <div className='about-me-title'>
            <div className='about-me-svg'>
                📕
            </div>
            <div className='about-me-link'>

                <p>About</p>
                <div className='about-me-url-group'>
                    <p className='about-me-link-url pt-1'>https://www.localhost:3000/about</p>
                    <svg className='pt-2 cursor-pointer' style={{'color': 'gray', 'margin-top': '-20px', 'margin-left': '20px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="" viewBox="0 0 20 20"><g fill="currentColor"><circle cx="10" cy="15" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="5" r="2"/></g></svg>
                </div>

            </div>
            
        </div>
        <div className='text-lg text-blue-700 font-semibold'>About Me</div>
        <div>
            I'm a driven software engineer who thrives on challenges and believes in the power of technology 
            to simplify complex problems. My passion lies in continuous growth within the field, and I'm committed 
            to pushing the boundaries of what's possible.

            
        </div>


        </div>

        
    )
}