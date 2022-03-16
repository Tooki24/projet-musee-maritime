import React from 'react';

const ListNavires = () => {
    return (
<<<<<<< Updated upstream
        <div>
            <h1>UNE LISTE DE NAVIRES</h1>
=======
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
                <CardActions >
                    <Button className="lienCard" size="small">Voir le detail du navire</Button>
                </CardActions>
            </Card>
>>>>>>> Stashed changes
        </div>
    );
};

export default ListNavires;