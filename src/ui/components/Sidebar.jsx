import React, { useContext } from 'react'
import '../../styles/Sidebar.css'
import AppRouter from '../../router/AppRouter'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { RxExit, } from 'react-icons/rx';
import { TfiMapAlt } from 'react-icons/tfi';
import { GoReport } from 'react-icons/go';
import { AiOutlineFileSearch, AiOutlineContacts } from 'react-icons/ai';
import { BsGraphDown } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MapsRoutes } from '../../mapas/routes/MapsRoutes';
import { AuthContext } from '../../auth';

const Sidebar = () => {

    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const offLogin = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }

    return (
        <>
            <div className="d-flex">
                <div id="sidebar1" className=''>
                    <div style={{ height: "8vh", background: "#201f1d", textAlign: "center" }} className='p-2 contenedor' >
                        <img style={{ height: "60px" }} src="https://www.policia.gob.pe/Contenido/images/logopnp.png" alt="" />
                    </div>
                    <div className="pt-3 pb-5">
                        <div className='mt-4 mb-4'>
                            <img className='imagenSid' src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Escudo_de_la_Polic%C3%ADa_Nacional_del_Per%C3%BA.png"
                                id='logo' style={{ height: "10vh" }} />
                        </div>
                        <div>
                            <a href="home" className="navbar-brand text-center text-light w-100">
                                <h4>Policia Nacional</h4>
                                <h4>del Perú</h4>
                                <h6>San Andrés - Trujillo</h6>
                            </a>
                        </div>
                    </div>
                    <div id="sidebar-accordion" className="accordion mt-3 ">
                        <div className="list-group list-group-flush" >
                            <a href="/mapa" data-toggle="collapse" aria-expanded="false"
                                className="list-group-item list-group-item-action text-light animate__animated animate__fadeInDown" style={{ borderStyle: "outset", background: "#201f1d", height: "50px" }}>
                                <i className="fa fa-tachometer mr-3" aria-hidden="true"></i> <TfiMapAlt className='mx-2' />Mapa
                            </a>
                            <a href="/reportes-de-servicio" data-toggle="collapse" aria-expanded="false"
                                className="list-group-item list-group-item-action text-light animate__animated animate__fadeInDown" style={{ borderStyle: "outset", background: "#201f1d", height: "50px" }}>
                                <i className="fa fa-user mr-3" aria-hidden="true"></i> <GoReport className='mx-2' />Reportes de Servicio
                            </a>
                            <a href="#" className="list-group-item list-group-item-action text-light animate__animated animate__fadeInDown" style={{ borderStyle: "outset", background: "#201f1d", height: "50px" }}>
                                <i className="fa fa-shopping-cart mr-3" aria-hidden="true"></i> <AiOutlineFileSearch className='mx-2' />Busqueda AP
                            </a>
                            <a href="#setting-items" data-toggle="collapse" aria-expanded="false"
                                className="list-group-item list-group-item-action text-light animate__animated animate__fadeInDown" style={{ borderStyle: "outset", background: "#201f1d", height: "50px" }}>
                                <i className="fa fa-cog mr-3" aria-hidden="true"></i><BsGraphDown className='mx-2' /> Estadisticas
                            </a>

                            <a href="#setting-items" data-toggle="collapse" aria-expanded="false"
                                className="list-group-item list-group-item-action text-light animate__animated animate__fadeInDown" style={{ borderStyle: "outset", background: "#201f1d", height: "50px" }}>
                                <i className="fa fa-cog mr-3" aria-hidden="true"></i>  <CgProfile className='mx-2' />Perfil
                            </a>
                            <a href="/soporte" data-toggle="collapse" aria-expanded="false"
                                className="list-group-item list-group-item-action text-light animate__animated animate__fadeInDown" style={{ borderStyle: "outset", background: "#201f1d", height: "50px" }}>
                                <i className="fa fa-cog mr-3" aria-hidden="true"></i><AiOutlineContacts className='mx-2' /> Soporte
                            </a>
                            <a href="#setting-items" data-toggle="collapse" aria-expanded="false" onClick={offLogin}
                                className="list-group-item list-group-item-action text-light animate__animated animate__fadeInDown" style={{ borderStyle: "outset", background: "#201f1d", height: "50px" }}>
                                <i className="fa fa-cog mr-3" aria-hidden="true"></i> <RxExit className='mx-2' />Salir
                            </a>
                            {/*                             <div id="setting-items" className="collapse" data-parent="#sidebar-accordion">
                                <div className="d-flex flex-row text-center">
                                    <a href="#" className="list-group-item list-group-item-action bg-dark text-light">
                                        Item 1
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action bg-dark text-light">
                                        Item 2
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>


                <div style={{ width: "82%" }}>
                    <div className="content w-100 bg-light text-dark" style={{ height: "8vh", width: "100vw", }}>
                        <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "#201f1d", color: "white", height: "8vh" }}>
                            <div className="container-fluid">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <i className="fas fa-bars"></i>
                                </button>


                                <div className="" id="navbarSupportedContent" style={{ width: "75vw" }}>
                                    <h5 style={{ textAlign: "center" }} className='animate__animated animate__fadeInUp'>  SISTEMA DE DETECCIÓN DELICTIVO - PNP </h5>
                                </div>



                                <div className="d-flex align-items-center" style={{width:"300px"}}>
                                    {user?.name}
                                    <a className="text-reset me-3" href="#">
                                        <i className="fas fa-shopping-cart"></i>
                                    </a>

                                    <div className="dropdown">
                                        <a
                                            className="text-reset me-3 dropdown-toggle hidden-arrow"
                                            href="#"
                                            id="navbarDropdownMenuLink"
                                            role="button"
                                            data-mdb-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="fas fa-bell"></i>
                                            <span className="badge rounded-pill badge-notification bg-danger">1</span>
                                        </a>
                                        <ul
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="navbarDropdownMenuLink"
                                        >
                                            <li>
                                                <a className="dropdown-item" href="#">Some news</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another news</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="dropdown">
                                        <a
                                            className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                            href="#"
                                            id="navbarDropdownMenuAvatar"
                                            role="button"
                                            data-mdb-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                                className="rounded-circle"
                                                height="25"
                                                alt="Black and White Portrait of a Man"
                                                loading="lazy"
                                            />
                                        </a>
                                        <ul
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="navbarDropdownMenuAvatar"
                                        >
                                            <li>
                                                <a className="dropdown-item" href="#">My profile</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Settings</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Logout</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="content w-100 text-dark p-4" style={{ height: "92vh", width: "100vw", overflow: "scroll", background: "#E1E1E1" }}>

                        {/* Aqui esta todo el contenido que se ejectua de forma dinamica */}
                        <MapsRoutes />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar
