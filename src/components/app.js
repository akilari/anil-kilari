import React,{ Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Banner from './banner';
import Footer from './footer';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <Banner/>
                <Footer/>
            </div>
        );
    }
}

export default App;
