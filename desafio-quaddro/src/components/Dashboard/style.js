import styled from "styled-components";


const DivGeralStyle = styled.div`

  width: 100%;
  height: 100%;

  header{
    width: 100%;
    height: 90px;

    display: flex;
    justify-content: center;

    box-sizing: border-box;

    div.cont-header{
      width: 90%;

      display: flex;
      justify-content: space-between;
      align-items: center;

      box-sizing: border-box;

      div.cont-search-and-logout{
        width: 100%;
        max-width: 300px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        div.cont-search{
          width: 100%;
          max-width: 200px;
          height: 25px;

          padding: 5px;

          border: 1px solid var(--blue-primary);
          border-radius: 20px;

          display: flex;
          align-items: center;

          svg{
            margin-right: 3px;

            color: var(--gray-primary);
          }

          input{
            border: none;

            ::placeholder{
              color: var(--gray-primary);
            }
          }
        }

        button{
          width: 70px;
          height: 37px;

          background-color: white;
          color: var(--blue-primary);

          border: 1px solid var(--blue-primary);
          border-radius: 20px;

          :hover{
            background-color: var(--blue-primary);
            color: white;
          }
        }
      }

    }
  }

  main{
    width: 100%;

    padding: 50px 0 30px;

    background-color: var(--blue-low);

    display: flex;
    justify-content: space-evenly;

    box-sizing: border-box;

    aside{
      width: 350px;
      height: 400px;

      padding: 10px 15px;

      background-color: white;

      border-radius: 20px;

      display: flex;
      align-items: center;
      flex-direction: column;

      box-sizing: border-box;

      h2{
        font-size: 1.2rem;

        color: var(--blue-primary);
      }
    }

    section{
      width: 100%;
      max-width: 1050px;
      height: 100%;
      max-height: 550px;

      box-sizing: border-box;
    }

  }
`;


export default DivGeralStyle;