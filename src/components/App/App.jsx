import ProfileList from '../ProfileList/ProfileList'
import FriendList from '../FriendList/FriendList'
import TransactionHistory from '../TransactionHistory/TransactionHistory'
import userData from '../../../src/userData.json'
import friends from '../../../src/friends.json'
import transactions from '../../../src/transactions.json'

export default function App() {
    return (
        <div>
            <ProfileList items={userData} />
            
            <FriendList friends={friends} />

            <TransactionHistory items={transactions} />
        </div>
    );
}