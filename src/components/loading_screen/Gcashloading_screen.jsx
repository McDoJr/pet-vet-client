import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import "./loading_screen.css"

export const GcashLoadingScreen = () => {
  return (
    <div className='test-center-div'>
        <div className='inner-content-div'>
                {/* <CircularProgress /> */}
            <Box sx={{ display: 'flex', alignSelf: 'center' }}>
                <CircularProgress size="15rem" thickness={1.5}/>
            </Box>
            <span className='text-payment' style={{color: '#217C24'}}>Online Payment Successful</span>
            <a href="/"><button className='return-button-class'>OK</button></a>
        </div>
    </div>
  );
}
