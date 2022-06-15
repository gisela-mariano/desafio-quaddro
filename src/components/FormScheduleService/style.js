import styled from "styled-components";


const DivSyleFormAside = styled.div`

  width: 100%;
  height: 100%;

  form{
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    div.cont-date{
      display: flex;
      justify-content: space-between;

      input{
        width: 135px;
      }
    }

    div.cont-buttons{
      width: 100%;

      display: flex;

      button{
        width: 100px;
        height: 32px;

        :nth-child(1){
          margin-right: 20px;

          flex-grow: 1;
        }
      }
    }
  }
`;


export default DivSyleFormAside;