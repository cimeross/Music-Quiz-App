import { AnswerObject } from "../App";

type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	questionNumb: number;
	totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNumb,
	totalQuestions,
}) => {
	return (
		<div>
			<p className="number">
				Question: {questionNumb} / {totalQuestions}
			</p>
			<p dangerouslySetInnerHTML={{ __html: question }}></p>
			<div>
				{answers.map((answer) => (
					<div key={answer}>
						<button
							disabled={userAnswer ? true : false}
							value={answer}
							onClick={callback}
						>
							<span dangerouslySetInnerHTML={{ __html: answer }}></span>
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default QuestionCard;
