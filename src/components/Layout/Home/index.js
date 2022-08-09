import LogoTitle from '../../../assets/images/logoC.png'
import { Link }  from 'react-router-dom'
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../../AnimatedLetters';
const Home = () => {
    const [letterClass, setLetterClass] = useState ('text-animate')
    const nameArray = ['i','c','t','o','r']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']


    const v = <img src={LogoTitle} alt="develo,per" />
    




    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, <br />

                    I'm {v}
                    <AnimatedLetters letterClass={letterClass}
                    stringArray={nameArray}
                    idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    stringArray={jobArray}
                    idx={22} />
                    
                    I'm {v}ictor<br />
                    web developer

                </h1>
    
                <h2>Frontend Developer / JavaScript Expert(sort of)</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div> 
    
        </div>
    )
    }
    
    export default Home
