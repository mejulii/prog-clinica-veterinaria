import { Animal } from "./Animal";
import { Funcionario } from "./Funcionario";

class Clinica {
    private nome: string;
    private funcionarios: Funcionario[];
    private animais: Animal[];

    constructor(nome: string) {
        this.nome = nome;
        this.funcionarios = [];
        this.animais = [];
    }

    public contratarFuncionario(f: Funcionario): void {
        this.funcionarios.push(f);
    }

    public cadastrarAnimal(a: Animal): void {
        this.animais.push(a);
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getFuncionarios(): Funcionario[] {
        return this.funcionarios;
    }

    public getAnimais(): Animal[] {
        return this.animais;
    }
}

export { Clinica };