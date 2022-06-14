import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { listService, orderByCreationTime, orderByStartTime, orderEndTime } from '../../store/modules/listService/actions';

import DivStyleScheduledServices from './style';

import CardService from '../CardService';
import ModalEdit from '../ModalEdit';


const ScheduledService = () => {
  const dispatch = useDispatch();

  const services     = useSelector((state) => state.services);
  const servicesList = useSelector((state) => state.listServices);

  const [open, setOpen] = useState(false);
  const [dataService, setDataService] = useState({});
  const [serviceId, setServiceId] = useState('');
  const [listOfServices, setListOfServices] = useState(servicesList);


  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const handleClick = (id) => {
    const infoService = services.find((service) => service.id === id);

    setDataService(infoService);
    setServiceId(id);

    handleOpenModal();
  };

  const callbackSortCreationTime = (a, b) => {
    const splitedTimeA = a.creationHour.split(':');
    const splitedTimeB = b.creationHour.split(':');

    const timeA = new Date(`${a.creationDate}T${splitedTimeA[0]}:${splitedTimeA[1]}:00`).getTime();
    const timeB = new Date(`${b.creationDate}T${splitedTimeB[0]}:${splitedTimeB[1]}:00`).getTime();

    return timeA - timeB;
  };

  const callbackSortStartTime = (a, b) => {
    const splitedTimeA = a.startHour !== '00' ? a.startHour.split(':') : ['00', '00'];
    const splitedTimeB = b.startHour !== '00' ? b.startHour.split(':') : ['00', '00'];

    const timeA = new Date(`${a.startDate}T${splitedTimeA[0]}:${splitedTimeA[1]}:00`).getTime();
    const timeB = new Date(`${b.startDate}T${splitedTimeB[0]}:${splitedTimeB[1]}:00`).getTime();

    return timeA - timeB;
  };

  const callbackSortEndTime = (a, b) => {

    const splitedTimeA = a.endHour !== '00' ? a.endHour.split(':') : ['00', '00'];
    const splitedTimeB = b.endHour !== '00' ? b.endHour.split(':') : ['00', '00'];

    const timeA = new Date(`${a.endDate}T${splitedTimeA[0]}:${splitedTimeA[1]}:00`).getTime();
    const timeB = new Date(`${b.endDate}T${splitedTimeB[0]}:${splitedTimeB[1]}:00`).getTime();

    return timeA - timeB;
  };

  const handleOrder = (orderBy) => {

    console.log('services handleOrder', services);

    if (orderBy === 'creationTime') {
      const order = services.sort(callbackSortCreationTime);
      
      dispatch(listService(order));

    } else if (orderBy === 'startTime') {
      const order = services.sort(callbackSortStartTime);
      
      dispatch(listService(order));

    } else if (orderBy === 'endTime') {
      const order = services.sort(callbackSortEndTime);
      
      dispatch(listService(order));
    }

    console.log('listService handleOrder', servicesList);
  };

  useEffect(() => {

    setListOfServices(servicesList)

  })

  useEffect(() => {

    setListOfServices(servicesList)

  }, [servicesList])


  return (
    <>
      <DivStyleScheduledServices>
        <h2>Serviços Agendados</h2>

        <nav>
          <span>Ordenar Por:</span>

          <div className="cont-buttons">
            <button onClick={() => handleOrder('creationTime')}>Horário de Criação</button>
            <button onClick={() => handleOrder('startTime')}>Horário de Início</button>
            <button onClick={() => handleOrder('endTime')}>Horário de Término</button>
          </div>
        </nav>

        <div className="cont-cards">
          {
            services.lenght === 0 && (
              <div className="services-null">
                <p>Você ainda não agendou nenhum serviço.</p>
              </div>
            )
          }

          {
            listOfServices.length > 0 ? 
            listOfServices.map((service, index) => {
              console.log('map', listOfServices)
              return <CardService key={index} service={service} handleClick={handleClick}/>
            })
            : 
            services.map((service, index) => (
              <CardService key={index} service={service} handleClick={handleClick}/>
            ))
          }
        </div>

        <ModalEdit
          open={open}
          handleCloseModal={handleCloseModal}
          dataService={dataService}
          serviceId={serviceId}
        />
      </DivStyleScheduledServices>
    </>
  );
};

export default ScheduledService;
