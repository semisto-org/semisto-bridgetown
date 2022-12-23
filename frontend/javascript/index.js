import "index.css"
import "syntax-highlighting.css"
import { Application } from "@hotwired/stimulus"

// Import all JavaScript & CSS files from src/_components
import components from "bridgetownComponents/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")

window.Stimulus = Application.start()

import controllers from "./controllers/**/*.{js,js.rb}"
// import controllers from "../../node_modules/tailwind-stimulus-components/src/**/*.js"

import { Alert, Dropdown, Modal, Tabs, Popover, Toggle, Slideover } from "tailwindcss-stimulus-components"
window.Stimulus.register('alert', Alert)
window.Stimulus.register('dropdown', Dropdown)
window.Stimulus.register('modal', Modal)
window.Stimulus.register('tabs', Tabs)
window.Stimulus.register('popover', Popover)
window.Stimulus.register('toggle', Toggle)
window.Stimulus.register('slideover', Slideover)

Object.entries(controllers).forEach(([filename, controller]) => {
  if (filename.includes("_controller.") || filename.includes("-controller.")) {
    const identifier = filename.replace("./controllers/", "")
      .replace(/[_-]controller..*$/, "")
      .replace("_", "-")
      .replace("/", "--")

    Stimulus.register(identifier, controller.default)
  }
})
