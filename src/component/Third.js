import { useState } from "react";

const Third = () => {
  const [nameFilter, setNameFilter] = useState("");
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Alex", subscription: { info: { value: 108 } } },
    { id: 3, name: "Mike", subscription: { info: { value: 31 } } },
  ];

  const getTotalSales = () => {
    let total = 0;
    users.forEach((user) => {
      if (user.subscription && user.subscription.info && user.subscription.info.value) {
        total += user.subscription.info.value;
      }
    });
    return total;
  };

  const filteredUsers = users.filter((user) => {
    const nameMatches = nameFilter ? user.name.toLowerCase().includes(nameFilter.toLowerCase()) : true;
    return nameMatches;
  });

  return (
    <div>
      <input
        type="text"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
        placeholder="Filter by name"
      />
      <h2>Total Sales: {getTotalSales()}</h2>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Third;
