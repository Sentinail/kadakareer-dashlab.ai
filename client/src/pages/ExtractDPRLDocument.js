import React, { useState } from "react";
import { ExtractDocumentPageContainerStyles } from "../styled-components/ExtractAllDocumentTextsStyles";
import ExtractDocumentDescription from "../components/ExtractDocumentDescription";
import ExtractionInputSection from "../components/ExtractionInputSection";
import ExtractionOutputSection from "../components/ExtractionOutputSection";

const ExtractDPRLDocument = () => {
	const [result, setResult] = useState();

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
						title={"Extract DPRL Document Data"}
					>
						This DPRL Document Extraction Tool empowers you to effortlessly
						extract key-value pairs and table datas from DPRL document you provide or input.
						to parse text from your own content, this feature makes
						it a breeze. Simply upload your file, and our intelligent system will swiftly scan and extract
						the datas for your convenience.
					</ExtractDocumentDescription>
				</div>
				<div className="extraction_section">
					<ExtractionInputSection
						url={"http://localhost:9000/api/DOH-PEMER-LB"}
						setResult={setResult}
					></ExtractionInputSection>
					{result && (
						<ExtractionOutputSection
							result={result}
							type="DPRL"
							handleChange={handleChange}
						></ExtractionOutputSection>
					)}
				</div>
			</ExtractDocumentPageContainerStyles>
		</>
	);
};

export default ExtractDPRLDocument;
