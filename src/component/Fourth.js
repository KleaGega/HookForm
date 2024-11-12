const Fourth = () => {
  const users = [
    { id: 1, fName: 'Sam', lName: 'Blue' },
    { id: 2, fName: 'Alex', lName: 'Yellow' },
    { id: 3, fName: 'Emanuel', lName: 'Red' }
  ];

  const getIdentity = () => {
    return users.map((user) => {
      const fullName = `${user.fName} ${user.lName}`.toUpperCase();
      return fullName;
    });
  };

  return (
    <div>
      <h1>{getIdentity().join(', ')}</h1>
    </div>
  );
};

export default Fourth;
