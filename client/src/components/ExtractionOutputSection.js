import React, { useEffect, useState } from "react";
import {
	ExtractedPageBlockStyle,
	ExtractedWordBlockStyle,
	ExtractionOutputSectionStyles,
} from "../styled-components/ExtractionOutputSectionStyles";
import Button from "./Button";
import { useTheme } from "../contexts/themeContext";
import axios from "axios";
import Loading from "./Loading";
import AppendNewKeyValuePairsForm from "./AppendNewKeyValuePairsForm";

const ExtractedWordBlock = ({ word }) => {
	const { primaryColor, secondaryColor, tertiaryColor } = useTheme();
	return (
		<>
			<ExtractedWordBlockStyle $tertiaryColor={tertiaryColor}>
				{word}
			</ExtractedWordBlockStyle>
		</>
	);
};

const PageBlock = ({ pageNum, words }) => {
	return (
		<>
			<ExtractedPageBlockStyle>
				<h2> Words Extracted On Page: {pageNum} </h2>
				<form className="results">
					{words.map((word) => {
						return (
							<ExtractedWordBlock
								word={word}
							></ExtractedWordBlock>
						);
					})}
				</form>
			</ExtractedPageBlockStyle>
		</>
	);
};

const ExtractionOutputSection = ({
	handleChange,
	result,
	type = "EXTRACT_WORDS",
}) => {
	const { tertiaryColor } = useTheme();
	const [keyValuePairs, setKeyValuePairs] = useState([]);
	const [tableKeyValuePairs, setTableKeyValuePairs] = useState([]);
	const [inputValues, setInputValues] = useState({});
	const [isSending, setIsSending] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	useEffect(() => {
		const keyValuePairsArray = [];
		const tableKeyValuePairsArray = [];

		if (type !== "EXTRACT_WORDS") {
			result?.result[0]?.page &&
				result?.result?.forEach((page) => {
					keyValuePairsArray.push(page.key_values);

					const tables = page.tables;
					tables?.forEach((table) => {
						tableKeyValuePairsArray.push(table.keyValuePairs);
					});
				});
		}

		const initialInputValues = {};

		keyValuePairsArray.forEach((keyValuePairSet) => {
			keyValuePairSet.forEach((keyValue) => {
				initialInputValues[keyValue[0]] = keyValue[1];
			});
		});

		tableKeyValuePairsArray.forEach((keyValuePairSet) => {
			keyValuePairSet.forEach((keyValue) => {
				initialInputValues[keyValue[0]] = keyValue[1];
			});
		});

		setInputValues(initialInputValues);
		setKeyValuePairs(keyValuePairsArray);
		setTableKeyValuePairs(tableKeyValuePairsArray);
		setIsSubmitted(false)
	}, [result]);

	const handleInputChange = (key, value) => {
		setInputValues({
			...inputValues,
			[key]: value,
		});
	};

	const handleSubmit = async () => {
		setIsSending(true);
		const payload = {
			data: inputValues,
			fileType: `${type}.csv`,
		};

		try {
			const result = await axios.post(
				"http://localhost:9000/api/store_document",
				payload
			);
			console.log(result);
			setIsSending(false);
			setIsSubmitted(true)
		} catch (err) {
			setIsSending(false);
		}
	};

	const handleDownload = async (fileName) => {
		try {
			const response = await axios.post(
				"http://localhost:9000/api/download_zipped_csv",
				{ fileName },
				{ responseType: "blob" }
			);

			if (response.status === 200) {
				const blob = new Blob([response.data]);
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement("a");
				a.href = url;
				a.download = `${fileName}.zip`;
				a.click();
				window.URL.revokeObjectURL(url);
			} else {
				console.error("Error:", response.status, response.statusText);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<>
			<ExtractionOutputSectionStyles $tertiaryColor={tertiaryColor}>
				{isSending && (
					<Loading loadingMessage="Sending Form..."></Loading>
				)}
				<div className="output_buttons">
					<Button
						onClick={handleSubmit}
						$tertiaryColor={tertiaryColor}
					>
						Submit Extraction
					</Button>
					<AppendNewKeyValuePairsForm
						callback={handleChange}
					></AppendNewKeyValuePairsForm>

					{type !== "EXTRACT_WORDS" && isSubmitted && (
						<div
							className="download_button"
							style={{ marginLeft: "auto" }}
						>
							<Button
								onClick={() => {
									handleDownload(`${type}.csv`);
								}}
								$tertiaryColor={tertiaryColor}
							>
								Download CSV
							</Button>
						</div>
					)}
				</div>
				<div className="output_preview">
					{result &&
						(type === "EXTRACT_WORDS" ? (
							result.result.map((result) => (
								<PageBlock
									pageNum={result.documentPage}
									words={result.extractedWord}
								></PageBlock>
							))
						) : (
							<>
								<form className="result_form">
									<div className="key_value_pairs">
										<h1>Key-Value Pairs :</h1>
										{keyValuePairs.map(
											(keyValuePairSet, setIndex) =>
												keyValuePairSet.map(
													(keyValue, index) => (
														<div
															key={index}
															className="key_value_pair"
														>
															<label
																htmlFor={
																	keyValue[0]
																}
															>
																{" "}
																{
																	keyValue[0]
																}{" "}
															</label>
															<input
																type="text"
																value={
																	inputValues[
																		keyValue[0]
																	] || ""
																}
																onChange={(e) =>
																	handleInputChange(
																		keyValue[0],
																		e.target
																			.value
																	)
																}
															/>
														</div>
													)
												)
										)}
									</div>
									<div className="table_values">
										<h1>Table Values :</h1>
										{tableKeyValuePairs.map(
											(keyValuePairSet, setIndex) =>
												keyValuePairSet.map(
													(keyValue, index) => (
														<div
															key={index}
															className="key_value_pair"
														>
															<label
																htmlFor={
																	keyValue[0]
																}
															>
																{" "}
																{
																	keyValue[0]
																}{" "}
															</label>
															<input
																type="text"
																value={
																	inputValues[
																		keyValue[0]
																	] || ""
																}
																onChange={(e) =>
																	handleInputChange(
																		keyValue[0],
																		e.target
																			.value
																	)
																}
															/>
														</div>
													)
												)
										)}
									</div>
								</form>
							</>
						))}
				</div>
			</ExtractionOutputSectionStyles>
		</>
	);
};

export default ExtractionOutputSection;
