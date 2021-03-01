import React from "react";

// material ui
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export const ListPage: React.FC = () => {
    const [filter, setFilter] = React.useState("lemoncode");
    const [userCollection, setUsercollection] = React.useState([]);

    const montaJson = () => {
        fetch(`https://api.github.com/orgs/${filter}/members`)
            .then((response) => response.json())
            .then((json) => setSafeUserCollection(json));
    };

    const setSafeUserCollection = (userCollection) => {
        setUsercollection(userCollection);
        console.log(userCollection.length); //<-- sabemos la cantidad de registros que hay

    }
    
    // evento del submit
    const handleListado = (e) => {
        e.preventDefault()

        if (filter.length > 0) {
            montaJson()
        } else {
            alert("inserte empresa a buscar")
        }
    };

    // monta la primera vez la lista en base al parametro de entrada por defecto
    React.useEffect(() => {
        montaJson()
    }, []);

    return (
        <div>
            <form onSubmit={handleListado}>
                <TextField id="outlined-basic" label="Organización" variant="outlined" value={filter} onChange={(e) => setFilter(e.target.value)} />
                <div>
                    <Button type="button" variant="contained" color="primary" onClick={(e) => setFilter('')}>
                        reset
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Listar por Organización
                    </Button>
                </div>
            </form>
            <List>
                {
                    (userCollection && Array.isArray(userCollection) && userCollection.length > 0) ?
                        userCollection.map((member) => (
                            <ListItem alignItems="flex-start" key={member.id}>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={member.avatar_url} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={member.login}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary"
                                            >
                                                {member.id}
                                            </Typography>
                                            {" — "} {member.node_id}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        ))
                        :
                        <span> No hay resultados </span>
                }
            </List>
        </div>
    );
};