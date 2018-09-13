import React,{ Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Banner from './banner';
import Footer from './footer';
import styled from 'styled-components'

const Section = styled.section`
margin: 30px 0;`
class App extends Component {
    render() {
        return (
            <div className='container'>
                <Section>
                  <Banner/>
                </Section>
                <Section>
                  <Footer/>
                </Section>
            </div>
        );
    }
}

export default App;
