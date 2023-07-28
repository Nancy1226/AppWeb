import styled from 'styled-components';
import agua from '../../assets/Agua.svg';

const StyledH1 = styled.h1`
        font-size: 40px;
        margin: 0 auto;
        z-index: 1000;
        color: #fff;
`; 

const ContainerCirculo = styled.div`
    position: relative;
    width: 276px;
    height: 276px;
    border-radius: 50%;
    background-color: #006ECE;
    z-index: 1;

    .circulo_v2{
        position: absolute;
        bottom: 0;
        width: 275px; 
        height: 138px; 
        background: #71ACDF;
        transform: rotate(180deg);
        border-radius: 1010px 1010px 0 0;
        z-index: 3;
    }
    .porcentaje{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        margin: 0 auto;
        z-index: 1000;
        color: #fff;
    }
    .agua{
        position: absolute;
        top: 111px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }`; 


    
function CirculoChart({number}) {
      return (
          <>
            <ContainerCirculo>
                <div className='porcentaje'>
                    <h1>{number}</h1>
                </div>
                <div className='circulo_v2'>
                     
                </div>
                <img className='agua' src={agua} />
                
            </ContainerCirculo>
        </>
      )
    }

    export default CirculoChart;