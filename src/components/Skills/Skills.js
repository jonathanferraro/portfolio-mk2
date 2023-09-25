import React, {useState} from 'react';

import elephant from '../../logos/elephant2.gif';
import elephantStatic from '../../logos/elephant-static.png';
import html from '../../logos/html2.gif';
import htmlStatic from '../../logos/html-static2.png';
import css from '../../logos/css2.gif';
import cssStatic from '../../logos/css-static.png';
import javascript from '../../logos/javascript2.gif';
import javascriptStatic from '../../logos/javascript-static2.png';
import python from '../../logos/python.gif';
import pythonStatic from '../../logos/python-static.png';
import github from '../../logos/github.gif';
import githubStatic from '../../logos/github-static.png';
import reactImg from '../../logos/reactImg2.gif';
import reactImgStatic from '../../logos/reactImg-static2.png';
import reduxStatic from '../../logos/redux-static.png';
import tailwindcssStatic from '../../logos/tailwindcss-static.png';
import node from '../../logos/node2.gif';
import nodeStatic from '../../logos/node-static2.png';

export function Skills() {
    const [showSkills, setShowSkills] = useState(false);

    const showSkillHandler = () => {
        setShowSkills(!showSkills);
    }


    return (
        
        <div className='skills-container container mb-16 max-w-7 '>

            <div className='skills-header'>
                <p className='text-2xl '>People also ask</p>
                <svg className='dots3-svg' style={{'color': 'gray', 'margin-left': '20px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="currentColor"><circle cx="10" cy="15" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="5" r="2"/></g></svg>
            </div>


            <p className='border my-2'></p>
            <div className='skills'>
                <div data-dropdown-toggle="dropdown" className='container flex justify-between select-none' onClick={showSkillHandler}>
                    <p>What skills does Jonathan have?</p>
                    { showSkills ?
                        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(180 12 12)"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5m0 0l5-5"/></g></svg> 
                    :
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5m0 0l5-5"/></svg> 
                    }


                </div>

                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
                {/* style={{ display: showSkills ? 'block' : 'none' }} */}
                {/* ${showSkills ? 'block' : 'hidden'} */}
                <div id='dropdown '  style={{ display: showSkills ? 'block' : 'none' }}
                    className='skills-all-images mt-5 hidden 
                    '
                >

                    <div className='skills-image-row'>
                        <div className='flex'>
                            <div className='skills-image html'>
                                    <img className='active' src={html}/>
                                    <img className='static  bg-white dark:bg-gray-900' src={htmlStatic}/>
                            </div>
                            <div>
                                <p className='skills-image-title pl-3'>HTML5</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='skills-image image2 css'>
                                    <img className='active' src={css}/>
                                    <img className='static bg-white dark:bg-gray-900' src={cssStatic}/>
                            </div>
                            <div>
                                <p className='skills-image-title pl-5'>CSS3</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='skills-image image2 elephant javascript'>
                                    <img className='active' src={javascript}/>
                                    <img className='static bg-white dark:bg-gray-900' src={javascriptStatic}/>
                            </div>
                            <div>
                                <p className='skills-image-title'>Javascript</p>
                            </div>
                        </div>
                    </div>

                    <div className='skills-image-row pt-3'>
                        <div>
                            <div className='skills-image elephant'>
                                    <img className='active ' src={python}/>
                                    <img className='static bg-white dark:bg-gray-900' src={pythonStatic}/>
                            </div>
                            <div>
                                <p className='skills-image-title pl-2'>Python3</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='skills-image image2 elephant'>
                                    <img className='active' src={reactImg}/>
                                    <img className='static bg-white dark:bg-gray-900' src={reactImgStatic}/>
                            </div>
                            <div>
                                <p className='skills-image-title pl-4'>React</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='skills-image image2 redux'>
                                    <img className='hover:animate-spin' src={reduxStatic}/>
                                    {/* <img className='static' src={reactImgStatic}/> */}
                            </div>
                            <div>
                                <p className='skills-image-title pl-4'>Redux</p>
                            </div>
                        </div>
                    </div>

                    <div className='skills-image-row  pt-4'>
                        <div className='flex'>
                            <div className='skills-image  elephant'>
                                    <img className='active' src={elephant}/>
                                    <img className='static bg-white dark:bg-gray-900' src={elephantStatic}/>
                            </div>
                            <div>
                                <p className='skills-image-title'>Postgres</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='skills-image image2 tailwind'>
                                    <img className='hover:animate-bounce' src={tailwindcssStatic}/>
                                    {/* <img className='static' src={elephantStatic}/> */}
                            </div>
                            <div>
                                <p className='skills-image-title'>Tailwind CSS</p>
                            </div>
                        </div>
                        <div className='flex -ml-10'>
                            <div className='skills-image image2 elephant github'>
                                    <img className='active' src={github}/>
                                    <img className='static bg-white dark:bg-gray-900' src={githubStatic}/>
                            </div>
                            <div>
                                <p className='skills-image-title pl-8'>Github</p>
                            </div>
                        </div>
                    </div>

                    <div className='skills-image-row pb-6'>
                        <div className='flex -ml-5'>
                            <div className='skills-image node'>
                                    <img className='active' src={node}/>
                                    <img className='static bg-white dark:bg-gray-900' src={nodeStatic}/>
                            </div>
                            <div>
                                <p className='skills-image-title pl-10  '>Node</p>
                            </div>
                        </div>
                    </div>

                        
                </div>


            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

                
            </div>
            <p className='border my-2'></p>
        </div>
    )
}