import { IOcupacao } from "./Ocupacao";
import { IColoracao } from "./Coloracao";
import { ICaracteristica } from "./Caracteristica";
export default class Goblin {
    ocupacao: IOcupacao;
    coloracao: IColoracao;
    caracteristica: ICaracteristica;
    equipamentos: string[];
    nome: string;
    constructor(nome?: string);
    private generateName;
    get combate(): Number;
    get conhecimento(): Number;
    get habilidade(): Number;
    get sorte(): Number;
}
