import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import GlobalStyles from './styled-components/GlobalStyles'
import ThemeContext, { useTheme } from './contexts/themeContext'
import ExtractAllDocumentTexts from './pages/ExtractAllDocumentTexts'

const App = () => {
  const { primaryColor, secondaryColor, tertiaryColor } = useTheme()

  return (
    <>
        <GlobalStyles $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor} />
        <Header></Header>
        <Routes>
          <Route path='/extract_document_texts' element={<ExtractAllDocumentTexts></ExtractAllDocumentTexts>}></Route>
          <Route path='/MFOWS-Annex_G-Psychological_Evaluation_Form' element={<p> Document </p>}></Route>
          <Route path='/MFOWS-Annex_I-HIVST' element={<p> Document </p>}></Route>
          <Route path='/DOH-PEMER-SB' element={<p> Document </p>}></Route>
          <Route path='/DOH-PEMER-LB' element={<p> Document </p>}></Route>
          <Route path='/DOH-PEME-SB' element={<p> Document </p>}></Route>
          <Route path='/DOH-PEME-LB' element={<p> Document </p>}></Route>
        </Routes>
    </>
  )
}

export default App