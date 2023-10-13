import styled from "styled-components";

export const FileInputStyleContainer = styled.div`
	position: relative;
	display: inline-block;

	.file-input {
        display: none;
	}

	.custom-label {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
		background-color: ${props => {return props.$tertiaryColor}};
		color: #fff;
		border-radius: 5px;
        cursor: pointer;
        font-size: 0.9rem;
        max-height: 40px;
	}
`;
