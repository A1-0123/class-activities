import "./App.css";
import { useState, useEffect } from "react";
import About from "./page/About";

function App() {
  // const [homePageData, setHomePageData] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:1337/api/home-pages")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setHomePageData(data.data);
    //     // console.log(data.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }, []);

  return <>
    <About />
    {/* {
      homePageData.map((item, index) => {
        const { Title, Description, Year } = item.attributes;
        return <div key={index}>
          <h1>{Title}</h1>
          <p>{Description}</p>
          <p>{Year}</p>
        </div>
      })
    } */}
  </>;
}

export default App;
