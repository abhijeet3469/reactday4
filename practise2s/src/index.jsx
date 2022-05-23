import React from 'react'; // Here it means, Function React is exported by default.
import ReactDOM from 'react-dom/client';
import './index.css'; // External CSS
import Appbar, {Hero} from './components/Appbar';


const root = ReactDOM.createRoot(document.getElementById('root'));


const NavBar = (props)=>{
    console.log('NavBar function over here');
    return (<>
    <h1 style={{color:'red', backgroundColor: 'cyan'}}>Welcome {props.name} 🙌 & {props.name2}</h1>
    <p>loremlhhkhkuhkjlhhkhkuhkjlhhkhkuhkjlhhkhkuhkjlhhkhkuhkjlhhkhkuhkj</p>
    </>)
}

const Time=()=>{
    const time = new Date().toLocaleTimeString()
    return <h1 className='time'>Time: {time}</h1>
}

setInterval(()=>{
    root.render(<>
    <Hero/>
    <Appbar/>
    <Hero/>
    <Time/>  
    <NavBar name='abhi' name2='amit'></NavBar>
    <h1>Our First React Time App❤️</h1>
    <p>TIME WEB APPLICATION</p>
    </>)
}, 1000)