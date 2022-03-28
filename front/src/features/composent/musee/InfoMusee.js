import React, {useEffect, useState} from 'react';
import '../../../assets/style/InfoMusee.css'
const InfoMusee = () => {
    let date = new Date();
    let heure = date.getHours()+":"+date.getMinutes();

    const [dates, setDate] = useState(new Date());
    useEffect( () => {
        fetch("http://localhost:8000/api/horaires")
            .then(response => response.json())
            .then(data => setDate(data))
            .catch(err => console.log(err));
    }, [])

    console.log(dates);
    let dateOpen = new Date(dates.openingHours);
    let dateClose = new Date(dates.closingHours);

    return (
        <>
            <div id="blocTitreInfoMusee">
            <h1 id="titreInfoMusee"> Le Musée maritime de La Rochelle</h1>
            </div>
            <div id="blocOFInfoMusee">
            {
                date.getHours()<dateClose.getHours() && date.getHours()>=dateOpen.getHours() ? <p id ="OuvertInfoMusee" className="OFInfoMusee">ouvert</p>:<p id="FermerInfoMusee" class="OFInfoMusee">fermer</p>
            }
            </div>
            <div id ="blocInfoInfoMusee">
            <p id="InfoInfoMusee">Le Musée maritime de La Rochelle rassemble, restaure et entretient une
                flotte patrimoniale dont sept sont classés Monument Historique. Chaque année, la ville de
                La Rochelle investit dans la restauration de cette flotte patrimoniale unique en France et
                participe à sa notoriété dans le domaine de la conservation maritime. Cela engendre
                des retombées économiques pour les entreprises portuaires locales. </p>
            </div>

        </>
    );
};
export default InfoMusee;