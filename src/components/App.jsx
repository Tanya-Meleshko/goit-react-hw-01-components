
import user from '../user.json';
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
import Profile from './task1/Profile/Profile';
import Statistics from './task2/Statistics/Statistics';
import FriendList from './task3/FriendList/FriendList';
import TransactionHistory from './task4/TransactionHistory/TransactionHistory';




export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        padding: 40,
      }}
    >
      
      <h2>Task 1</h2>
      <Profile userInfo={user} />
    
      <h2>Task 2</h2>
      <Statistics title="UPLOAD STATS" stats={data} />
      <Statistics title="Some example stats" stats={data} />
      <Statistics stats={data} />

      <h2>Task 3</h2>
      <FriendList friends={friends}></FriendList>

      <h2>Task 4</h2>
      <TransactionHistory items={transactions}></TransactionHistory>
      
      </div>
  );
};
