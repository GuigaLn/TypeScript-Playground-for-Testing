export class Idade {
    private readonly idadeMaxima = 130;
    private readonly idadeAdulta = 18;

    validaIdade(idade: number | string)  {
        const parseNumber = Number(idade);

        /* Verifica se a idade é número e inteiro */
        if(!Number.isInteger(parseNumber)) return "Idade é inválida";

        /* Verifica se a idade é menor que 0 */
        if(parseNumber < 0) return "Idade é menor que 0";

        /* Verifica se idade é maior que Idade Máxima */
        if(parseNumber > this.idadeMaxima) return "Idade é maior que idade máxima";

        /* Verifica se idade é adulto */
        if(parseNumber <= this.idadeAdulta) return "Pessoa não é adulta";
        
        return "Idade é válida";
    }
}