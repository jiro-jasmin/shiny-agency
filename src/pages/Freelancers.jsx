import DefaultPicture from '../assets/profile.png';
import Card from '../components/Card';

const freelancerProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Frontend developer',
        picture: DefaultPicture,
    },
    {
        name: 'Jean Bug',
        jobTitle: 'Fullstack Developer',
        picture: DefaultPicture,
    },
];

export default function Freelancers() {
    return (
        <>
            <h1>Freelancers 👩‍💻👨‍💻👩‍💻</h1>
            {freelancerProfiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
        </>
    );
}
