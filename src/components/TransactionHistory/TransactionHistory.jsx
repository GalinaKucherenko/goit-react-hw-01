import TransactionList from '../TransactionList/TransactionList'

export default function TransactionHistory({ items }) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <TransactionList transaction={item} />
                </li>
            )      
        )}
        </ul>
    )
}