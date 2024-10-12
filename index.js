class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar (){
        let ataque
        switch (this.tipo) {
            case 'mago':
                ataque = "magia"                
                break;
            case 'guerreiro':
                ataque = "espada"                
                break;
            case 'monge':
                ataque = "artes marciais"                
                break;
            case 'ninja':
                ataque = "shuriken"                
                break;                    
            default:
                break;
        }
        console.log ("o " + this.tipo + " atacou usando " + ataque)
        }
}

const heroi1 = new Heroi('Arthur', 30, 'guerreiro');
const heroi2 = new Heroi('Merlin', 150, 'mago');

heroi1.atacar(); // O guerreiro atacou usando espada
heroi2.atacar(); // O mago atacou usando magia