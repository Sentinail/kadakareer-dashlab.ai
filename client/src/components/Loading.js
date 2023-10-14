import React, { useState } from "react";
import { LoadingStyles } from "../styled-components/LoadingStyles";
import { useTheme } from "../contexts/themeContext";
import LoadingSpinner from "./LoadingSpinner";

const Loading = () => {
    const { primaryColor, secondaryColor, tertiaryColor } = useTheme()

	return (
		<>
			<LoadingStyles $primaryColor={primaryColor} $tertiaryColor={tertiaryColor}>
                <div className="background">

                </div>
                <div className="content">
                    <LoadingSpinner></LoadingSpinner>
                    <h1> Extracting Documents... </h1>
                </div>
            </LoadingStyles>
		</>
	);
};

export default Loading;
