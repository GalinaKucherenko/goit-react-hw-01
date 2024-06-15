import css from './Profile.module.css'

export default function Profile({
    user: { username, tag, location, avatar, stats: {followers, views, likes} },
}) {
    return (
        <div className={css.profile}>
            <div className={css.imgDiv}><img src={avatar} alt={username} className={css.image}/></div>
            <p className={css.userName}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.tag}>{location}</p>
            <ul className={css.list}>
               <li className={css.item}>
                    <span className={css.label}>Followers</span>
                    <span className={css.value}>{followers}</span>
                </li>
                <li className={css.item}>
                    <span className={css.label}>Views</span>
                    <span className={css.value}>{views}</span>
                </li>
                <li className={css.item}>
                    <span className={css.label}>Likes</span>
                    <span className={css.value}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}