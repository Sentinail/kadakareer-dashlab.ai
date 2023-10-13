import React, { useEffect, useState } from "react";
import { ExtractionInputSectionStyles } from "../styled-components/ExtractionInputSectionStyles";
import Button from "./Button";
import { useTheme } from "../contexts/themeContext";
import FileInput from "./FileInput";
import fetchDataWithPayload from "../utils/fetchDataWithPayload";

const ExtractionInputSection = ({ url, setResult }) => {
	const { primaryColor, secondaryColor, tertiaryColor } = useTheme();
	const [files, setFiles] = useState([]);
	const [fileObjectUrls, setFileObjectUrls] = useState([]);

	useEffect(() => {
		const objectURLs = [];

		const filesArray = Array.from(files);
		filesArray.forEach((element) => {
			const objectURL = URL.createObjectURL(element);
			objectURLs.push(objectURL);
		});

		setFileObjectUrls(objectURLs);
	}, [files]);

	const handleSubmit = () => {
		if (files && files.length > 0) {
			const formData = new FormData();

			files.forEach((file) => {
				formData.append("document", file);
			});

			fetchDataWithPayload({
				url: url,
				method: "post",
				payload: formData,
			})
				.then((data) => {
					console.log(data);
          			setResult(data)
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			alert("Please Input more than 1 file");
		}
	};

	return (
		<>
			<ExtractionInputSectionStyles $tertiaryColor={tertiaryColor}>
				<div className="input_buttons">
					<FileInput setFiles={setFiles}></FileInput>
					<Button
						onClick={handleSubmit}
						$tertiaryColor={tertiaryColor}
					>
						{" "}
						Extract Document/s{" "}
					</Button>
				</div>
				<div className="input_image_preview">
					{fileObjectUrls &&
						fileObjectUrls.length > 0 &&
						fileObjectUrls.map((objectUrl) => {
							return (
								<img
									className="input_image"
									src={objectUrl}
									alt="input"
								></img>
							);
						})}
				</div>
			</ExtractionInputSectionStyles>
		</>
	);
};

export default ExtractionInputSection;
