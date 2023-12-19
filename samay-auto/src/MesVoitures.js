import React, {Component} from "react";
import { Table } from "react-bootstrap";
import Headers from "./Headers";
import Voiture from "./Voiture";

class MesVoitures extends Component{
    constructor(props){
        super(props);
        // initialse le state avec un tableau
        this.state = {
          voitures :  [
                {
                    id: 1, marque : 'Mescedes', modele :'Cla-AMG', couleur : 'Noir', annee : 2018,
                },
                {
                    id: 2, marque : 'Audi', modele :'Q8', couleur : 'Blanche', annee : 2020,
                },
                {
                    id: 3, marque : 'BMW', modele :'Golf8', couleur : 'Jaune', annee : 2021,
                },
            ],
        };
    }
    render(){
        return(
            <div className="container">
                <Headers />

            <Table striped bordered hover variant="primary">
      <thead>
        <tr>
          <th class="text-primary fw-bold">#</th>
          <th class="text-primary fw-bold">Marque</th>
          <th class="text-primary fw-bold">Modele</th>
          <th class="text-primary fw-bold">Couleur</th>
          <th class="text-primary fw-bold">Annee</th>
        </tr>
      </thead>
      <tbody>
       {
        this.state.voitures.map(({id, marque, modele, couleur, annee},index) => (
            <Voiture key={index} id={id} marque={marque} modele={modele} couleur={couleur} annee={annee} />
        ))
       }
      </tbody>
    </Table>
            </div>

        )
    }
}
export default MesVoitures;