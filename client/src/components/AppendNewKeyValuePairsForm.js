import React, { useState } from 'react'
import { AppendNewKeyValuePairsFormContainer } from '../styled-components/AppendNewKeyValuePairsFormStyle'
import Button from './Button'
import { useTheme } from '../contexts/themeContext'

const AppendNewKeyValuePairsForm = ({callback}) => {
  const { tertiaryColor } = useTheme()

  const [ key, setKey ] = useState("")
  const [ value, setValue ] = useState("")

  const handleKeyChange = (e) => {
    setKey(e.target.value)
  } 

  const handleValueChange = (e) => {
    setValue(e.target.value)
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (key.length < 1) {
      alert("Please Input a Key")
      return
    }

    if (value.length < 1) {
      alert("Please Input a Value")
      return
    }

    callback(key, value)
  } 

  return (
    <>
      <AppendNewKeyValuePairsFormContainer onSubmit={handleSubmit}>
        <Button $tertiaryColor={tertiaryColor}> Append New Key-Values </Button>
        <input placeholder='Input New Key' type="text" name="key" id="key" value={key} onChange={handleKeyChange}/>
        <input placeholder='Input New Value' type="text" name="value" id="value" value={value} onChange={handleValueChange}/>
      </AppendNewKeyValuePairsFormContainer>
    </>
  )
}

export default AppendNewKeyValuePairsForm