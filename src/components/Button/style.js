import styled, { css } from "styled-components";



const ButtonStyle = styled.button`

  color: white;

  border: none;
  border-radius: 20px;

  ${
    (props) => {

      if (props.colorStyle === 'blue') {

        return css`
          background-color: var(--blue-primary);
        `
      } else if (props.colorStyle === 'gray') {

        return css`
          background-color: var(--gray-primary);
        `
      } else if (props.colorStyle === 'stroke-blue') {

        return css`
          background-color: white;
          color: var(--blue-primary);

          border: 1px solid var(--blue-primary);

          :hover{
            background-color: var(--blue-primary);
            color: white;
          }
        `
      } else if (props.colorStyle === 'stroke-gray') {

        return css`
          background-color: white;
          color: black;

          border: 1px solid var(--gray-primary);
          }
        `
      };
    }
  }
`;

export default ButtonStyle;