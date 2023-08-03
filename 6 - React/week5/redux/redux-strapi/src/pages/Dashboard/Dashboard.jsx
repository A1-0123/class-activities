import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CustomTable = styled.table`
    width: 100%;
    thead{
        background-color: #333;
        color: white;
        th{
            text-align: center;
            padding: 1rem;
        }
    }
    tbody{
        tr{
            text-align: left;
            td{
                padding: 1rem;
            }
        }
    }
`;


const Dashboard = () => {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      <CustomTable>
        <thead>
          <th>
            <td>Id</td>
          </th>
          <th>
            <td>Image</td>
          </th>
          <th>
            <td>Title</td>
          </th>
          <th>
            <td>Author</td>
          </th>
          <th>
            <td>Actions</td>
          </th>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id.substring(0,3)}</td>
                <td style={{ textAlign: "center"}}>
                  <img width={100} height={50} src={post.coverImage} alt={post.title} />
                </td>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td style={{ textAlign: "center"}}>
                  <button onClick={() => navigate(`/edit/${post.id}`)}>Edit</button>
                  <button 
                    // TODO: write delete logic
                  >Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </CustomTable>
    </div>
  );
};

export default Dashboard;
