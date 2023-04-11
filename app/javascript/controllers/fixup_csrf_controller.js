import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize() {
    this.param = document.querySelector('meta[name = "csrf-param"]').getAttribute('content')
    this.token = document.querySelector('meta[name = "csrf-token"]').getAttribute('content')
  }

  connect() {
    if (!this.element.querySelector(`input[name = "${this.param}"]`)) {
      this.element.appendChild(this.buildInput())
    }
  }

  buildInput() {
    const input = document.createElement("input")

    input.type = "hidden"
    input.name = this.param
    input.value = this.token
    input.autocomplete = "off"

    return input
  }
}
