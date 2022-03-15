import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const country = `a`;
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then(function (res) {
        console.log(users);
        return res.json();
      })
      .then((users) => setUsers(users));
  }, []);

  console.log(users);
  return <div>{users.length ? users[0].name.common : null}</div>;
}
