import axios from "axios";
import { useEffect, useState } from "react";

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
        const filterData = response.data.map((item) => item.id);
        console.log("FilteredData", filterData);
        // console.log("check", response.data);
      })
      .catch(() => {
        console.log("throwing error");
      });
  });
  return (
    <>
      <div className="d-flex">
        {data.map((item) => (
          <div key={item.id} className=" container">
            <div className="content">
              <h6>{item.title}</h6>
              <span>{item.id}</span>
              <p>{item.userId}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Api;
