import { Funcionario } from "./Funcionario";

class Veterinario extends Funcionario {
    private consultasRealizadas: number;
    private valorBonusPorConsulta: number;

    constructor(nome: string, matricula: string, salario: number, valorBonusPorConsulta: number) {
        super(nome, matricula, salario);
        this.consultasRealizadas = 0;
        this.valorBonusPorConsulta = valorBonusPorConsulta;
    }

    public getConsultasRealizadas(): number {
        return this.consultasRealizadas;
    }

    public setConsultasRealizadas(consultasRealizadas: number): void {
        this.consultasRealizadas = consultasRealizadas;
    }

    public getValorBonusPorConsulta(): number {
        return this.valorBonusPorConsulta;
    }

    public setValorBonusPorConsulta(valorBonusPorConsulta: number): void {
        this.valorBonusPorConsulta = valorBonusPorConsulta;
    }

    public realizarConsulta(): void {
        this.consultasRealizadas++;
        console.log("O veterinário " + this.getNome() + " realizou uma consulta.");
    }

    public prescreverTratamento(): void {
        console.log("O veterinário " + this.getNome() + " prescreveu um tratamento.");
    }

    public calcularBonus(): number {
        return this.consultasRealizadas * this.valorBonusPorConsulta;
    }
}

export { Veterinario };