//Lembrando que o modelo criado deve ser igual a forma que é retornado pela Api.
//Aqui nesse caso , é selecionado apenas os valores necessários mas na ordem em que aparecem 
//na api.


export type Pokemon = {
    name:string,
    id:number,
    sprites: {
        front_default:string
    },
    types:{
        slot:number,
        type:{
            name:string,
            url:string
        }
    }[]
}