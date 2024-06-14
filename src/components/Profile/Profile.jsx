export default function Profile({
    user: { username, tag, location, avatar, stats },
}) {
    return (
        <div>
            <img src={avatar} alt={username} />
            <p>Name: {username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
            <ul>
                {Object.keys(stats).map((key) => (
                    <li key={key}>
                        {key}: {stats[key]}
                    </li>
            ))}
            </ul>
        </div>
    );
}