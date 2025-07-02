import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ["button", "link"]
  static values = { text: String }

  connect() {
    console.log("Hello from our first Stimulus controller");
  }
  
  // disable(event) {
  //   console.log(event)
  //   this.element.innerHTML = "awe";
  //   this.element.setAttribute("disabled", "");
  // };
  
  disable() {
    this.buttonTarget.setAttribute("disabled", "");
    this.buttonTarget.innerText = this.textValue;
    this.linkTarget.classList.remove("d-none");
  };
  
  activate() {
    this.buttonTarget.innerText = "Click me";
    this.buttonTarget.removeAttribute("disabled");
    this.linkTarget.classList.add("d-none");
  };
};
