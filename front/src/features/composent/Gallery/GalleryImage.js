import React, {useEffect} from 'react';
import {ImageList, ImageListItem, Modal} from "@mui/material";


const GalleryImage = () => {

    const [open, setOpen] = React.useState(false);
    const [img, setImg] = React.useState(null);
    const handleOpen = (key) => {
        setOpen(true);
        setImg(key);
    }
    const handleClose = () => setOpen(false);
    const [itemData, setItemData] = React.useState([]);


    useEffect(() => {
        fetch("http://localhost:8000/api/images.json", {method: "GET"})
            .then((res) => res.json())
            .then((value) => {
                setItemData(value)
            })
            .catch((err) => {console.log(err)})
    }, [])


    return (
        <>
        <ImageList sx={{bgcolor: '#282c34', mt: 0, pb:15}} cols={3} rowHeight={164}>
            {
                itemData.map((item) => (

                    <ImageListItem key={item.file} onClick={() => {handleOpen(item.file)}}>
                        <img
                            src={`./img/${item.file}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`./img/${item.file}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.name}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))
            }
        </ImageList>

        <Modal
                className={'galleryModal'}
                open={open}
                onClose={handleClose}
        >
            <img src={`./img/${img}?w=300&h=300&fit=crop&auto=format`}
                 srcSet={`./img/${img}?w=300&h=300&fit=crop&auto=format&dpr=2 2x`}
                 loading="lazy"
            />
        </Modal>
        </>
    );

};




export default GalleryImage;