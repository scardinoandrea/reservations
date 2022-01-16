import React from 'react'
import {
  Card, CardHeader, CardContent, Grid,
} from '@mui/material'
import { string } from 'prop-types'
import ReservationsBox from '../ReservationsBox'

function ReservationsCard({ title }) {
  const testArr = [-1, +2, -3, +4, +5, -7, +8, +9, +10]
  return (
    <Card>
      <CardHeader
        title={title}
      />

      <CardContent>
        <Grid container>
          {testArr.map((a) => (
            <Grid item className="item-padding" xs={12}>
              <ReservationsBox value={a} />
            </Grid>
          ))}

        </Grid>

      </CardContent>

    </Card>
  )
}

ReservationsCard.propTypes = {
  title: string.isRequired,
}

export default ReservationsCard
