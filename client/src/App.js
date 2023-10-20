import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import GlobalStyles from './styled-components/GlobalStyles'
import ThemeContext, { useTheme } from './contexts/themeContext'
import ExtractAllDocumentTexts from './pages/ExtractAllDocumentTexts'
import Home from './pages/Home'
import ExtractDPLDocument from './pages/ExtractDPLDocument'
import ExtractDPSDocument from './pages/ExtractDPSDocument'
import ExtractMAGEFDocument from './pages/ExtractMAGEFDocument'

const App = () => {
  const { primaryColor, secondaryColor, tertiaryColor } = useTheme()

  return (
    <>
        <GlobalStyles $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor} />
        <Header></Header>
        <Routes>
          <Route path='/' element={<Navigate to={"/home"}></Navigate>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/extract_document_texts' element={<ExtractAllDocumentTexts></ExtractAllDocumentTexts>}></Route>
          <Route path='/MFOWS-Annex_G-Psychological_Evaluation_Form' element={<ExtractMAGEFDocument></ExtractMAGEFDocument>}></Route>
          <Route path='/MFOWS-Annex_I-HIVST' element={<p> Document </p>}></Route>
          <Route path='/DOH-PEMER-SB' element={<p> Document </p>}></Route>
          <Route path='/DOH-PEMER-LB' element={<p> Document </p>}></Route>
          <Route path='/DOH-PEME-SB' element={<ExtractDPSDocument></ExtractDPSDocument>}></Route>
          <Route path='/DOH-PEME-LB' element={<ExtractDPLDocument></ExtractDPLDocument>}></Route>
        </Routes>
    </>
  )
}

export default App