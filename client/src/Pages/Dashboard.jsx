import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import UserDataDashboard from '../Components/UserDataDashboard';
import loadLogo from '../assets/Loading_icon.gif'
const lightColor = 'rgba(255, 255, 255, 0.7)';

function Header() {
  const [users, setUsers] = useState([]);
  const [jobNumb, setJobNumb] = useState(0);

  const getUsers = async (jobNumb) => {
    try {
      const response = await fetch(`http://localhost:8000/api/printUsers?jobNumb=${jobNumb}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const users = await response.json();
        // Perform any required operations with the users data
        setUsers(users);
      } else {
        console.log('Error:', response.status);
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  useEffect(() => {
    getUsers(jobNumb);
    LoadingGif()
  }, [jobNumb]);

  const [load, setLoad] = useState(true)

  const LoadingGif = () => {
    setInterval(() => {
      setLoad(false)
    }, 1000)
  }


  return (
    <>
      {load ? <h3 style={{textAlign:'center'}}>CONNECTION...</h3> :
        <React.Fragment>
          <AppBar color="primary" position="sticky" elevation={0}>
            <Toolbar>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs />

                <Grid item>
                  <Tooltip title="Alerts • No alerts">
                    <IconButton color="inherit">
                      <NotificationsIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <IconButton color="inherit" sx={{ p: 0.5 }}>
                    <Avatar alt="HR" />
                  </IconButton>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <AppBar
            component="div"
            color="primary"
            position="static"
            elevation={0}
            sx={{ zIndex: 0 }}
          >
            <Toolbar>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs>
                  <Typography color="inherit" variant="h5" component="h1">
                    Authentication
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    sx={{ borderColor: lightColor }}
                    variant="outlined"
                    color="inherit"
                    size="small"
                  >
                    Web setup
                  </Button>
                </Grid>
                <Grid item>
                  <Tooltip title="Help">
                    <IconButton color="inherit">
                      <HelpIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
            <Tabs
              value={jobNumb}
              textColor="inherit"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="All" onClick={() => setJobNumb(0)} />
              <Tab label="Project Manager" onClick={() => setJobNumb(1)} />
              <Tab label="Senior Fullstack" onClick={() => setJobNumb(2)} />
              <Tab label="Frontend Developer" onClick={() => setJobNumb(3)} />
              <Tab label="Support Specialist" onClick={() => setJobNumb(4)} />
              <Tab label="Junior Designer" onClick={() => setJobNumb(5)} />
            </Tabs>
          </AppBar>
          <div>
            <UserDataDashboard users={users} />
          </div>
        </React.Fragment>
      }
    </>
  );
}

export default Header;
