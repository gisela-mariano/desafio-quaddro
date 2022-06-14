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

        border: none;
        border-radius: 20px;

        :first-child{

          background-color: white;
          color: var(--blue-primary);

          border: 1px solid var(--blue-primary);
        }
      }

      div.cont-buttons-edit{

        width: 100%;

        margin-top: 10px;

        display: flex;

        button{

          width: 150px;

          :first-child{
            margin-right: 20px;
            
            color: white;
            background-color: var(--blue-primary);

            border: none;

            flex-grow: 1;
          }

          :last-child{

            color: white;
            background-color: var(--gray-primary);
          }
        }
      }

    }
  }
`;


export default DivStyleModal;