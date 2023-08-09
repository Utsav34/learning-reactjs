import axios from "axios";
import { useEffect, useState } from "react";

const Asynwaitapi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function FetchData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
        console.log("fetch data", response.data)
      } catch (error) {
        console.log("error", error);
      }
    }
    FetchData();
  }, []);

  return (
    <>
    {data.map((item)=>
      <div key={item} className="container">
        <h6>{item.id}</h6>
        <p>{item.userId}</p>
        <span>{item.title}</span>
      </div>
      )}
    </>
  );
};

export default Asynwaitapi;
