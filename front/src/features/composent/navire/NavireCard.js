import React from 'react';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import Card from "@mui/material/Card";

const NavireCard = (props) => {
    return (
        <div>

            <Card className="card" sx={{maxWidth: 345}}>
                <CardMedia
                    component="img"
                    alt={props.navire.image[0].name}
                    height="140"
                    image={"./Bato/" + props.navire.image[0].file}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.navire.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.navire.details}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className="lienCard" size="small" component={Link} to={"/navires/"+props.navire.id}>Voir le detail du navire</Button>
                </CardActions>
            </Card>

        </div>
    );
};

export default NavireCard;
