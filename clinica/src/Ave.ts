import { Animal } from "./Animal";

class Ave extends Animal {

    constructor(nome: string, idade: number, tutor: string) {
        super(nome, idade, tutor);
    }

    public emitirSom(): void {
        console.log(this.getNome() + " está cantando: Piu piu!");
    }

    public descreverCuidados(): void {
        console.log(this.getNome() + " precisa de gaiola.");
    }
}

export { Ave };