import ProfileList from '../ProfileList/ProfileList'
import FriendList from '../FriendList/FriendList'
import TransactionHistory from '../TransactionHistory/TransactionHistory'
import userData from '../../../src/userData.json'
import friends from '../../../src/friends.json'
import transactions from '../../../src/transactions.json'
import css from './App.module.css'

export default function App() {
    return (
        <div className={css.container}>
            <ProfileList items={userData} />
            
            <FriendList friends={friends} />

            <TransactionHistory transactions={transactions} />
        </div>
    );
}