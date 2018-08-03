import React,{ Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class Banner extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='text-center animate'>Anil Kilari</h1>
                <p className='banner animate text-center'>React/Redux Developer</p>
            </div>
        );
    }
}

export default Banner;
