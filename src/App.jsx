import React from 'react';
import NavBar from './components/navbar/NavBar';
import {
    makeStyles, Hidden,
} from '@material-ui/core';
import Cajon from './components/cajon/Cajon';
import Cajita from './components/cajita/Cajita';
import Footer from './components/footer/Footer';
import Busqueda from './components/busqueda/Busqueda';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary,
      
        padding: theme.spacing(3),
      },
      
}))

function App() {

    const classes = estilos()

    const [abrir, setAbrir] = React.useState(false)

    const accionAbrir = () =>{
        setAbrir(!abrir)
    }

  return (
    <Router>
   <div className={classes.root}>
       
        <NavBar accionAbrir={accionAbrir}/>
        <Hidden xlDown>
            <Cajon
            variant="permanent"
            open= {true}
            />
        </Hidden>
        <Hidden xlUp>
            <Cajon
            variant="temporary"
            open= {abrir}
            onClose={accionAbrir}
            />
        </Hidden>
        
        
        
        <div className={classes.content} >
            <div className={classes.toolbar}></div>
            <Switch>

              <Route path="/busqueda">
                <Busqueda/>
              </Route>

              <Route path="/" exact>  {/* esta es la ruta raíz */}
                <Cajita/>
              </Route>

            </Switch>
            <Footer/>
        </div>
        
        
   </div>
   </Router>
  )
}

export default App;

/*

import React from 'react';
import NavBar from './components/navbar/NavBar';
import {
    makeStyles, Hidden,
} from '@material-ui/core';
import Cajon from './components/cajon/Cajon';
import Cajita from './components/cajita/Cajita';
import Footer from './components/footer/Footer';



const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary,
      
        padding: theme.spacing(3),
      },
      
}))

function App() {

    const classes = estilos()

    const [abrir, setAbrir] = React.useState(false)

    const accionAbrir = () =>{
        setAbrir(!abrir)
    }

  return (
   <div className={classes.root}>
       
        <NavBar accionAbrir={accionAbrir}/>
        <Hidden xlDown>
            <Cajon
            variant="permanent"
            open= {true}
            />
        </Hidden>
        <Hidden xlUp>
            <Cajon
            variant="temporary"
            open= {abrir}
            onClose={accionAbrir}
            />
        </Hidden>
        
        <div className={classes.content} >
            <div className={classes.toolbar}></div>
            <Cajita/>
            <Footer/>
        </div>
        
   </div>
  )
}

export default App;
*/