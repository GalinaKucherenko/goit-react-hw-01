import Profile from '../Profile/Profile'

export default function ProfileList({items}) {
    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>
                    <Profile user={item} />
                </div>
            )      
        )}
        </div>
    )
}