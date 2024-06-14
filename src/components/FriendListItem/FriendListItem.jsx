export default function FriendListItem({
    user: { avatar, name, isOnline },
}) {
    return (
        <div>
            <img src={avatar} alt={avatar} width={'48'} />
            <p>{name}</p>
            <p>{isOnline === true ? "online" : "offline"}</p>
        </div>
    );
}
