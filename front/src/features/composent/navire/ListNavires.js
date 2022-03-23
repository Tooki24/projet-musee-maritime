import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../../../assets/style/ListNavires.css"
import {Link} from "react-router-dom";
import BannerOtherPage from "../Banner/BannerOtherPage";

const ListNavires = () => {

    let id = 12;

    return (
        <>
            <BannerOtherPage title={"Liste de navires"}/>
            <div className="listBato">
                <Card className="card" sx={{maxWidth: 345}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="./Bato/bato.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nom Bato
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ici description du bato. This stigma has only been raised by a virtual queen.

                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button className="lienCard" size="small" component={Link} to={"/navires/"+id} >Voir le detail du navire</Button>
                    </CardActions>
                </Card>

                <Card className="card" sx={{maxWidth: 345}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="./Bato/bato.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nom Bato
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ici description du bato. This stigma has only been raised by a virtual queen.

                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button className="lienCard" size="small" component={Link} to={"/navires/"+id}>Voir le detail du navire</Button>
                    </CardActions>
                </Card>

                <Card className="card" sx={{maxWidth: 345}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="./Bato/bato.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nom Bato
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ici description du bato. This stigma has only been raised by a virtual queen.

                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button className="lienCard" size="small" component={Link} to={"/navires/"+id}>Voir le detail du navire</Button>
                    </CardActions>
                </Card>
            </div>
        </>
    );
};

export default ListNavires;
