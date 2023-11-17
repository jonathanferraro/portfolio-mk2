import React, {useState, useEffect, useRef} from 'react';
import './SearchPage.css'
import cursor from '../../mouse-cursor.png';
import searchIMG from '../../search.jpg';

export function SearchPage() {
    const [searchWord, setSearchWord] = useState('');
    const test = "Jonathan's Portfolio";
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startSearch, setStartSearch] = useState(false);
    const [searchButtonColor, setSearchButtonColor] = useState('#f5f5f5')

    const generateSearch = () => {
        if (currentIndex < test.length) {
            let letter = test[currentIndex];
            setSearchWord((prev) => prev + letter);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const [position, setPosition] = useState({ x: 400, y: 500 });

    const searchBarRef = useRef(null);
    const searchButtonRef = useRef(null);


    const handleSlide = () => {
        let { x, y } = searchBarRef.current.getBoundingClientRect();
        x = 0
        y += 20
        setPosition({ x, y });
    };

    const handleSearchSlide = () => {
        let { x, y } = searchButtonRef.current.getBoundingClientRect();
        x = -100
        y += 20
        setPosition({ x, y });
    };



    let waitStartSearch = () => {
        setTimeout(() => {
            setStartSearch(true)
        }, 1700)
    };

    let waitMoveToSearch = () => {
        setTimeout(() => {
            handleSearchSlide();
        }, 4000)
    };

    let searchButtonClick = () => {
        setTimeout(() => {
            setSearchButtonColor('#aaa8a8')
        }, 5500)
    }

    let searchButtonUnClick = () => {
        setTimeout(() => {
            setSearchButtonColor('#f5f5f5')
        }, 5700)
    }

    let redirectToPortfolio = () => {
        setTimeout(() => {
            window.location.href='/portfolio'
        }, 6000)
    }

    useEffect(() => {  
        handleSlide()
        waitStartSearch();
        waitMoveToSearch();
        searchButtonClick();
        searchButtonUnClick();
        redirectToPortfolio()
    }, [])




    useEffect(() => {
        if (startSearch === true){
            const interval = setInterval(generateSearch, 100);

            return () => clearInterval(interval);
    }
    }, [currentIndex, startSearch]);


    return (
        <div className='search-page'>

            <img
                className={`cursor slide`}
                src={cursor}
                style={{ 
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    
                }}
              />
            <div className='search-container'>
                <img
                    src={searchIMG}
                />
                <input
                id='search-bar'
                type='text'
                ref={searchBarRef}
                value={searchWord}/>
                <div className='search-button-container'>
                    <button style={{'background-color': searchButtonColor}} id='search-button' ref={searchButtonRef}>Search</button>
                    <button >I'm Feeling Fortunate</button>
                </div>
            </div>

            
        </div>
    )
}