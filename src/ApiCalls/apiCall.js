
export const fetchApartments = async (apiKey, neighborhood) => {
  try {
    const options = {
      method: 'GET',
    }
    const response = await fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=air-bnb-listings&rows=50&key=${apiKey}&facet=neighbourhood&facet=room_type&facet=column_10&facet=calculated_host_listings_count&facet=city&facet=column_19&refine.city=New-york-city&refine.neighbourhood=${neighborhood}` , options)
    if (!response.ok) {
      throw new Error('error')
    }
    const data = await response.json()
    await this.setState({ data: data.records })
  }
  catch (error) {
    throw new Error(error.message)
  }
}
