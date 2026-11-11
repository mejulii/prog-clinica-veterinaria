import { Animal } from "./Animal";
import { Veterinario } from "./Veterinario";

class Consulta {
    private data: Date;
    private animal: Animal;
    private veterinario: Veterinario;

    constructor(animal: Animal, veterinario: Veterinario, data: Date) {
        this.data = data;
        this.animal = animal;
        this.veterinario = veterinario;
    }

    public getData(): Date {
        return this.data;
    }

    public setData(data: Date): void {
        this.data = data;
    }

    public getAnimal(): Animal {
        return this.animal;
    }

    public setAnimal(animal: Animal): void {
        this.animal = animal;
    }

    public getVeterinario(): Veterinario {
        return this.veterinario;
    }

    public setVeterinario(veterinario: Veterinario): void {
        this.veterinario = veterinario;
    }
}

export { Consulta };