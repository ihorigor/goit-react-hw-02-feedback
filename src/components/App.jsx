import user from '../asssets/user.json';
import { Profile } from './Profile/Profile';

import data from '../asssets/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from '../asssets/friends.json';
import { FriendList } from './FriendList/FriendList';

import transactions from '../asssets/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Box } from './Box/Box';

export const App = () => {
  return (
    <Box bg="background" pt="4" color="text" mx="auto" width="50%" as="main">
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
    </Box>
  );
};
