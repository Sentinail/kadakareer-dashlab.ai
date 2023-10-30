import React, { useEffect, useState } from "react";
import { ExtractionInputSectionStyles, Image, ImageInputStyle } from "../styled-components/ExtractionInputSectionStyles";
import Button from "./Button";
import { useTheme } from "../contexts/themeContext";
import FileInput from "./FileInput";
import Loading from "./Loading";
import fetchDataWithPayload from "../utils/fetchDataWithPayload"

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

const ImageInput = ({setFiles, index, ...props}) => {
	const { primaryColor, secondaryColor, tertiaryColor } = useTheme();

	const handleClose = () => {
		setFiles((prev) => {
			const newFiles = [...prev]
			newFiles.splice(index, 1)
			setFiles(newFiles)
		})
	}

	return (
		<>	
			<ImageInputStyle $tertiaryColor={tertiaryColor}> 
				<button className="close_button" onClick={handleClose}> X </button>
				<Image {...props}></Image>
			</ImageInputStyle>
		</>		
	)
}

const ExtractionInputSection = ({ url, setResult }) => {
	const { primaryColor, secondaryColor, tertiaryColor } = useTheme();
	const [files, setFiles] = useState([]);
	const [fileObjectUrls, setFileObjectUrls] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false)

	useEffect(() => {

		if (files) {
			const objectURLs = [];

			const filesArray = Array.from(files);
			filesArray.forEach((element) => {
				const objectURL = URL.createObjectURL(element);
				objectURLs.push(objectURL);
			});

			setFileObjectUrls(objectURLs);
		} else {
			setFileObjectUrls([]);
		}
	}, [files]);

	const handleSubmit = () => {
		if (files && files.length > 0) {
			const formData = new FormData();

			files.forEach((file) => {
				formData.append("document", file);
			});

			setIsLoading(true)

			fetchDataWithPayload({
				url: url,
				method: "post",
				payload: formData,
			})
				.then((data) => {
					console.log(data);
          			setResult(data)
					  setIsLoading(false)
				})
				.catch((err) => {
					console.log(err);
					setIsLoading(false)
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
						fileObjectUrls.map((objectUrl, index) => {
							return (
								<ImageInput 
									key={index}
									className="input_image" 
									src={objectUrl}
									alt="input"
									index={index}
									setFiles={setFiles}
									>
								</ImageInput>
							);
						})}
				</div>
				{ isLoading && <Loading></Loading> }
			</ExtractionInputSectionStyles>
		</>
	);
};

export default ExtractionInputSection;
