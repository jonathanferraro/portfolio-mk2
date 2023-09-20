import React from 'react';

export function Projects() {


    return (
        <div className='projects-container'>
        <p className='text-2xl mb-3'>Projects {'>'} Greater than arrow</p>
        <p className='border'></p>
        <div className='project'>
            <div>
                <img
                src='https://agreatdream.com/wp-content/uploads/2012/04/question-mark.jpg'/>
            </div>
            <div className='project-info my-3'>
                <div className='container flex flex-row justify-between'>
                    <p className='project-indv-title'>Reddit Clone</p>
                    <p>Technologies: {"[~~ Icons here ~~]"}</p>
                </div>
                <p>A Front-End project using the Reddit API designed to replicate Reddit's functionality and UI.
                    </p>
            </div>
        </div>
        <p className='border'></p>
        <div className='project my-3'>
            <div>
                <img
                src='https://agreatdream.com/wp-content/uploads/2012/04/question-mark.jpg'/>
            </div>
            <div className='project-info'>
                <div className='container flex justify-between'>
                    <p className='project-indv-title pr-24'>E-Commerce Website | Fullstack</p>
                    <p>Technologies: {"[~~ Icons here ~~]"}</p>
                </div>
                <p>A Full-Stack project designed to mimic the functionality of a e-commerce website.</p>
            </div>
        </div>
        <p className='border'></p>
            
        </div>


    )
}