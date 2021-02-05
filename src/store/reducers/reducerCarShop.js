const ESTADO_INICIAL = {
  roupa: [{}],
  feed: [
    {
      id: 1,
      produto: "Super Mario Size",
      tamanho: "80 cm",
      preco: "150,00",
    },
    {
      id: 2,
      produto: "Freddy Ultimate",
      tamanho: "100 cm",
      preco: "50,00",
    },
    {
      id: 3,
      produto: "Relógio Mulher Maravilha",
      tamanho: "M",
      preco: "88,00",
    },
  ],
};

export default function roupas(state = ESTADO_INICIAL, action) {
  if (action.type === "ADICIONAR_CARRINHO") {
    return {
      ...state,
      roupa: action.roupas,
    };
  }
  return state;
}
