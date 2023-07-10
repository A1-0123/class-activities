import "./App.css";
import Nav from "./components/Nav/Nav";
import Card from "./components/Card/Card";
import DescriptionCard from "./components/DescriptionCard/DescriptionCard";
function App() {
  const data = [
    {
      id: 1,
      title: "Example 1",
      description: "Description 1",
      image:
        "https://images.unsplash.com/photo-1688976694262-89230d6133ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        social: {
          instagram: "inst 1",
          facebook: "facebook 1",
          twitter: {
            acc1: "acc1",
            acc2: "acc2"
          }
        }
    },
    {
      id: 2,
      title: "Example 2",
      description: "Description 2",
      image:
        "https://images.unsplash.com/photo-1583264725407-fd4b17d8e09c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60",
        social: {
          instagram: "inst 1",
          facebook: "facebook 1",
          twitter: {
            acc1: "acc1",
            acc2: "acc2"
          }
        }
    },
    {
      id: 3,
      title: "Example 3",
      description: "Description 3",
      image:
        "https://images.unsplash.com/photo-1674997637853-d237a8fc0795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        social: {
          instagram: "inst 1",
          facebook: "facebook 1",
          twitter: {
            acc1: "acc1",
            acc2: "acc2"
          }
        }
    },
    {
      id: 4,
      title: "Example 4",
      description: "Description 4",
      image:
        "https://images.unsplash.com/photo-1687277060706-cc453b974338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      social: {
        instagram: "inst 1",
        facebook: "facebook 1",
        twitter: {
          acc1: "acc1",
          acc2: "acc2"
        }
      }
    },
  ];

  const data2 = [
    {
      id: 1,
      title: "Front-End Developer", 
      icon: "/assets/figma.png", 
      job: "Figma",
      description: "We are looking for an experienced front-end developer to join our team.",
      keyword: "Rust", 
      rangeOfSalary: "$70,000 - $90,000"
    },
    {
      id: 2,
      title: "Data Scientist", 
      icon: "/assets/facebook.png", 
      job: "Facebook",
      description: "We are seeking a data scientist to join our team.",
      keyword: "Python", 
      rangeOfSalary: "$100,000 - $130,000"
    },
    {
      id: 3,
      title: "Technical Writer", 
      icon: "/assets/vercel.png", 
      job: "Vercel",
      description: "We are seeking a technical writer to join our team.",
      keyword: "Documentation", 
      rangeOfSalary: "$60,000 - $80,000"
    }
  ]

//   const increaseButton = () => {
//     console.log("Hello I am increasing!");
//     console.log("1 2 3..");
//   }

//   const decreaseButton = () => {
//     console.log("Hello I am decreasing!");
//  }

  return (
    <div className="App">
      <Nav />
      <div className="card-list">

        {/* <Card 
          title={"Example 1"} 
          description={"Pariatur reprehenderit officia anim id esse elit sit ut in officia ex sint ut."} 
          image={"https://images.unsplash.com/photo-1688976694262-89230d6133ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"}
        />

        <Card 
          title={"Example 2"} 
          description={"Pariatur reprehenderit officia anim id esse elit sit ut in officia ex sint ut."} 
          image={""}
        />

        <Card 
          title={"Example 3"} 
          description={"Pariatur reprehenderit officia anim id esse elit sit ut in officia ex sint ut."} 
          image={""}
        /> */}

        {/* {
          data.map((item) => {
            return <Card
              key={item.id}
              title={item.title} 
              description={item.description}
              image={item.image}
            />
          })
        } */}

        {/* {
          data.map((item) => {
            return <Card
              key={item.id}
              incButton={increaseButton}
              decButton= {decreaseButton}
              {...item}
              // title={item.title}
              // description={item.description}
              // ...
            />
          })
        } */}

        {
          data2.map((item) => {
            return <DescriptionCard key={item.id} {...item} />
          })
        }

      </div>
    </div>
  );
}

export default App;
