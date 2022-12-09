import React, { useState, useEffect } from "react";
import { apiUrl } from "../services/commonServices";

const url = apiUrl;

function RandomUser(params) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const data = await response.json();
      const results = data.results[0];
      setName(results.name);
      setEmail(results.email);
    }
    getData();
  }, []);

  return (
    <>
      <div>
        Name : {name.title} {name.first} {name.last}
      </div>
      <div>Email : {email}</div>
      <button onClick={() => window.location.reload(false)}>Refresh</button>
    </>
  );
}
export default RandomUser;
