import React from 'react'
import {
  Card, CardHeader, CardContent, Grid,
} from '@mui/material'
import {
  arrayOf, number, objectOf, oneOfType, string,
} from 'prop-types'
import ReservationsBox from '../ReservationsBox'

function ReservationsCard({ title, guests }) {
  return (
    <Card className="reservations-card">
      <CardHeader
        title={title}
      />
      <CardContent>
        <Grid container>
          {guests.map((guest) => (
            <Grid key={guest.id} item className="item-padding" xs={12}>
              <ReservationsBox
                guest={guest}
              />
            </Grid>
          ))}

        </Grid>

      </CardContent>

    </Card>
  )
}

ReservationsCard.propTypes = {
  title: string.isRequired,
  guests: arrayOf(objectOf(oneOfType([string, number]))).isRequired,
}

export default ReservationsCard
