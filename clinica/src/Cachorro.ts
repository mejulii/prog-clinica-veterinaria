import { Animal } from "./Animal";

class Cachorro extends Animal {

    constructor(nome: string, idade: number, tutor: string) {
        super(nome, idade, tutor);
    }

    public emitirSom(): void {
        console.log(this.getNome() + " está latindo: Au au!");
    }

    public descreverCuidados(): void {
        console.log(this.getNome() + " precisa de passeio diário.");
    }
}

export { Cachorro };