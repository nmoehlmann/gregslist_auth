import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"

class HousesService {
  async createHouse(formData) {
    const res = await api.post('api/houses', formData)
    console.log(res.data, 'what is the data');

    const newHouse = new House(res.data)

    AppState.houses.push(newHouse)

    AppState.emit('houses')
  }

  async getHousesFromApi() {
    const res = await api.get('api/houses')
    console.log('houses data', res.data)
    AppState.houses = res.data.map(h => new House(h))
    console.log('whats in houses', AppState.houses)
  }

}

export const housesService = new HousesService()