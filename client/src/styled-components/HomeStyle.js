import styled from "styled-components";

export const BreakpointProvider = styled.div`
    width: 100%;
    height: auto;
    
	@media (width <= 1200px) {
		.imageContainer img {
			width: 255px !important;
		}
		.imageContainer2 img {
			width: 255px !important;
		}
		.textContainer h1 {
			font-size: 20px;
		}
		.textContainer p {
			margin-top: 12px !important;
			font-size: 14px;
		}

		.textContainer {
			width: 100% !important;
		}

		.textContainer2 {
			width: 100% !important;
		}

		.textContainer2 h1 {
			font-size: 20px;
		}
		.textContainer2 p {
			font-size: 14px;
		}

		.aboutSection .title h1 {
			font-size: 23px;
		}

		.aboutSection .textContainer3 p {
			width: 100% !important;
			font-size: 13px;
			line-height: 25px;
		}
	}

	@media (width <= 992px) {
		.iconTop a {
			padding: 0.5rem !important;
		}
		.iconTop a i {
			font-size: 10px !important;
		}
	}

	@media (width <= 768px) {
		section:first-child div {
			flex-direction: column;
		}

		section:first-child div img {
			width: 100% !important;
			margin-top: -100px;
			margin-bottom: 80px;
			margin-right: 0 !important;
		}

		.imageContainer2 {
			display: none;
		}

		.textContainer2 {
			text-align: center;
		}

		.textContainer2 p {
			margin-right: 0px !important;
		}
	}

	@media (width <= 600px) {
		footer {
			flex-direction: column;
			padding: 1rem 9% !important;
		}

		footer div p {
			font-size: 13px;
		}

		footer .iconTop {
			margin-top: 15px;
		}
	}

	@media (width <= 450px) {
		.dashlabs img {
			width: 150px !important;
		}
	}
`;

export const SectionContainer = styled.section`
	min-height: 100svh;
	padding: 2rem 9% 2rem;
	display: flex;
	justify-content: center;
	align-items: center;

	& .imageContainer img {
		width: 455px;
		margin-right: 50px;
	}

	.textContainer {
		color: #ffffff;
		width: 645px;
	}

	.textContainer p {
		opacity: 60%;
		margin-top: 25px;
	}

	.textContainer2 {
		color: #ffffff;
		width: 645px;
	}

	.textContainer2 p {
		opacity: 60%;
		margin-top: 20px;
		line-height: 2rem;
		margin-right: 40px;
	}

	.imageContainer2 img {
		width: 455px;
	}

	.aboutSection {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #ffffff;
	}

	.aboutSection title h1 {
		text-align: center;
	}

	.textContainer3 p {
		opacity: 60%;
		margin-top: 40px;
		text-align: center;
		width: 920px;
	}
`;

export const ItemCenter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Footer = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	padding: 2rem 9%;
	background-color: #232d45;
	opacity: 93%;
	color: #ffff;

	& div p {
		opacity: 70%;
	}

	.iconTop .scroll_top {
        cursor: pointer;
        border: none;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: 0.8rem;
		background-color: #3e80c2;
		border-radius: 0.3rem;
		transition: 0.5s ease;
		color: #ffffff;
		font-size: 1.4rem;
	}

	.iconTop .scroll_top:hover {
		box-shadow: 0 0 1rem #4893df;
	}
`;
