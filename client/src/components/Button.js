import React from 'react'
import { ButtonStyleContainer } from '../styled-components/ButtonStyles'

const Button = ({...props}) => {
  return (
    <>
        <ButtonStyleContainer {...props}>
            {props.children}
        </ButtonStyleContainer>
    </>
  )
}

export default Button