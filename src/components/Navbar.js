import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import logo from "../assets/cuttevents.png";
import { Badge, Button, CssBaseline } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useStateValue } from "../StateProvider";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
    backgroundColor: "whitesmoke",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: "10px",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      history.push("/");
    }
  };

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <Link to='/'>
            <IconButton>
              <span style={{ color: '#800000' }}>E</span> {/* Rojo oscuro */}
              <span style={{ color: '#B22222' }}>C</span> {/* Rojo fuego */}
              <span style={{ color: '#8B0000' }}>O</span> {/* Rojo oscuro */}
              <span style={{ color: '#A52A2A' }}>M</span> {/* Marrón rojizo */}
              <span style={{ color: '#D32F2F' }}>E</span> {/* Rojo brillante */}
              <span style={{ color: '#FF6347' }}>R</span> {/* Rojo tomate */}
              <span style={{ color: '#DC143C' }}>C</span> {/* Rojo carmesí */}
              <span style={{ color: '#F08080' }}>E</span> {/* Rojo claro */}
            </IconButton>
            </Link>

            <div className={classes.grow} />
            <Typography variant='h6' color='textPrimary' component='p'>
              Hello {user ? user.email : "Guest"}
            </Typography>
            <div className={classes.button}>
              <Link to={!user && "/signin"}>
                <Button onClick={handleAuth} variant='outlined'>
                  <strong>{user ? "Sign Out" : "Sign In"}</strong>
                </Button>
              </Link>

              <Link to='/checkout-page'>
                <IconButton aria-label='show cart items' color='inherit'>
                  <Badge badgeContent={basket?.length} color='secondary'>
                    <ShoppingCart fontSize='large' color='primary' />
                  </Badge>
                </IconButton>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
