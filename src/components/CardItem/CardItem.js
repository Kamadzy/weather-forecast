import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import './CardItem.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const CardItem = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const tempConverter = (val) => {
    return (val - 273.15).toFixed(1);
  };
  return (
    <Box sx={{ maxWidth: 275 }} className='card-item'>
      <Card variant='outlined'>
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color='text.main' gutterBottom>
              {data.name}, {data.sys.country}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              &#8451; {tempConverter(data.main.temp)}
            </Typography>
            <Typography variant='body2'>{data.weather[0].main}</Typography>
          </CardContent>
          <CardActions>
            <div>
              <Button onClick={handleOpen}>Details</Button>
              <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}>
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography id='transition-modal-title' variant='h6' component='h2'>
                      {data.name}, {data.sys.country}
                    </Typography>
                    <Typography id='transition-modal-description' sx={{ mt: 2 }}>
                      Temperature feels like: &#8451; {tempConverter(data.main.feels_like)} <br />
                      Humidity: {data.main.humidity}% <br />
                      Wind: {data.wind.speed} m/sec
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </div>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
};
