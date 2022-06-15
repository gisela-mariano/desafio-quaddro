import styled, { css } from "styled-components";


const DivStyleInput = styled.div`

  display: flex;
  flex-direction: column;

  span{
    font-size: 0.9rem;

    margin-bottom: 5px;

    color: var(--gray-primary);

    .error-message{
      font-size: 0.7rem;

      color: red;
    }
  }

  input{
    height: 28px;

    padding: 3px 5px;

    border: 1px solid var(--blue-primary);
    border-radius: 20px;

    ::placeholder{
      color: var(--gray-primary);
    }

    ${
      props => props.isErrored && css`
      
        border-color: red;

      `
    }
  }
`;


export default DivStyleInput;