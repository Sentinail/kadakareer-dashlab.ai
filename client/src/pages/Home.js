import React, { useEffect, useState } from 'react'
import { SectionContainer, ItemCenter, Footer } from '../styled-components/HomeStyle'
import { useTheme } from "../contexts/themeContext";
import group from "../assets/group.png"
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styled-components/Breakpoints.css'

const Home = () => {
  const { fourthColor } = useTheme()
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 993)

  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth < 993;
      if (smallScreen !== isSmallScreen) {
        setIsSmallScreen(smallScreen);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [isSmallScreen])

  return (

    <>

      <div id='home'>
        <SectionContainer>
          <ItemCenter>
            <div className='imageContainer'>
              <img src={'https://dashlabs.ai/assets/images/image05.svg?v=4a9c1c0a'} />
            </div>
            <div className='textContainer'>
              <h1>Automating Health / Medical Diagnostic Lab Processes with {'>'} 20x Speed Increase and 99.99% Accuracy</h1>
              <p>Dashlabs.ai offers a single, end-to-end platform for automating and optimizing healthcare and medical diagnostic lab operations including integration with any lab machine.</p>
            </div>
          </ItemCenter>
        </SectionContainer>
        <SectionContainer style={{ backgroundColor: fourthColor }}>
          <ItemCenter>
            <div className='textContainer2'>
              <h1>Team SkillBlend Synergy</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla consequuntur rerum ab, eos officia quis nobis tempore totam non maiores ipsam adipisci nesciunt unde alias? Quia cupiditate ducimus labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla consequuntur rerum ab, eos officia quis nobis tempore totam non maiores ipsam adipisci nesciunt unde alias? Quia cupiditate ducimus labore!</p>
            </div>
            <div className='imageContainer2'>
              <img src={group} alt='Teamwork' />
            </div>
          </ItemCenter>
        </SectionContainer>
        <SectionContainer>
          <div className='aboutSection'>
            <div className='title'>
              <h1>About Project</h1>
            </div>
            <div className='textContainer3'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla consequuntur rerum ab, eos officia quis nobis tempore totam non maiores ipsam adipisci nesciunt unde alias? Quia cupiditate ducimus labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla consequuntur rerum ab, eos officia quis nobis tempore totam non maiores ipsam adipisci nesciunt unde alias? Quia cupiditate ducimus labore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla consequuntur rerum ab, eos officia quis nobis tempore totam non maiores ipsam adipisci nesciunt unde alias? Quia cupiditate ducimus labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla consequuntur rerum ab, eos officia quis nobis tempore totam non maiores ipsam adipisci nesciunt unde alias? Quia cupiditate ducimus labore!</p>
            </div>
          </div>
        </SectionContainer>
        <Footer>
          <div>
            <p>Copyright © 2023 by Dashlab.ai | All Rights Reserved.</p>
          </div>
          <div className='iconTop'>
            <a href='#home'>
              <FontAwesomeIcon icon={faArrowUp} size={isSmallScreen ? 'xs' : null} />
            </a>
          </div>
        </Footer>
      </div>
    </>
  )
}

export default Home