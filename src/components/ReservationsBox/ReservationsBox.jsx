import React from 'react'
import {
  Box, Grid, LinearProgress, Typography,
} from '@mui/material'
import { number } from 'prop-types'

function ReservationsBox({ value }) {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="caption">
            Belgium
          </Typography>
        </Grid>
        <Grid item xs={2} className="right-alignment">
          <Typography variant="caption">
            676
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption" className={value > 0 ? 'stadistics-positive' : 'stadistics-negative'}>
            {value}
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <LinearProgress variant="determinate" value={50} />
        </Grid>
        <Grid item xs={2}>
          <Typography className="small-text">
            vs. Last Year
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

ReservationsBox.propTypes = {
  value: number.isRequired,
}

export default ReservationsBox
