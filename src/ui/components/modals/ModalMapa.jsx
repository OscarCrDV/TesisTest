import '../../../styles/ModalMapa.css'
import styled from 'styled-components'

function ModalMapa() {

    return (
        <>
            <Overlay>
                <ContenedorModal>
                    <EncabezadoModal>
                        <h3>Registro de Ocurrencias</h3>
                    </EncabezadoModal>
                    <BotonCerrar><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg></BotonCerrar>
                </ContenedorModal>
            </Overlay>
        </>
    )
}

export default ModalMapa

const Overlay = styled.div`
 height: 90vh;
 position: sticky;
 background: rgba(0,0,0,.5);
 padding: 30px;
 display: flex;
 justify-content: flex-end;
`;

const ContenedorModal = styled.div`
width: 500px;
min-height: 100px;
background: #fff;
position: relative;
border-radius: 5px;
box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
padding: 20px;
`;

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;
   h3 {
    font-weight: 500;
    font-size: 16px;
    color: #1766DC;
   } 
`;

const BotonCerrar = styled.div`
   position: absolute;
   top: 15px;
   right: 15px;
   width: 30px;
   height: 30px;
   border: none;
   background: none;
   cursor: pointer;
   transition: .3s ease all;
   border-radius: 5px;
   color: #1766DC;
   text-align: center;

   &:hover { 
    background: #f2f2f2;
   }

   svg { 
    width: 100%;
    height: 100%;
   }
`;