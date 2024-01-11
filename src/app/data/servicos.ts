import transferencia from "../../../public/servicos/transferencia.png"
import moto from "../../../public/servicos/moto.png"
import microonibus from "../../../public/servicos/microonibus.png"
import caminhao from "../../../public/servicos/caminhao.png"
import licenciamento from "../../../public/servicos/licenciamento.png"
import docs from "../../../public/servicos/documents.png"
import paper from "../../../public/servicos/paper.png"
import caracteristicas from "../../../public/servicos/troca-de-caracteristica.png"
import antt from "../../../public/servicos/Logo_ANTT_Color.png"
import emplacamento from "../../../public/servicos/emplacamento.png"

export const servicos = [
    {
        id: 1,
        name: "Transferência",
        img: transferencia,
        description: "Transferência de propriedade de veículos",
    },
    {
        id: 2,
        name: "Licenciamentos",
        img: licenciamento,
        description: "Licenciamento de veículos",
    },
    {
        id: 3,
        name: "Requerimentos",
        img: paper,
        description: "Requerimentos",
    },
    {
        id: 4,
        name: "Procurações",
        img: docs,
        description: "Procurações",
    },
    {
        id: 5,
        name: "Contratos ",
        img: paper,
        description: "Contratos de compra e venda de veículos",
    },
    {
        id: 6,
        name: "Comunicação de venda",
        img: docs,
        description: "Comunicação de venda",
    },
    {
        id: 7,
        name: "Troca de Características",
        img: caracteristicas,
        description: "Alteração de Característica Veículares",
    },
    {
        id: 8,
        name: "ANTT",
        img: antt,
        description: "Cadastro e Renovação de ANTT",
    },
    {
        id: 9,
        name: "Emplacamento",
        img: emplacamento,
        description: "Emplacamento de veículos",
    },
    {
        id: 10,
        name: "Documentação Veicular",
        img: moto,
        description: "Regularização de documentação veicular",
    },
    {
      id: 11,
      name: "Caminhões, Ônibus e Micro-ônibus",
      img: caminhao,
      description: "Regularização de Caminhões, Ônibus e Micro-ônibus",
    },
    {
      id: 12,
      name: "Motorhome",
      img: microonibus,
      description: "Regularização de Motorhome",
    },
    {
      id: 13,
      name: "CDPPO",
      img: paper,
      description: "Solicitação de DCPPO (Documento Provisório)",
    }
]