import React, { useState, useEffect } from 'react';
import { descriptionLength, fetchMediaList } from "../utils";
import { TokenType } from "../types";
import {Box, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import VideoPlayer from "./VideoPlayer";

const useStyle = makeStyles({
    root: {
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    media: {
        height: 200,
    },
    ul: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 0
    },
    header: {
        textAlign: "center",
        fontSize: "4rem"
    }
})

const HomePage = ({ token }: TokenType) => {
    const c = useStyle();
    const [filmList, setFilmList] = useState([]);
    const [playerOpen, setPlayerOpen]= useState({
        id: 0,
        isOpen: false
    });

    useEffect(() => {
        fetchMediaList(token).then(res => setFilmList(res.Entities));
    }, []);

    const handleClick = (id: number) => {
        if(id === playerOpen.id) return setPlayerOpen({id: 0, isOpen: false});
        return setPlayerOpen({id, isOpen: true});
    }

    const handleClose = () => {
        setPlayerOpen({id: 0, isOpen: false});
    }

    return (
        <Box>
            <h2 className={c.header}>Film Library</h2>
            <ul className={c.ul}>
                {filmList.map((el: any) => {
                    return (
                        <Card key={el.Id} className={c.root} onClick={() => handleClick(el.Id)}>
                            <CardActionArea>
                                <CardMedia
                                    className={c.media}
                                    image={el.Images[0].Url}
                                    title={el.Title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {el.Title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {descriptionLength(el.Description)}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })}
            </ul>
            <VideoPlayer playerOpen={playerOpen} token={token} handleClose={handleClose} />
        </Box>
    );
}

export default HomePage;