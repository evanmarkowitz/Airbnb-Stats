import { fetchApartments, apartmentCleaner } from './apiCall'

describe('fetchApartments', () => {
    let mockApts;


    beforeEach(() => {
      mockApts = [
        {datasetid: "air-bnb-listings",
        fields: {availability_365: 162,
        calculated_host_listings_count: 1,
        city: "New-york-city",
        column_10: 85,
        column_19: "United states",
        column_20: "United states, New-york-city, Williamsburg",
        coordinates: [40.71181346189293, -73.95663634549271],
        host_id: 10276104,
        id: 8252369,
        last_review: "2019-05-27",
        minimum_nights: 2,
        name: "Cute Sunny Loft Space Williamsburg",
        neighbourhood: "Williamsburg",
        number_of_reviews: 68,
        reviews_per_month: 1.5,
        room_type: "Private room",
        updated_date: "2019-06-02"}}
        ]

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockApts)
        })
      })
    })

    it('HAPPY: should return with a parsed response', async () => {
      const result = await fetchApartments();
      expect(result).toEqual(mockApts);
    })

    it('SAD: should return an error if the answer is not ok', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      })

      expect(fetchApartments()).rejects.toEqual(Error('Error fetching apartments'))
    })
    it('should clean the data', () => {
      let cleanedApts = [{reviewsPerMonth: 1.5,
        id: 8252369,
        numReviews: 68,
        price: 85,
        aptType: 'Private room',
        name: 'Cute Sunny Loft Space Williamsburg',
        hood: 'Williamsburg',
        lat: 40.71181346189293,
        long: -73.95663634549271}]
        expect(apartmentCleaner(mockApts)).toEqual(cleanedApts)
    })
  })

