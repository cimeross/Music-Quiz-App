import styled from "styled-components";

export const Wrapper = styled.div`
	max-width: 1100px;
	background: #ebfeff;
	border-radius: 10px;
	border: 2px solid #0085a3;
	padding: 20px;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
	text-align: center;

	p {
		font: 1rem;
	}

	.number,
	.question {
		font-family: Arial, Helvetica, sans-serif;
		font-weight: 700;
	}
`;

type ButtonWrapperProps = {
	correct: boolean;
	userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
	transition: all 0.3s ease;
	:hover {
		opacity: 0.8;
	}

	button {
		cursor: pointer;
		user-select: none;
		font-size: 1rem;
		width: 100%;
		height: 40px;
		margin: 5px 0;
		background: ${({ correct, userClicked }) =>
			correct
				? "#66bb13"
				: !correct && userClicked
				? "#e70000"
				: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(10,59,69,1) 100%);"};
		border: 3px solid #fff;
		box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		color: #fff;
		text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
	}
`;
