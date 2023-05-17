import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawHouses() {
  console.log('the houses are drawing')
  let template = ''

  AppState.houses.forEach(h => {
    template += h.HouseCard
  })

  setHTML('app', template)
}

function _drawButton() {
  if (AppState.account) {
    setHTML('the-place-to-put-the-button', '<button class="btn btn-dark square" data-bs-toggle="modal" data-bs-target="#the-target-id" >OPEN THE MODAL</button>')
  }
}

export class HousesController {
  constructor() {
    setHTML('app', '<h1>🏠 under construction..</h1>')
    setHTML('modal-guts', House.HouseForm())
    _drawButton()

    AppState.on('account', _drawButton)

    console.log('houses controller online')
    this.getHousesFromApi()
    AppState.on('houses', _drawHouses)
    AppState.on('account', _drawHouses)
  }


  async getHousesFromApi() {
    try {
      await housesService.getHousesFromApi()
    } catch (error) {
      Pop.error(error)
    }
  }

  async createHouse() {
    try {
      window.event?.preventDefault()
      const form = window.event?.target
      const formData = getFormData(form)

      await housesService.createHouse(formData)
      // @ts-ignore
      form.reset()
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance('#the-target-id').hide()
    } catch (error) {
      Pop.error(error)
    }
  }


}


