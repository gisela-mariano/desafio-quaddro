import React, { useEffect, useMemo } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from "react-redux";

import Input from "../Input";
import Button from "../Button";

import { deleteService, editService } from "../../store/modules/userServices/actions";
import DivStyleModal from "./style";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: '80%',
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
};

const ModalEdit = ({open, handleCloseModal, dataService}) => {

  const dispatch = useDispatch();

  const services = useSelector((state) => state.services);

  const formSchema = yup.object().shape({
    title: yup.string().required("Titulo Obrigatório."),
    description: yup.string().required("Descrição Obrigatória."),
    dateScheduled: yup.string().required("Data Obrigatória.").matches(/\d+/, "Data Obrigatória."),
    timeScheduled: yup.string().required("Hora Obrigatória.").matches(/\d+/, "Hora Obrigatória."),
    startDate: yup.string().matches(/\d+|\s*/, "Formato Incorreto."),
    startHour: yup.string().matches(/\d+|\s*/, "Formato Incorreto."),
    endDate: yup.string().matches(/\d+|\s*/, "Formato Incorreto."),
    endHour: yup.string().matches(/\d+|\s*/, "Formato Incorreto."),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: useMemo(() => {
      return dataService;
    }, [dataService])
  });

  useEffect(() => {
    reset(dataService)
  }, [dataService]);


  const handleCloseModalAndCleanInputs = () => {

    reset({
      title: '',
      description: '',
      dateScheduled: '',
      timeScheduled: '',
      startDate: '',
      endDate: '',
      startHour: '',
      endHour: '',
    })

    handleCloseModal()
  }

  const handleDelete = () => {

    const serviceIndex = services.findIndex((service) => service.id === dataService.id);

    services.splice(serviceIndex, 1);

    dispatch(deleteService())
    
    handleCloseModal()
  }


  const onSubmitFunction = (data) => {

    const { title, description, dateScheduled, timeScheduled, startDate, startHour, endDate, endHour} = data;

    const serviceIndex = services.findIndex((service) => service.id === dataService.id);

    services[serviceIndex] = {
      ...dataService,
      title,
      description,
      dateScheduled,
      timeScheduled,
      startDate,
      startHour,
      endDate,
      endHour
    }

    dispatch(editService())

    handleCloseModalAndCleanInputs()
  }


  return (
    <div>
      <Modal
        open={open}
      >

        <Box sx={style}>
          <DivStyleModal>
            <h2>Editar</h2>

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
                type="Text"
                maxLength="186"
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

              <div className="cont-date">
                <Input 
                  label="Data de Início"
                  type="date"
                  register={register}
                  name="startDate"
                  error={errors.startDate && errors.startDate.message}
                />

                <Input 
                  label="Às"
                  type="time"
                  register={register}
                  name="startHour"
                  error={errors.startHour && errors.startHour.message}
                />
              </div>

              <div className="cont-date">
                <Input 
                  label="Data de Término"
                  type="date"
                  register={register}
                  name="endDate"
                  error={errors.endDate && errors.endDate.message}
                />

                <Input 
                  label="Às"
                  type="time"
                  register={register}
                  name="endHour"
                  error={errors.endHour && errors.endHour.message}
                />
              </div>

              <div className="cont-buttons">
                <Button 
                type="reset" 
                onClick={() => handleDelete()}
                colorStyle="stroke-blue">
                  Excluir Agendamento
                </Button>

                <div className="cont-buttons-edit">
                  <Button 
                  type="submit"
                  colorStyle="blue">
                    Editar
                  </Button>

                  <Button 
                  type="reset" 
                  onClick={() => handleCloseModal()}
                  colorStyle="gray">
                    Cancelar
                  </Button>
                </div>

              </div>
            </form>

          </DivStyleModal>
        </Box>

      </Modal>
    </div>
  );
}


export default ModalEdit;