import { Funcionario } from "./Funcionario";

class Recepcionista extends Funcionario {
    private agendamentosConfirmados: number;
    private valorBonusPorAgendamento: number;

    constructor(nome: string, matricula: string, salario: number, valorBonusPorAgendamento: number) {
        super(nome, matricula, salario);
        this.agendamentosConfirmados = 0;
        this.valorBonusPorAgendamento = valorBonusPorAgendamento;
    }

    public getAgendamentosConfirmados(): number {
        return this.agendamentosConfirmados;
    }

    public setAgendamentosConfirmados(agendamentosConfirmados: number): void {
        this.agendamentosConfirmados = agendamentosConfirmados;
    }

    public getValorBonusPorAgendamento(): number {
        return this.valorBonusPorAgendamento;
    }

    public setValorBonusPorAgendamento(valorBonusPorAgendamento: number): void {
        this.valorBonusPorAgendamento = valorBonusPorAgendamento;
    }

    public agendarAtendimento(): void {
        this.agendamentosConfirmados++;
        console.log("A recepcionista " + this.getNome() + " confirmou um agendamento.");
    }

    public calcularBonus(): number {
        return this.agendamentosConfirmados * this.valorBonusPorAgendamento;
    }
}

export { Recepcionista };