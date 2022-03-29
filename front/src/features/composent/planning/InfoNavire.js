import '../../../assets/style/Planning.css'

const InfoNavire = (props) => {

    return (
        <div className={"infoNavire"}>
            <h1>Navires :  {props.navire.name}</h1>
            <img src={process.env.PUBLIC_URL+"/img/"+props.navire.image[0].file}/>
            <p>Nombre de visiteure : <span>{props.navire.nbMaxVisitor}  </span></p>


        </div>
    );
};

export default InfoNavire;