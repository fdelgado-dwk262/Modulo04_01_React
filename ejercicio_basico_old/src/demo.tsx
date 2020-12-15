import React from "react";

export const MyComponent = () => {
  const [filter, setFilter] = React.useState("");
  const [userCollection] = React.useState([
    { name: "maria" },
    { name: "paco" },
    { name: "pepe" },
    { name: "penelope" },
    { name: "juan" }
  ]);

  const [filterUserCollection , setFilterUserCollection] = React.useState(
    userCollection
  );

  React.useEffect(() => {
    const filteredCollection = filter
      ? userCollection.filter(user => user.name.includes(filter))
      : userCollection;
    setFilterUserCollection(filteredCollection)
  }, [filter]);

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {filterUserCollection.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
