import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import Input from "../Input";
import Button from "../Button";

import DivSyleFormAside from "./style";

import { addService } from "../../store/modules/userServices/actions";


const FormScheduleService = () => {

  const formSchema = yup.object().shape({
    title: yup.string().required("Título Obrigatório."),
    description: yup.string().required("Descrição Obrigatória."),
    dateScheduled: yup.string().required("Data Obrigatória."),
    timeScheduled: yup.string().required("Hora Obrigatória.")
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(formSchema)
  });

  const dispatch = useDispatch();

  const onSubmitFunction = (data) => {

    const getCurrentDate = new Date().toISOString();

    const separateDateAndTime = getCurrentDate.split('T');

    const gettingTime = separateDateAndTime[1].split(':')

    const currentCorrectTime = parseInt(gettingTime[0]) - 3;

    const creationDate = separateDateAndTime[0];
    const creationHour = `${currentCorrectTime < 10 ? `0${currentCorrectTime}` : currentCorrectTime}:${gettingTime[1]}`;

    const startDate = '00'
    const endDate = '00'

    const startHour = '00'
    const endHour = '00'

    const newService = {
      ...data,
      creationDate,
      creationHour,
      startDate,
      endDate,
      startHour,
      endHour,
      id: uuidv4()
    }

    dispatch(addService(newService))

    reset({
      title: '',
      description: '',
      dateScheduled: '',
      timeScheduled: ''
    })
  }

  return (
    <>
      <DivSyleFormAside>

        <form onSubmit={handleSubmit(onSubmitFunction)}>

          <Input 
            label="Título"
            placeholder="Ex: Fazer Unha"
            type="Text"
            maxLength="16"
            register={register}
            name="title"
            error={errors.title && errors.title.message}
          />

          <Input 
            label="Descrição"
            placeholder="Ex: Quero pintar a unha de vermelho."
            type="text"
            maxLength="186"
            className="description"
            register={register}
            name="description"
            error={errors.description && errors.description.message}
          />

          <div className="cont-date">
            <Input 
              label="Data"
              type="date"
              register={register}
              name="dateScheduled"
              error={errors.dateScheduled && errors.dateScheduled.message}
            />

            <Input 
              label="Hora"
              type="time"
              register={register}
              name="timeScheduled"
              error={errors.timeScheduled && errors.timeScheduled.message}
            />
          </div>

          <div className="cont-buttons">
            <Button 
            type="submit"
            colorStyle="blue">
              Agendar
            </Button>

            <Button 
            type="reset"
            colorStyle="gray">
              Cancelar
            </Button>
          </div>
        </form>

      </DivSyleFormAside>
    </>
  );
};


export default FormScheduleService;