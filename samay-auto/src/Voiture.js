import React from "react";


    const Voiture = ({id, marque, modele, couleur, annee}) =>{

        return(

        <tr>
        <td> {id} </td>
        <td> {marque} </td>
        <td> {modele} </td>
        <td> {couleur} </td>
        <td>  {annee} </td>
      </tr>
        )
    };

    export default Voiture;
    
       
