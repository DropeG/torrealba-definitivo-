import React from "react";
import './body.css'


function Body(){
    
    return(
    <div>
        <div className="conviertete-conductor">
            <div className="texto-conviertete">
                <h2 className="titulo-conviertete">Conviertete en Conductor</h2>
                <p className="parrafo-conviertete">Trabaja con nosotros y recibe las mejores demandas en un solo lugar</p>
            </div>
            <div>
                
                
            </div>
        </div>

        <div className="servicios">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="Subject, Class, etc..." className="input-buscador"/>
            <ion-icon name="filter-outline" class='filter-icon'></ion-icon>
        </div>

        <div className="servicios-arriba">
        <div className="aeropuerto">
            <div className="icon-div"><ion-icon name="airplane-outline" class='icon-services'></ion-icon></div>
            <h1 className="letra-servicios">Aeropuerto</h1>   
        </div>
        

        <div className="aeropuerto">
            <ion-icon name="airplane-outline" class='icon-services'></ion-icon>   
            <h1 className="letra-servicios">Aeropuerto</h1> 
        </div>
        
        </div>

       {/*} <div className="aeropuerto">
            <ion-icon name="calendar-outline" class='icon-services'></ion-icon>
            <h1 className="letra-servicios">Eventos</h1>
            <div className="vertical-line"></div>
            <ion-icon name="chevron-forward-outline" class='arrow'></ion-icon>
            
        </div>

        <div className="aeropuerto">
            <ion-icon name="bus-outline" class='icon-services'></ion-icon>
            <h1 className="letra-servicios">Escuelas</h1>
            <div className="vertical-line"></div>
            <ion-icon name="chevron-forward-outline" class='arrow'></ion-icon>
            
        </div>

        <div className="aeropuerto">
            <ion-icon name="leaf-outline" class='icon-services'></ion-icon>
            <h1 className="letra-servicios">Turismo</h1>
            <div className="vertical-line"></div>
            <ion-icon name="chevron-forward-outline" class='arrow'></ion-icon>
            
        </div>*/}
  
         
        
        
        
    </div>
    
    )
};

export default Body;