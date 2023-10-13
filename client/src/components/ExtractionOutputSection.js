import React from "react";
import { ExtractedPageBlockStyle, ExtractedWordBlockStyle, ExtractionOutputSectionStyles } from "../styled-components/ExtractionOutputSectionStyles";
import Button from "./Button";
import { useTheme } from "../contexts/themeContext";

const ExtractedWordBlock = ({word}) => {
	const { primaryColor, secondaryColor, tertiaryColor } = useTheme();
	return (
		<>
			<ExtractedWordBlockStyle $tertiaryColor={tertiaryColor}>
				{word}
			</ExtractedWordBlockStyle>
		</>
	)
}

const PageBlock = ({pageNum, words}) => {
	return (
		<>
			<ExtractedPageBlockStyle>
				<h2> Words Extracted On Page: {pageNum}  </h2>
				<div className="results">
					{words.map(word => {
						return <ExtractedWordBlock word={word}></ExtractedWordBlock>
					})}
				</div>
			</ExtractedPageBlockStyle>
		</>
	)
}

const ExtractionOutputSection = ({result}) => {
	const { primaryColor, secondaryColor, tertiaryColor } = useTheme();

	return (
		<>
			<ExtractionOutputSectionStyles $tertiaryColor={tertiaryColor}>
				<div className="output_buttons">
					<Button $tertiaryColor={tertiaryColor}>
						{" "}
						Submit Extraction{" "}
					</Button>
				</div>
				<div className="output_preview">
					{ result && 
						result.result.map(result => {
							return <PageBlock pageNum={result.documentPage} words={result.extractedWord}></PageBlock>
						})
					}
                </div>
			</ExtractionOutputSectionStyles>
		</>
	);
};

export default ExtractionOutputSection;
