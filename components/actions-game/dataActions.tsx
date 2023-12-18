import Pedra from '../../public/assests/pedra.png'
import Tesoura from '../../public/assests/tesoura.png'
import Papel from '../../public/assests/papel.png'
import PapelPC from '../../public/assests/TELAPAPEL.png'
import TesouraPC from '../../public/assests/TELATESOURA.png'
import PedraPC from '../../public/assests/TELAPEDRA.png'

export const DataPlayer = [
    {
        value: 1,
        nome: 'Pedra',
        imagem: Pedra,
    },
    {
        value: 3,
        nome: 'Papel',
        imagem: Papel,
    },
    {
        value: 2,
        nome: 'Tesoura',
        imagem: Tesoura,
    },
]

export const DataComputer = [
    {
        value: 1,
        nome: 'Pedra',
        imagem: PedraPC,
    },
    {
        value: 2,
        nome: 'Tesoura',
        imagem: TesouraPC,
    },
    {
        value: 3,
        nome: 'Papel',
        imagem: PapelPC,
    },
]

export const valueTypeEnum = {
    PEDRA:1,
    TESOURA:2,
    PAPEL:3
}