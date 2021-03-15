import React from 'react';
import {Button, Card, CardActions, CardContent, makeStyles, Typography} from "@material-ui/core";

const useStyle = makeStyles({
    box: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "2rem"
    },
    action: {
        display: "flex",
        justifyContent: "center"
    }
})

const SplashScreen = ({nextPage}: any) => {
    const c = useStyle();

    return (
        <Card className={c.box}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Welcome to the world of movies!
                </Typography>
            </CardContent>
            <CardActions className={c.action}>
                <Button variant="contained" color="primary" onClick={nextPage}>
                    COME INSIDE!
                </Button>
            </CardActions>
        </Card>
    );
}

export default SplashScreen;