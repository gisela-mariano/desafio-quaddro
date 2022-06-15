import styled from "styled-components";



const DivStyleModal = styled.div`

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    font-size: 1.5rem;

    color: var(--blue-primary);
  }

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
      display: flex;
      flex-direction: column;

      button{
        height: 30px;
      }

      div.cont-buttons-edit{
        width: 100%;

        margin-top: 10px;

        display: flex;

        button{
          width: 150px;

          :first-child{
            margin-right: 20px;

            flex-grow: 1;
          }
        }
      }

    }
  }
`;


export default DivStyleModal;