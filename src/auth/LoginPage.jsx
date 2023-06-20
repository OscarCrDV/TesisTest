import React, { useContext } from 'react'
import '../styles/loginPnp.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context';

export const LoginPage = () => {

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogin = () => {

        login('Fernando Herrera');

        navigate('/mapa', {
            replace: true
        });
    }

    return (
        <>
            <section className="vh-100" style={{ background: "#104a38" }}>
                <div className="container py-5 h-100" >
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: '1rem' }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block image-container">
                                        <img src="https://elperuano.pe/fotografia/thumbnail/2023/01/25/000232768M.jpg"
                                            alt="Descripción de la imagen"
                                            className="img-fit"
                                            style={{ borderRadius: '1rem 0 0 1rem' }} />

                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center" style={{ background: '#eee', borderRadius: '1rem' }}>
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form>

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                                    <img src="https://www.policia.gob.pe/Contenido/images/logopnp.png" alt="" />
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Iniciar sesión en su cuenta</h5>

                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form2Example17" className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="form2Example17">Correo Electrónico</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example27" className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="form2Example27">Contraseña</label>
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="button" onClick={onLogin}>Ingresar</button>
                                                </div>

                                                <a className="small text-muted" href="">Has olvidado tu contraseña?</a>
                                                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>No tienes cuenta? <a href=""
                                                    style={{ color: '#393f81' }}>Regístrate aquí</a></p>
                                                <a href="" className="small text-muted">Condiciones de uso. </a>
                                                <br />
                                                <a href="" className="small text-muted">Política de privacidad. </a>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
