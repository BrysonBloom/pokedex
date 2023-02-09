import { sandboxService } from "../Services/SandboxService.js";

export class SandboxController {
    setActivePokemon(name) {
        sandboxService.setActivePokemon()
    }
}