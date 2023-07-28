import 'bootstrap/dist/css/bootstrap.min.css';
import Table  from 'react-bootstrap/Table';
import styled from "styled-components";
import { useEffect, useState } from 'react';
import axios from 'axios';

const StyledContainer = styled.div`
    margin-top: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* border: 2px solid rebeccapurple; */
    width: 100%;
    height: 100%;
`;

const StyledContainerTable = styled.div`

    width: 100%;
    height: 100%;
    padding: 2%;
`;

const Styled = styled.div`
    border-left: 4px solid #E8E8E8;
    border-right: 4px solid #E8E8E8;
`;

const StyledH2 = styled.h2`
  @media (min-width: 1024px) {
      color: #595656;
      font-family:Arial;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
`;

function TableCisterna() {
        const [data, setData] = useState([]);
  
  useEffect(() => {
    async function fetchData() {

       let res= await axios.get("http://44.207.54.43:4000/api/cisterna/getAll");
       //console.log(res.data)
       setData(res.data.data)
       console.log("IMPRIMINENDO :"+data)
       console.log("imprimiendo el data de useState")       
    
    }
    fetchData();
   
  }, []);

    return ( 
    <>
      <StyledContainerTable>
            <Styled>
            <div class="table-responsive-sm">
              <Table className="table">
                <thead className="table-active">
                  <tr>
                  <th scope="col">ID</th>
                    <th scope="col">NIVEL</th>
                    <th scope="col">FECHA</th> 
                  </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                <tr key={item.id}>
                   <td>{item.id}</td>
                  <td>{item.nivel}</td>
                  <td>{item.fecha}</td>
                </tr> 
              ))}
             </tbody> 
              </Table>
              </div>
            </Styled>
          </StyledContainerTable>
    </> 
    );
}

export default TableCisterna;