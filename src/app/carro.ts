// Se utiliza para transportar el objeto Carro, como Entidad en todo el proyecto.
export type Carro = {
    id: number;
    name: string;
}
// Se utiliza para crear los objetos Query de GraphQL
export type Query = {
    carros: Carro[];
    carro:Carro;
}