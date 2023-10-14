import React, { useEffect, useState } from "react";
import { ExtractionInputSectionStyles, Image, ImageInputStyle } from "../styled-components/ExtractionInputSectionStyles";
import Button from "./Button";
import { useTheme } from "../contexts/themeContext";
import FileInput from "./FileInput";
import fetchDataWithPayload from "../utils/fetchDataWithPayload";
import Loading from "./Loading";

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
		const objectURLs = [];

		const filesArray = Array.from(files);
		filesArray.forEach((element) => {
			const objectURL = URL.createObjectURL(element);
			objectURLs.push(objectURL);
		});

		setFileObjectUrls(objectURLs);
		console.log(objectURLs)
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
