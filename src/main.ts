import '@unocss/reset/tailwind.css'
import 'uno.css'
import "@fontsource/quicksand/700.css"
import { createNebula } from '@flodlc/nebula'

const element = document.getElementById("nebula")!
const config = {
    "starsCount": 3000,
    "starsColor": "#FFFFFF",
    "starsRotationSpeed": 3,
    "cometFrequence": 1000,
    "nebulasIntensity": 7,
    "bgColor": "rgb(8,8,8)",
    "sunScale": 0,
    "planetsScale": 0,
    "solarSystemOrbite": 100,
    "solarSystemSpeedOrbit": 10
}

const nebula = createNebula(
    element,
    config,
)
