const Second = () => {

    const users = [
      {date: '2020-11-11',grade:10},
      {date: '2020-11-11',grade:4},
      {date: '2020-12-11',grade:7},
      {date: '2020-11-11',grade:4},
      {date: '2020-11-11',grade:8}]
 

  const AverageAge= () => {
    let sum = 0;
    users.forEach(user => {
      sum += user.grade;
    });
    const average = sum / users.length;
    return average;
  };

  return (
    <div>
      <h1>Total Sum of Grades: {AverageAge()}</h1>
    </div>
  );
};
export default Second