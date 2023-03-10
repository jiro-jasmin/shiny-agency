import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <nav>
            <NavLink
                to={'/'}
                className={({ isActive, isPending }) =>
                    isActive ? 'active' : isPending ? 'pending' : ''
                }
            >
                Home
            </NavLink>
            <NavLink
                to={'/survey/1'}
                className={({ isActive, isPending }) =>
                    isActive ? 'active' : isPending ? 'pending' : ''
                }
            >
                Survey
            </NavLink>
            <NavLink
                to={'/freelancers'}
                className={({ isActive, isPending }) =>
                    isActive ? 'active' : isPending ? 'pending' : ''
                }
            >
                Profiles
            </NavLink>
        </nav>
    );
}
