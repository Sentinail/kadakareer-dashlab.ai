import React, { useState } from "react";
import { ExtractDocumentPageContainerStyles } from "../styled-components/ExtractAllDocumentTextsStyles";
import ExtractDocumentDescription from "../components/ExtractDocumentDescription";
import ExtractionInputSection from "../components/ExtractionInputSection";
import ExtractionOutputSection from "../components/ExtractionOutputSection";

const sampleResult = {
	status: "Success",
	result: [
		{
			page: 1,
			key_values: [
				["EMPLOYER/COMPANY/RECRUITMENT_AGENCY_(IF_APPLICABLE)", "NONE"]
			],
			tables: [
				{
					table: 1,
					keyValuePairs: [
						["satisfactory_hearing", 1],
						["satisfactory_sight", 1],
						["satisfactory_color_vision?_(when_required)", 1],
						["satisfactory_psychological_test", 1],
					],
				},
				{
					table: 2,
					keyValuePairs: [
						["satisfactory_hearing-2", 1],
						["satisfactory_sight-2", 1],
						["satisfactory_color_vision?_(when_required)-2", 1],
						["satisfactory_psychological_test-2", 1],
					],
				},
			],
		},
		{
			page: 2,
			key_values: [
			],
			tables: [
				{
					table: 1,
					keyValuePairs: [
						["satisfactory_hearing-3", 1],
						["satisfactory_sight-3", 1],
						["satisfactory_color_vision?_(when_required)-3", 1],
						["satisfactory_psychological_test-3", 1],
					],
				},
				{
					table: 2,
					keyValuePairs: [
						["satisfactory_hearing-3", 1],
						["satisfactory_sight-3", 1],
						["satisfactory_color_vision?_(when_required)-3", 1],
						["satisfactory_psychological_test-3", 1],
					],
				},
			],
		}
		
	],
};

const ExtractMAGEFDocument = () => {
	const [result, setResult] = useState(sampleResult);

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
						title={"Extract MAGEF Document Data"}
					>
						This MAGEF Document Extraction Tool empowers you to effortlessly
						extract key-value pairs and table datas from MAGEF document you provide or input.
						to parse text from your own content, this feature makes
						it a breeze. Simply upload your file, and our intelligent system will swiftly scan and extract
						the datas for your convenience.
					</ExtractDocumentDescription>
				</div>
				<div className="extraction_section">
					<ExtractionInputSection
						url={"http://localhost:9000/api/MFOWS-Annex_I-HIVST"}
						setResult={setResult}
					></ExtractionInputSection>
					{result && (
						<ExtractionOutputSection
							result={result}
							handleChange={handleChange}
							type="MAGEF"
						></ExtractionOutputSection>
					)}
				</div>
			</ExtractDocumentPageContainerStyles>
		</>
	);
};

export default ExtractMAGEFDocument;
