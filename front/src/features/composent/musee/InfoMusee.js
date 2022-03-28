import React, {useEffect, useState} from 'react';
import '../../../assets/style/InfoMusee.css'
const InfoMusee = () => {
    let tab_jour = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    let date = new Date();
    let heure = date.getHours()+":"+date.getMinutes();

    const [dates, setDate] = useState([]);

    useEffect( () => {
        fetch("http://localhost:8000/api/horaires.json")
            .then(response => response.json())
            .then(data => setDate(data))
            .catch(err => console.log(err));
    }, []);
    let dateOpen = new Date();
    let dateClose = new Date();

    dates.forEach(ele => {
        if(tab_jour[date.getDay()] === ele.day)
        {
            dateOpen = new Date(ele.openingHours)
            dateClose = new Date(ele.closingHours)
        }
    })

    return (
        <>
            <div id="blocTitreInfoMusee">
            <h1 id="titreInfoMusee"> Le Musée maritime de La Rochelle</h1>
            </div>
            <div id="blocOFInfoMusee">
                {
                    date.getHours()<dateClose.getHours() && date.getHours()>=dateOpen.getHours() ? <p id ="OuvertInfoMusee" className="OFInfoMusee">ouvert</p>:<p id="FermerInfoMusee" className="OFInfoMusee">fermer</p>
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