import React from 'react'
import {
  Box, Grid, LinearProgress, Typography,
} from '@mui/material'
import { objectOf, string } from 'prop-types'

function ReservationsBox({ guest }) {
  const {
    countryName, numberOfReservations, stadistics, percentage,
  } = guest

  return (
    <Box className="reservation-box">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="caption">
            {countryName}
          </Typography>
        </Grid>
        <Grid item xs={2} className="right-alignment">
          <Typography variant="caption">
            {numberOfReservations}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption" className={stadistics > 0 ? 'stadistics-positive' : 'stadistics-negative'}>
            {stadistics > 0 ? `+${stadistics}` : stadistics}
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <LinearProgress variant="determinate" value={percentage} />
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
  guest: objectOf(string).isRequired,
}

export default ReservationsBox
