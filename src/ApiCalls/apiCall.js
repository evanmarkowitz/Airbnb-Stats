

export const fetchApartments = async (apiKey, neighborhood, roomType) => {
  try {
    const options = {
      method: 'GET',
    }
    const response = await fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=air-bnb-listings&rows=50&key=${apiKey}&facet=neighbourhood&facet=room_type&facet=column_10&facet=calculated_host_listings_count&facet=city&facet=column_19&refine.city=New-york-city&refine.neighbourhood=${neighborhood}&refine.room_type=${roomType}&exclude.number_of_reviews=0` , options)
    if (!response.ok) {
      throw new Error('error')
    }
    const data = await response.json()
    return data 
  }
  catch (error) {
    throw new Error(error.message)
  }
}

export const apartmentCleaner = (apts) => {
  let cleanedApts = apts.map(apt => {
    return {
      reviewsPerMonth: apt.fields.reviews_per_month,
      id: apt.fields.id,
      numReviews: apt.fields.number_of_reviews,
      price: apt.fields.column_10,
      roomType: apt.fields.room_type,
      name: apt.fields.name
    }
  }) 
  return cleanedApts
}
