import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../../../assets/style/ListNavires.css"

const ListNavires = () => {


    return (
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
                    <Button size="small">Voir le detail du navire</Button>
                </CardActions>
            </Card>

                <CardActions >
                    <Button className="lienCard" size="small">Voir le detail du navire</Button>
                </CardActions>
            </Card>
        </div>
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
                    <Button size="small">Voir le detail du navire</Button>
                </CardActions>
            </Card>

                <CardActions >
                    <Button className="lienCard" size="small">Voir le detail du navire</Button>
                </CardActions>
            </Card>
        </div>
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
                    <Button size="small">Voir le detail du navire</Button>
                </CardActions>
            </Card>

                <CardActions >
                    <Button className="lienCard" size="small">Voir le detail du navire</Button>
                </CardActions>
            </Card>
        </div>
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
                    <Button size="small">Voir le detail du navire</Button>
                </CardActions>
            </Card>

                <CardActions >
                    <Button className="lienCard" size="small">Voir le detail du navire</Button>
                </CardActions>
            </Card>
        </div>
    );

};

export default ListNavires;
