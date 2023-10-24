import React, { useState } from "react";
import { ExtractDocumentPageContainerStyles } from "../styled-components/ExtractAllDocumentTextsStyles";
import ExtractDocumentDescription from "../components/ExtractDocumentDescription";
import ExtractionInputSection from "../components/ExtractionInputSection";
import ExtractionOutputSection from "../components/ExtractionOutputSection";

// const sampleResult = {
// 	result: [
// 		{
// 			documentPage: 1,
// 			extractedWord: ["Hello-1", "World-1", "Hi-1", "Wilson-1", "LoremIpsumDoret", "LoremIpsumDoret", "LoremIpsumDoret"]
// 		},
// 		{
// 			documentPage: 2,
// 			extractedWord: ["Hello-2", "World-2", "Hi-2", "Wilson-2"]
// 		}
// 	]
// }

const ExtractAllDocumentTexts = () => {
    const [ result, setResult ] = useState()

	const handleChange = (key, value) => {
		setResult((prevResult) => {
			const updatedResult = { ...prevResult };

			const elementIndex = updatedResult.result.findIndex(
				(element) => element.page === 1
			);

			if (elementIndex !== -1) {
				updatedResult.result[elementIndex].key_values = [
					[key, value],
					...updatedResult.result[elementIndex].key_values,
				];

				return updatedResult;
			}

			return prevResult;
		});
	};

	return (
		<>
			<ExtractDocumentPageContainerStyles>
				<div className="hero_section">
					<ExtractDocumentDescription
						title={"Extract All Document Texts"}
					>
						Our Word Extraction Tool empowers you to effortlessly extract 
						words from any document you provide or input. Whether you have a 
						text document, a PDF, or simply want to parse text from your own 
						content, this feature makes it a breeze. Simply upload your file or 
						paste the text, and our intelligent system will swiftly scan and extract 
						the words for your convenience.
					</ExtractDocumentDescription>
				</div>
				<div className="extraction_section">
					<ExtractionInputSection
						url={"http://localhost:9000/api/extract_document_texts"}
                        setResult={setResult}
						handleChange={handleChange}
					></ExtractionInputSection>
					{result && 
						<ExtractionOutputSection result={result}>

						</ExtractionOutputSection>
					}
				</div>
			</ExtractDocumentPageContainerStyles>
		</>
	);
};

export default ExtractAllDocumentTexts;
