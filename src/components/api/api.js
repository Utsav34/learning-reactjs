import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherWidget = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);

        console.log("abcbcbcb", response.data);
      })
      .catch(() => {
        console.error("error throwing");
      });
  }, []);

  return (
    <div>
        {data.map((item) => (
        <div key={item.id}>
          <p>Title: {item.title}</p>
          <p>Body: {item.body}</p>
          <hr />
        </div>
      ))}
      <h6>Data Show</h6>
      {data.id}
    </div>
  );
};

export default WeatherWidget;
