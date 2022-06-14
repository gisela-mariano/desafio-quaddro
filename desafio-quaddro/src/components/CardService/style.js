import styled from "styled-components";


const DivStyleCard = styled.div`

  width: 100%;
  max-width: 300px;
  height: 400px;

  margin: 0 30px 20px 0;
  padding: 5px 10px;

  background-color: var(--blue-low);

  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  box-sizing: border-box;

  h3{
    font-size: 1.2rem;

    color: var(--blue-primary);
  }

  span.creation-date{
    font-size: 0.9rem;

    color: var(--gray-primary);
  }

  div.cont-datetime{
    width: 100%;

    display: flex;
    justify-content: space-between;

    div.cont-date, div.cont-time{
      /* width: 100%; */

      display: flex;
      flex-direction: column;

      div.stroke{
        height: 15px;

        margin-top: 5px;
        padding: 5px 8px;

        border: 1px solid var(--gray-primary);
        border-radius: 15px;

        display: flex;
        justify-content: center;
      }
    }

    div.cont-date{

      div.stroke{
        width: 85px;
      }
    }

    div.cont-time{

      div.stroke{
        width: 40px;
      }
    }
  }

  div.cont-description{
    align-self: flex-start;

    p{
      max-width: 100%;
      word-break: break-all;

      font-size: 0.9rem;
      line-height: 17px;

      margin-top: 5px;

      color: var(--gray-primary);
    }
  }

  button{
    width: 80px;
    height: 25px;

    background-color: var(--blue-low);
    color: var(--blue-primary);

    border: 1px solid var(--blue-primary);
    border-radius: 15px;

    :hover{
      background-color: var(--blue-primary);
      color: white;
    }
  }
`;


export default DivStyleCard;