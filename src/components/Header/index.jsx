import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import DarkLogo from '../../assets/dark-logo.png';

const NavContainer = styled.nav`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Comfortaa', 'Trebuchet MS', cursive;
`;

const StyledNavLink = styled(NavLink)`
    padding: 15px;
    margin: 5px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    &.active {
        color: black;
    }
    ${(props) =>
        props.$isFullLink &&
        `color: white; 
        border-radius: 30px; 
        background-color: ${colors.primary};
        padding: 10px 30px;
        margin-right: 0px;
    `}
`;

export default function Header() {
    return (
        <NavContainer>
            <NavLink to={'/'}>
                <img src={DarkLogo} height={50} alt="Shiny logo" />
            </NavLink>
            <div>
                <StyledNavLink
                    to={'/'}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    Home
                </StyledNavLink>
                <StyledNavLink
                    to={'/freelancers'}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    Profiles
                </StyledNavLink>
                <StyledNavLink
                    to={'/survey/1'}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    $isFullLink
                >
                    Take the survey
                </StyledNavLink>
            </div>
        </NavContainer>
    );
}
