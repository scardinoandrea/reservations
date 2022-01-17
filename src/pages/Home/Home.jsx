/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'
import ReservationsCard from '../../components/ReservationsCard'
import COUNTRY_CODE_MAPPING from '../../constants/country-mapping'

function Home() {
  // const [rawGuests, setRawGuest] = useState([])
  const [guests, setGuest] = useState([])

  const formatGuests = (rawGuests) => {
    const data = []
    let maxReservations = 0

    // Find the biggest amount of reservations
    for (let i = 0; i < rawGuests.length; i += 1) {
      if (rawGuests[i].value.nr_of_rooms > maxReservations) {
        maxReservations = rawGuests[i].value.nr_of_rooms
      }
    }

    // Format array of guests
    for (let i = 0; i < rawGuests.length; i += 1) {
      data.push({
        id: rawGuests[i].id,
        numberOfReservations: rawGuests[i].value.nr_of_rooms,
        countryName: COUNTRY_CODE_MAPPING[rawGuests[i].display_code],
        percentage: (rawGuests[i].value.nr_of_rooms / maxReservations) * 100,
        stadistics: rawGuests[i].value.nr_of_rooms - rawGuests[i].reference_value.nr_of_rooms,
      })
    }

    setGuest(data
      .sort((a, b) => {
        if (b.numberOfReservations === a.numberOfReservations) {
          return b.stadistics - a.stadistics
        }
        return b.numberOfReservations - a.numberOfReservations
      }))
  }

  const getGuests = () => {
    fetch(
      '/public-data/frontend-hiring/guest-country-sample.json',
    )
      .then((response) => response.json())
      .then((out) => {
        formatGuests(out.guest_country)
      })
      .catch((err) => { throw err })
  }

  useEffect(() => {
    getGuests()
  }, [])

  return (
    <div>
      <ReservationsCard title="Guest Country" guests={guests} />
    </div>
  )
}

export default Home
