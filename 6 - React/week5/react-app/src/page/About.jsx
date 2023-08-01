import { useState, useEffect } from "react";

const About = () => {
  const [aboutPageData, setAboutPageData] = useState(null);
  // const [hero, setHero] = useState(null);
  // const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/abouts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        const response = data.data[0];
        const { aboutData } = response.attributes;
        setAboutPageData(aboutData);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      {aboutPageData && (
        <div>
            <img src="http://localhost:1337/uploads/Screen_Shot_2023_06_15_at_11_51_02_PM_8d3734b850.png" alt="" />
          <h1>{aboutPageData.title}</h1>
          <p>{aboutPageData.description}</p>
        </div>
      )}

      {aboutPageData && aboutPageData.data && (
        <div>
          {
            <>
              <p>Founded: {aboutPageData.data.founded}</p>
              <p>location: {aboutPageData.data.location}</p>
              <p>teamSize: {aboutPageData.data.teamSize}</p>
              <p>industry: {aboutPageData.data.industry}</p>
              <p>specialization: {aboutPageData.data.specialization}</p>

              <h3>Achievements</h3>
              {aboutPageData.data.achievements.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}

            </>
          }
        </div>
      )}
    </div>
  );
};

export default About;
