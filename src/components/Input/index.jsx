import React from "react";

import DivStyleInput from "./style";


const Input = ({label, register, name, error, ...rest}) => {

  return (
    <>
      <DivStyleInput isErrored={!!error}>
        <span>
          {label} {!!error && <span className="error-message"> - {error}</span>}
        </span>

        <input {...register(name)} {...rest} />
      </DivStyleInput>
    </>
  );
};


export default Input;