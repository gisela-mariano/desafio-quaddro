import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { orderByCreationTime, orderByEndTime, orderByStartTime } from '../../store/modules/listService/actions';

import DivStyleScheduledServices from './style';

import CardService from '../CardService';
import ModalEdit from '../ModalEdit';
import Button from "../Button";


const ScheduledService = () => {
  const dispatch = useDispatch();

  const services     = useSelector((state) => state.services);
  const servicesList = useSelector((state) => state.listServices);

  const [open, setOpen] = useState(false);
  const [dataService, setDataService] = useState({});

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const handleClick = (id) => {
    const infoService = services.find((service) => service.id === id);

    setDataService(infoService);

    handleOpenModal();
  };

  const handleOrder = (orderBy) => {

    if (orderBy === 'creationTime') {
      dispatch(orderByCreationTime(services));

    } else if (orderBy === 'startTime') {
      dispatch(orderByStartTime(services));

    } else if (orderBy === 'endTime') {
      dispatch(orderByEndTime(services));
    }

  };


  return (
    <>
      <DivStyleScheduledServices>
        <h2>Serviços Agendados</h2>

        <nav>
          <span>Ordenar Por:</span>

          <div className="cont-buttons">
            <Button 
            onClick={() => handleOrder('creationTime')}
            colorStyle="stroke-gray">
              Horário de Criação
            </Button>

            <Button 
            onClick={() => handleOrder('startTime')}
            colorStyle="stroke-gray">
              Horário de Início
            </Button>

            <Button 
            onClick={() => handleOrder('endTime')}
            colorStyle="stroke-gray">
              Horário de Término
            </Button>
          </div>
        </nav>

        <div className="cont-cards">

          {
            services.length === 0 ?
            <div className="services-null">
              <p>Você ainda não agendou nenhum serviço.</p>
            </div>
            :
            (
              servicesList.length > 0 ? 
              servicesList.map((service, index) => {
                return <CardService key={index} service={service} handleClick={handleClick}/>
              })
              : 
              services.map((service, index) => (
                <CardService key={index} service={service} handleClick={handleClick}/>
              ))
            )
          }
        </div>

        <ModalEdit
          open={open}
          handleCloseModal={handleCloseModal}
          dataService={dataService}
        />
      </DivStyleScheduledServices>
    </>
  );
};

export default ScheduledService;
