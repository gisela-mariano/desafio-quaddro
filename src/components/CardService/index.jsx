import React from "react";

import DivStyleCard from "./style";

import Button from "../Button";


const CardService = ({service, handleClick}) => {

  const { title, description, dateScheduled, timeScheduled, creationDate, creationHour, startDate, endDate, startHour, endHour, id } = service;

  const splitedScheduledDate = dateScheduled.split('-');
  const formattedScheduledDate = `${splitedScheduledDate[2]}/${splitedScheduledDate[1]}/${splitedScheduledDate[0]}`;

  const splitedCreationDate = creationDate.split('-');
  const formattedCreationDate = `${splitedCreationDate[2]}/${splitedCreationDate[1]}/${splitedCreationDate[0]}`;

  const gettingStartDate = () => {

    if(startDate !== '00' && startDate !== ''){

      const splitedDate = startDate.split('-');
  
      return `${splitedDate[2]}/${splitedDate[1]}/${splitedDate[0]}`;

    } else{

      return '00'
    }
  }

  const gettingEndDate = () => {

    if(endDate !== '00' && endDate !== ''){

      const splitedDate = endDate.split('-');
  
      return `${splitedDate[2]}/${splitedDate[1]}/${splitedDate[0]}`;

    } else{
      return '00'
    }
  }
  


  return (
    <DivStyleCard>
      <h3>{title}</h3>

      <span className="creation-date">Criado em {formattedCreationDate} às {creationHour}</span>

      <div className="cont-datetime">
        <div className="cont-date">
          <span>Quando</span>

          <div className="stroke">
            <span>{formattedScheduledDate}</span>
          </div>
        </div>

        <div className="cont-time">
          <span>Às</span>

          <div className="stroke">
            <span>{timeScheduled}</span>
          </div>
        </div>
      </div>

      <div className="cont-description">
        <span>Descrição</span>

        <p>{description}</p>
      </div>

      <div className="cont-datetime">
        <div className="cont-date">
          <span>Início</span>

          <div className="stroke">
            <span>{gettingStartDate() === '00' ? '--' : gettingStartDate()}</span>
          </div>
        </div>

        <div className="cont-time">
          <span>Às</span>

          <div className="stroke">
            <span>{startHour === '00' ? '--' : startHour}</span>
          </div>
        </div>
      </div>

      <div className="cont-datetime">
        <div className="cont-date">
          <span>Término</span>

          <div className="stroke">
            <span>{gettingEndDate() === '00' ? '--' : gettingEndDate()}</span>
          </div>
        </div>

        <div className="cont-time">
          <span>Às</span>

          <div className="stroke">
            <span>{endHour === '00' ? '--' : endHour}</span>
          </div>
        </div>
      </div>

      <Button 
      onClick={() => handleClick(id)}
      colorStyle='stroke-blue'>
        Editar
      </Button>

    </DivStyleCard>
  )
};


export default CardService;