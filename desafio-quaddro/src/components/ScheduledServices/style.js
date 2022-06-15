import styled from "styled-components";


const DivStyleScheduledServices = styled.div`

  width: 100%;
  height: 100%;

  padding: 10px 15px;

  background-color: white;

  border-radius: 20px;

  box-sizing: border-box;

  h2{
    font-size: 1.2rem;

    color: var(--blue-primary);

    text-align: center;
  }

  nav{
    margin: 20px 0 30px;

    span{
      font-size: 0.9rem;

      color: var(--blue-primary);
    }

    div.cont-buttons{
      margin-top: 10px;

      button{
        height: 28px;

        margin-right: 15px;
        padding: 5px 8px;
      }
    }
  }

  div.cont-cards{
    width: 100%;
    height: 400px;

    display: flex;
    flex-wrap: wrap;

    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    ::-webkit-scrollbar-track, ::-webkit-scrollbar-corner {
      background: white;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--blue-primary);
      border-radius: 10px;
    }

    div.services-null{
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      p{
        font-style: italic;

        color: var(--gray-primary);
      }
    }
  }
`;


export default DivStyleScheduledServices;