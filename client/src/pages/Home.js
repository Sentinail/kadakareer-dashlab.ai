import React from 'react'
import { SectionContainer, ItemCenter, Footer } from '../styled-components/HomeStyle'
import "bootstrap/dist/css/bootstrap.min.css"
import { useTheme } from "../contexts/themeContext";
import group from "../assets/group.png"
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  const { whiteColor, fourthColor } = useTheme()
  return (

    <>

      <div id='home'>
        <SectionContainer>
          <ItemCenter>
            <div >
              <img src={'https://dashlabs.ai/assets/images/image05.svg?v=4a9c1c0a'} style={{ width: '455px', marginRight: '50px' }} />
            </div>
            <div style={{ width: '645px' }}>
              <h1 style={{ color: whiteColor }}>Automating Health / Medical Diagnostic Lab Processes with {'>'} 20x Speed Increase and 99.99% Accuracy</h1>
              <p style={{ color: whiteColor, opacity: '60%', marginTop: '40px' }}>Dashlabs.ai offers a single, end-to-end platform for automating and optimizing healthcare and medical diagnostic lab operations including integration with any lab machine.</p>
            </div>
          </ItemCenter>
        </SectionContainer>
        <SectionContainer style={{ backgroundColor: fourthColor }}>
          <ItemCenter>
            <div style={{ width: '645px' }}>
              <h1 style={{ color: whiteColor }}>Team SkillBlend Synergy</h1>
              <p style={{ color: whiteColor, opacity: '60%', marginTop: '20px', lineHeight: '2rem', marginRight: '40px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla consequuntur rerum ab, eos officia quis nobis tempore totam non maiores ipsam adipisci nesciunt unde alias? Quia cupiditate ducimus labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla consequuntur rerum ab, eos officia quis nobis tempore totam non maiores ipsam adipisci nesciunt unde alias? Quia cupiditate ducimus labore!</p>
            </div>
            <div>
              <img src={group} alt='Teamwork' style={{ width: '455px' }} />
            </div>
          </ItemCenter>
        </SectionContainer>
        <SectionContainer>
          <div className='aboutContainer'>
            <div style={{ width: '645px' }}>
              <h1 style={{ color: whiteColor }}>About Project</h1>
            </div>
            <div>
              <p style={{ color: whiteColor, opacity: '60%', marginTop: '40px', textAlign: 'Center', width: '920px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla consequuntur rerum ab, eos officia quis nobis tempore totam non maiores ipsam adipisci nesciunt unde alias? Quia cupiditate ducimus labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla consequuntur rerum ab, eos officia quis nobis tempore totam non maiores ipsam adipisci nesciunt unde alias? Quia cupiditate ducimus labore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla consequuntur rerum ab, eos officia quis nobis tempore totam non maiores ipsam adipisci nesciunt unde alias? Quia cupiditate ducimus labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla consequuntur rerum ab, eos officia quis nobis tempore totam non maiores ipsam adipisci nesciunt unde alias? Quia cupiditate ducimus labore!</p>
            </div>
          </div>
        </SectionContainer>
        <Footer>
          <div>
            <p>Copyright © 2023 by Dashlab.ai | All Rights Reserved.</p>
          </div>
          <div className='iconTop'>
            <a href='#home'>
              <FontAwesomeIcon icon={faArrowUp} />
            </a>
          </div>
        </Footer>
      </div>
    </>
  )
}

export default Home