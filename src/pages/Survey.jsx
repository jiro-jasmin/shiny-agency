import { Link, useParams } from 'react-router-dom';

export default function Survey() {
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber);
    const prevQuestionNumber = questionNumberInt - 1;
    const nextQuestionNumber = questionNumberInt + 1;

    return (
        <div>
            <h1>Survey 🧮</h1>
            <h2>Question {questionNumber}</h2>
            <ul>
                {questionNumberInt > 1 && (
                    <li>
                        <Link to={`/survey/${prevQuestionNumber}`}>Back</Link>
                    </li>
                )}
                <li>
                    {questionNumberInt === 10 ? (
                        <Link to="/results">Results</Link>
                    ) : (
                        <Link to={`/survey/${nextQuestionNumber}`}>Next</Link>
                    )}
                </li>
            </ul>
        </div>
    );
}
