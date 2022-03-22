import React from 'react';
import '../../../assets/style/InfoMusee.css'
const InfoMusee = () => {
    let date = new Date();
    let heure = date.getHours()+":"+date.getMinutes();
    console.log(heure);

    return (
        <div>
            <div id="blocTitreInfoMusee">
            <h1 id="titreInfoMusee"> Le Musée maritime de La Rochelle</h1>
            </div>
            <div id="blocOFInfoMusee">
            {
                date.getHours()<20 && date.getHours()>=9 ? <p id ="OuvertInfoMusee" class="OFInfoMusee">ouvert</p>:<p id="FermerInfoMusee" class="OFInfoMusee">fermer</p>
            }
            </div>
            <div id ="blocInfoInfoMusee">
            <p id="InfoInfoMusee">Le Musée maritime de La Rochelle rassemble, restaure et entretient une flotte patrimoniale dont sept sont classés Monument Historique. Chaque année, la ville de La Rochelle investit dans la restauration de cette flotte patrimoniale unique en France et participe à sa notoriété dans le domaine de la conservation maritime. Cela engendre des retombées économiques pour les entreprises portuaires locales. </p>
            </div>
        </div>
    );
};
export default InfoMusee;