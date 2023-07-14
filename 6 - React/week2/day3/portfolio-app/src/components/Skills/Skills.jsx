import React from 'react'
import SkillCard from '../SkillCard/SkillCard';
import styled from 'styled-components';

const SkillsContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    #left{
        position: relative;
        width: 349px;
        height: 282px;

        #pattern1{
            bottom: 20px;
            left: 20px;
            width: 112px;
        }
        #pattern2{
            top: 20px;
            left: 10px;
            width: 63px;
        }
        #pattern3{
            bottom: 75px;
            right: 80px;
            width: 63px;
        }
        #pattern4{
            top: 10px;
            right: 20px;
            width: 86px;
        }
        #pattern5{
            bottom: 20px;
            right: 0;
            width: 52px;
        }
    }
    #right{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: flex-end;
        align-items: start;
        max-width: 620px;
    }
`;

const AbsoluteImage = styled.img`
    position: absolute;
`;

const dummyData = [
    {
        title: "Languages",
        values: ["TypeScript", "Lua", "Python", "JavaScript"]
    },
    {
        title: "Databases",
        values: ["SQLite", "PostgreSQL", "Mongo"]
    },
    {
        title: "Tools",
        values: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git"]
    },
    {
        title: "Other",
        values: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"]
    },
    {
        title: "Frameworks",
        values: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"]
    },
];

const Skills = () => {
  return (
    <SkillsContainer>
        <div id='left'>
            <AbsoluteImage id="pattern1" src='./images/pattern1.png' />
            <AbsoluteImage id="pattern2" src='./images/pattern2.png' />
            <AbsoluteImage id="pattern3" src='./images/pattern2.png' />
            <AbsoluteImage id="pattern4" src='./images/pattern4.png' />
            <AbsoluteImage id="pattern5" src='./images/pattern5.png' />
        </div>
        <div id="right">
            {/* <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard /> */}

            {
                dummyData.map((data, index) => {
                    return <SkillCard key={index} title={data.title} values={data.values} />
                })
            }
        </div>
    </SkillsContainer>
  )
}

export default Skills