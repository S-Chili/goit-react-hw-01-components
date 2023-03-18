import Profile from "./components/profile/Profile";
import user from "./user.json"
import Statistics from "./components/statistics/Statistics";
import data from "./data.json"
import FriendList from "./components/friendList/FriendList";
import friends from "./friends.json"
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import transactions from "./transactions.json"

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
    
  );
}

export default App;


