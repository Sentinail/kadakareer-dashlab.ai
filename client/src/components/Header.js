import React from "react";
import { StyledHeaderContainer } from "../styled-components/HeaderStyles";
import DropdownButton from "./DropdownButton";
import dashlabSVG from "../assets/DashlabsSVG.svg";
import { useTheme } from "../contexts/themeContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { primaryColor, secondaryColor, tertiaryColor } = useTheme()
	const navigate = useNavigate()

	const handleNavigate = () => {
		navigate("/home")
	}

	return (
		<>
			<StyledHeaderContainer $primaryColor={primaryColor} $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}>
				<div className="dashlabs" onClick={handleNavigate} >
					<img
						src={dashlabSVG}
						alt="Dashlab SVG"
						style={{ width: "200px", height: "100px" }}
					/>
				</div>
				<DropdownButton
					buttonName={"Extract Documents"}
					linkItems={[
						{
							linkItemName: "MAGEF Document",
							linkItemPath:
								"/MFOWS-Annex_G-Psychological_Evaluation_Form",
						},
						{
							linkItemName: "MAI Document",
							linkItemPath: "/MFOWS-Annex_I-HIVST",
						},
						{
							linkItemName: "DPRS Document",
							linkItemPath: "/DOH-PEMER-SB",
						},
						{
							linkItemName: "DPRL Document",
							linkItemPath: "/DOH-PEMER-LB",
						},
						{
							linkItemName: "DPS Document",
							linkItemPath: "/DOH-PEME-SB",
						},
						{
							linkItemName: "DPL Document",
							linkItemPath: "/DOH-PEME-LB",
						},
						{
							linkItemName: "Extract All Document",
							linkItemPath: "/extract_document_texts",
						},
					]}
				></DropdownButton>
			</StyledHeaderContainer>
		</>
	);
};

export default Header;
