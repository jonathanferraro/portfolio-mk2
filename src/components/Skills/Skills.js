import React, {useState} from 'react';

import elephant from '../../logos/elephant.gif';
import elephantStatic from '../../logos/elephant-static.png';
import html from '../../logos/html.gif';
import htmlStatic from '../../logos/html-static.png';
import css from '../../logos/css.gif';
import cssStatic from '../../logos/css-static.png';
import javascript from '../../logos/javascript.gif';
import javascriptStatic from '../../logos/javascript-static.png';
import python from '../../logos/python.gif';
import pythonStatic from '../../logos/python-static.png';
import github from '../../logos/github.gif';
import githubStatic from '../../logos/github-static.png';
import reactImg from '../../logos/reactImg.gif';
import reactImgStatic from '../../logos/reactImg-static.png';
import reduxStatic from '../../logos/redux-static.png';
import tailwindcssStatic from '../../logos/tailwindcss-static.png';
import node from '../../logos/node.gif';
import nodeStatic from '../../logos/node-static.PNG';

export function Skills() {
    const [showSkills, setShowSkills] = useState(false);

    const showSkillHandler = () => {
        setShowSkills(!showSkills);
    }


    return (
        
        <div className='skills-container container mb-5 max-w-7'>

            <div className='skills-header'>
                <p className='text-2xl '>People also ask</p>
                <svg className='dots3-svg' style={{'color': 'gray', 'margin-left': '20px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="currentColor"><circle cx="10" cy="15" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="5" r="2"/></g></svg>
            </div>


            <p className='border my-2'></p>
            <div className='skills'>
                <div className='container flex justify-between select-none' onClick={showSkillHandler}>
                    <p >What skills does Jonathan have?</p>
                    { showSkills ?
                        <p className='pr-3'>^</p> 
                    :
                    <p className='pr-3'>V</p> 
                    }


                </div>

                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
                <div className='skills-all-images'>

                <div className='flex'>
                <div className='skills-image'>
                        <img className='active' src={html}/>
                        <img className='static' src={htmlStatic}/>
                </div>
                <div>
                    <p className='skills-image-title pl-3'>HTML5</p>
                </div>
                </div>
                <div className='flex'>
                    <div className='skills-image image2 css'>
                            <img className='active' src={css}/>
                            <img className='static' src={cssStatic}/>
                    </div>
                    <div>
                        <p className='skills-image-title pl-5'>CSS</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='skills-image image2 elephant'>
                            <img className='active' src={javascript}/>
                            <img className='static' src={javascriptStatic}/>
                    </div>
                    <div>
                        <p className='skills-image-title'>Javascript</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='skills-image image2 elephant'>
                            <img className='active' src={python}/>
                            <img className='static' src={pythonStatic}/>
                    </div>
                    <div>
                        <p className='skills-image-title pl-2'>Python</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='skills-image image2 elephant'>
                            <img className='active' src={reactImg}/>
                            <img className='static' src={reactImgStatic}/>
                    </div>
                    <div>
                        <p className='skills-image-title pl-4'>React</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='skills-image image2 redux'>
                            <img  src={reduxStatic}/>
                            {/* <img className='static' src={reactImgStatic}/> */}
                    </div>
                    <div>
                        <p className='skills-image-title pl-4'>Redux</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='skills-image image2 elephant'>
                            <img className='active' src={elephant}/>
                            <img className='static' src={elephantStatic}/>
                    </div>
                    <div>
                        <p className='skills-image-title'>Postgres</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='skills-image image2 tailwind'>
                            <img  src={tailwindcssStatic}/>
                            {/* <img className='static' src={elephantStatic}/> */}
                    </div>
                    <div>
                        <p className='skills-image-title'>Tailwind CSS</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='skills-image image2 elephant'>
                            <img className='active' src={github}/>
                            <img className='static' src={githubStatic}/>
                    </div>
                    <div>
                        <p className='skills-image-title pl-3'>Github</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='skills-image image2 node'>
                            <img className='active' src={node}/>
                            <img className='static' src={nodeStatic}/>
                    </div>
                    <div>
                        <p className='skills-image-title pl-7 pt-1'>Node</p>
                    </div>
                </div>

                        
                </div>


            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}



                <p style={{ display: showSkills ? 'block' : 'none' }}>
                    Test test test test Test test test test Test test test test Test test test test
                    
                </p>

                
            </div>
            <p className='border my-2'></p>
        </div>
    )
}