import React from "react";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Counter from "./components/Counter/Couter";
function App() {
  const dummyData = [
    {
      id: "1",
      image: "https://dummyimage.com/400x400",
      keywords: ["dummy", "data", "example"],
      title: "Dummy Data Example 1",
      description: "This is the first dummy data entry.",
    },
    {
      id: "2",
      image: "https://dummyimage.com/400x400",
      keywords: ["dummy", "data", "sample"],
      title: "Dummy Data Sample 1",
      description: "This is the second dummy data entry.",
      url: "https://www.sample.com"
    },
    {
      id: "3",
      image: "https://dummyimage.com/400x400",
      keywords: ["dummy", "test", "example"],
      title: "Dummy Data Example 2",
      description: "This is the third dummy data entry.",
    },
    {
      id: "4",
      image: "https://dummyimage.com/400x400",
      keywords: ["dummy", "test", "sample"],
      title: "Dummy Data Sample 2",
      description: "This is the fourth dummy data entry.",
      url: "https://www.sample2.com"
    }
  ];
  
  return <div>
    {
      dummyData.map((item) => {
        // return <ProjectCard {...item} />

        // return <ProjectCard 
        //   id={item.id} 
        //   image={item.image} 
        //   keywords={item.keywords} 
        //   title={item.title} 
        //   description={item.description} 
        //   url={item.url}  
        // />

        // return <ProjectCard 
        //   title1={item.title}
        //   description={item.description}
        // />
      })
    }

    <Counter />
  </div>;
}

export default App;