import React, {useState} from 'react';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Modal,
    Box,
    TextField,
    Select,
    MenuItem,
    FormHelperText,
    InputLabel
} from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";


const CrenelsBoat = () => {

    const style = {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 250,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(false);
    const [img, setImg] = React.useState(null);


    const handleOpen = () => {setOpen(true);}
    const handleClose = () => {setOpen(false);}

    return (
        <>
            <div className={"crenelBoat"}>
                <h2>Creneaux Disponible</h2>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                {dataPlanning.map((item) => {
                    return(
                            <ListItemButton key={item.date} onClick={() => {handleOpen()}}>
                                <ListItem alignItems="flex-start">
                                    <ListItemText
                                        primary={item.date}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="secondary.main"
                                                >
                                                    Durée de {item.duree} min
                                                </Typography>
                                                {" — Posibilité de 10 personnes"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </ListItemButton>

                );
                })}
                </List>

                <br/><br/><br/>
            </div>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        Réserver le creneaux
                    </Typography>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Nom"
                        sx={{mb:2}}
                    />
                    <TextField
                        id="outlined-number"
                        label="Téléphone"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{mb:2}}
                    />
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Nombre de personnes
                    </InputLabel>

                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Nombre de personne"
                        sx={{width:100}}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>

                    <Button onClick={() => {handleClose()}} variant="contained" sx={{bgcolor:'secondary.main', ml:2}}>Confirmer</Button>

                </Box>
            </Modal>
        </>
    );
};

const dataPlanning = [
    {
        date : 'Mardi 29 Mars 10h00',
        duree : 30
    },
    {
        date : 'Mardi 29 Mars 11h00',
        duree : 30
    },
    {
        date : 'Mardi 29 Mars 14h00',
        duree : 30
    },    {
        date : 'Mardi 29 Mars 15h00',
        duree : 30
    },    {
        date : 'Mardi 29 Mars 16h00',
        duree : 30
    },
    {
        date : 'Mardi 30 Mars 10h00',
        duree : 30
    },
    {
        date : 'Mardi 30 Mars 11h00',
        duree : 30
    },
    {
        date : 'Mardi 30 Mars 14h00',
        duree : 30
    },    {
        date : 'Mardi 30 Mars 15h00',
        duree : 30
    },    {
        date : 'Mardi 30 Mars 16h00',
        duree : 30
    },    {
        date : 'Mardi 31 Mars 10h00',
        duree : 30
    },





]

export default CrenelsBoat;