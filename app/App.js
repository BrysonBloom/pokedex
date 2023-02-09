// import { ValuesController } from "./Controllers/ValuesController.js";
import { PokedexController } from "./Controllers/PokedexController.js";
import { SandboxController } from "./Controllers/SandboxController.js";
class App {
  // valuesController = new ValuesController();
  pokedexController = new PokedexController();
  sandboxController = new SandboxController()
}

window["app"] = new App();
