import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import {Box, ClickAwayListener, makeStyles} from "@material-ui/core";
import { fetchFilmPlayer } from "../utils";

const useStyle = makeStyles({
    playerBox: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
})

const VideoPlayer = (props: any ) => {
    const c = useStyle();
    const { token, playerOpen, handleClose } = props;
    const [filmUrl, setFilmUrl] = useState('');

    useEffect(() => {
        if(playerOpen.id > 0) fetchFilmPlayer(playerOpen.id, token).then(res => setFilmUrl(res.ContentUrl));
    }, [playerOpen.id])

    return (
        <Box>
            {playerOpen.isOpen &&
                <ClickAwayListener onClickAway={() => handleClose()}>
                    <Box className={c.playerBox}>
                        <ReactPlayer width={1024} height={720} url={filmUrl} controls={true} playing={true}/>
                    </Box>
                </ClickAwayListener>
            }
        </Box>
    )
};

export default VideoPlayer;