import { Animal } from "./Animal";

class Gato extends Animal {

    constructor(nome: string, idade: number, tutor: string) {
        super(nome, idade, tutor);
    }

    public emitirSom(): void {
        console.log(this.getNome() + " está miando: Miau!");
    }

    public descreverCuidados(): void {
        console.log(this.getNome() + " precisa de arranhador.");
    }
}

export { Gato };