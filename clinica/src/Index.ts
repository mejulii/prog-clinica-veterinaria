import { Clinica } from "./Clinica";
import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato";
import { Ave } from "./Ave";
import { Veterinario } from "./Veterinario";
import { Recepcionista } from "./Recepcionista";
import { Consulta } from "./Consulta";

const clinica = new Clinica("Clínica da Dona Marta");

const Cachorro1 = new Cachorro("Rex", 4, "Ana");
const Gato1 = new Gato("Mimi", 2, "Carlos");
const Ave1 = new Ave("Dudi", 1, "Paula");

const Veterinario1 = new Veterinario("Dr. João", "V001", 5000, 50);
const Recepcionista1 = new Recepcionista("Lúcia", "R001", 2500, 20);

clinica.cadastrarAnimal(Cachorro1);
clinica.cadastrarAnimal(Gato1);
clinica.cadastrarAnimal(Ave1);

clinica.contratarFuncionario(Veterinario1);
clinica.contratarFuncionario(Recepcionista1);

console.log(clinica);

Cachorro1.emitirSom();
Cachorro1.descreverCuidados();

Gato1.emitirSom();
Gato1.descreverCuidados();

Ave1.emitirSom();
Ave1.descreverCuidados();

Recepcionista1.agendarAtendimento();

const Consulta1 = new Consulta(Cachorro1, Veterinario1, new Date());

Veterinario1.realizarConsulta();
Veterinario1.prescreverTratamento();

console.log(Consulta1);

console.log("Bônus do veterinário: " + Veterinario1.calcularBonus());
console.log("Bônus da recepcionista: " + Recepcionista1.calcularBonus());

Veterinario1.alterarSalario(5500);

console.log("Novo salário: " + Veterinario1.getSalario());

Veterinario1.alterarSalario(-100);