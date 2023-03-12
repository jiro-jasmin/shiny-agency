import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import NotFoundImage from '../../assets/404.svg';

const ErrorWrapper = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    background-color: ${colors.background};
    align-items: center;
`;

const ErrorTitle = styled.h1`
    font-weight: 300;
`;

const ErrorSubtitle = styled.h2`
    font-weight: 300;
    color: ${colors.secondary};
`;

const Illustration = styled.img`
    max-width: 600px;
`;

export default function Error() {
    const error = useRouteError();
    console.error(error);
    console.log(error.statusText || error.message);

    return (
        <ErrorWrapper>
            <ErrorTitle>Oops...</ErrorTitle>
            <Illustration src={NotFoundImage} />
            <ErrorSubtitle>
                It looks like the page you're after doesn't exist
            </ErrorSubtitle>
        </ErrorWrapper>
    );
}
