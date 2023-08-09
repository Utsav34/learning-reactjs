// import axios from "axios";
// import { useEffect, useState } from "react";

// const ApiCall = () => {
//   const [datastore, setDatastore] = useState("");

//   useEffect =
//     (() => {
//       axios
//         .get("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => {
//           setDatastore(response.data);
//           console.log("abc", response.data);
//         })
//         .catch(() => {
//           console.log("error showing");
//         });
//     },
//     []);

//   return (
//     <>
//       <div>
//         <span>Show Data</span>
//         {datastore.map((item) => (
//           <div key={item.id}>
//             <h1></h1>
//             <p>{item.title}</p>
//             <h2>{item.body}</h2>
//           </div>
//         // ))}
//       </div>
//     </>
//   );
// };

// export default ApiCall;
