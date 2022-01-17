import React from 'react'
import {
  Box, Grid, LinearProgress, Typography,
} from '@mui/material'
import {
  number, objectOf, oneOfType, string,
} from 'prop-types'

function ReservationsBox({ guest }) {
  const {
    countryName, numberOfReservations, change, percentage,
  } = guest

  const showChangeColor = change > 0 ? 'stadistics-positive' : 'stadistics-negative'

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
          <Typography variant="caption" className={change !== 0 ? showChangeColor : ''}>
            {change > 0 ? `+${change}` : change}
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
  guest: objectOf(oneOfType([string, number])).isRequired,
}

export default ReservationsBox
