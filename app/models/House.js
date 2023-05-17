export class House {
  constructor(data) {
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator
  }

  get HouseCard() {
    return /*html*/`
        <div class="col-md-4 my-3">
      <div class="card elevation-1">
        <img class="rounded-top" src="${this.imgUrl}" alt="${this.year}">
        <div class="card-body">
          <p class="fs-4 mb-2 d-flex justify-content-between">
            <span>
              ${this.description}
            </span>
            <span>
              $${this.price}
            </span>
          </p>
          <div class="d-flex align-items-center justify-content-between border-top pt-2">
              <div>
                <span class="text-capitalize">${this.creator.name}</span>
                <img class="rounded seller-picture" src="${this.creator.picture}" alt="${this.creator.name}">
              </div>
          </div>
        </div>
      </div>
    </div>
    `
  }

  static HouseForm() {
    return /*html*/`

    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">List House</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>

        <form onsubmit="app.HousesController.createHouse()">
      <div class="modal-body container-fluid">
        <section class="row">
          <div class="mb-3 col-6">
            <label for="year" class="form-label">year</label>
            <input minlength="3" maxlength="20" type="text" class="form-control" id="year" name="year"
              placeholder="year">
          </div>
          <div class="mb-3 col-6">
            <label for="imgUrl" class="form-label">Image Url</label>
            <input minlength="3" maxlength="20" type="text" class="form-control" id="imgUrl" name="imgUrl"
              placeholder="Image Url">
          </div>
          <div class="mb-3 col-6">
            <label for="price" class="form-label">House Price</label>
            <input min="2000" max="1000000" type="number" class="form-control" id="price" name="price"
              placeholder="House Price">
          </div>
          <div class="mb-3 col-6">
            <label for="levels" class="form-label">Levels</label>
            <input min="2000" max="1000000" type="number" class="form-control" id="levels" name="levels"
              placeholder="Levels">
          </div>
          <div class="mb-3 col-12">
            <label for="description" class="form-label">House Description</label>
            <input minlength="3" maxlength="50" type="text" class="form-control" id="description" name="description"
              placeholder="House Description">
          </div>
        </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Create Listing</button>
      </div>
    </form>
    `
  }
}