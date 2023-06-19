import styled, { createGlobalStyle } from "styled-components";
import BGImage from "../src/assets/music.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran' sans-serif;
    }
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	> p {
		color: #fff;
	}

	.score {
		color: #fff;
		font-size: 2rem;
		margin: 0;
		font-family: Arial, Helvetica, sans-serif;
		padding-bottom: 20px;
		text-transform: uppercase;
	}

	h1 {
		font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
			sans-serif;
		background-image: linear-gradient(
			180deg,
			rgba(2, 0, 36, 1) 0%,
			rgba(11, 210, 0, 0.8911939775910365) 48%,
			rgba(10, 59, 69, 1) 100%
		);
		background-size: 100%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
		filter: drop-shadow(2px 2px #0085a3);
		font-size: 80px;
		text-align: center;
		margin: 25px;
	}

	.start,
	.next {
		cursor: pointer;
		background: linear-gradient(180deg, #fff, #ffcc91);
		border: 2px solid #d38558;
		box-shadow: 0px 10px rgba(0, 0, 0, 0.25);
		height: 40px;
		margin: 20px 0;
		padding: 0 40px;
		text-transform: uppercase;
	}

	.start {
		font-size: 2rem;
		max-width: 200px;
	}
`;
