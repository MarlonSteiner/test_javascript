import { Application, Controller } from '@hotwired/stimulus';
window.Stimulus = Application.start()

import DisableButtonController from "./controllers/disable_button_controller.js"
Stimulus.register("disable-button", DisableButtonController)

import AnimateController from "./controllers/animate_controller.js"
Stimulus.register("animate", AnimateController)

import MoviesController from "./controllers/movies_controller.js"
Stimulus.register("movies", MoviesController)
