import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { BiSearch } from "react-icons/bi";
import logo from "../../images/logo.svg";
import DivGeralStyle from "./style";

import FormScheduleService from "../FormScheduleService";
import ScheduledService from "../ScheduledServices";

import { listService } from "../../store/modules/listService/actions";


const Dashboard = () => {

  const services = useSelector((state) => state.services);

  const dispatch = useDispatch();

  const handleLogout = () => {

    localStorage.removeItem('dataServices')

    document.location.reload()
  }

  // const handleSearch = (search) => {

  //   const searchedService = services.filter((service) => service.title.toLowerCase().includes(search.toLowerCase()));

  //   console.log(searchedService);

  //   dispatch(filteredServices(searchedService))
  // }

  const handleSearch = (search) => {
    
    const searchedService = services.filter((service) =>
      service.title.toLowerCase().includes(search.toLowerCase())
    );

    dispatch(listService(searchedService))
  };


  return (

    <DivGeralStyle>
      <header>
        <div className="cont-header">
          <img src={logo} alt="Logo" />

          <div className="cont-search-and-logout">
            <div className="cont-search">
              <BiSearch/>
  
              <input type="text" placeholder="Pesquisar" onChange={(event) => handleSearch(event.target.value)}/>
            </div>

            <button onClick={() => handleLogout()}>Sair</button>
          </div>

        </div>
      </header>

      <main>
        <aside>
          <h2>Agendar Serviços</h2>
          <FormScheduleService/>
        </aside>

        <section>
          <ScheduledService/>
        </section>
      </main>
    </DivGeralStyle>
  );
};

export default Dashboard;