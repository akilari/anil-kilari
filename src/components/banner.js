import React,{ Component } from 'react'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'

const Hero = styled.div`
.nucor-banner {
  width: 100%;
  height: 300px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  padding: 0px 50px;
  background-position: center center;
  overflow: hidden;
  border: 2px solid #c9c9c9;
}
h1, p {
  color: black;
}`
class Banner extends Component {
    render() {
        return (
            <div className='container'>
            <Hero>
              <div className="nucor-banner">
                <h1 className="animate text-center">Anil Kilari</h1>
                <p className='banner animate text-center'>React/Redux Developer</p>
              </div>
            </Hero>
            </div>
        );
    }
}

export default Banner;
