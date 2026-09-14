export const business = {
  name: "Alléxia Sobrancelhas",
  professional: "Aléxia",
  whatsapp: "5519983376322",
  whatsappLink: "https://api.whatsapp.com/send?phone=5519983376322",
  instagram: "https://www.instagram.com/allexiamicro/",
  email: "contato@alexiasobrancelhas.com.br",
  address: {
    street: "R. José de Oliveira, 359 - Sala 101",
    neighborhood: "Jd Paiquerê",
    city: "Valinhos",
    state: "SP",
    stateFull: "São Paulo",
    postalCode: "13270-000",
    country: "BR",
    full: "R. José de Oliveira, 359 - Sala 101 - Jd Paiquerê, Valinhos – SP",
  },
  // Approximate coordinates for the Jd Paiquerê / Valinhos studio area.
  geo: {
    latitude: -22.9707,
    longitude: -46.9937,
  },
} as const;

export const nanopigmentacao = {
  name: "Nanopigmentação fio a fio",
  price: 890,
  priceDisplay: "R$890",
  installments: "10x no cartão de crédito",
  sessionDuration: "De 1h30 a 2h",
  resultDuration: "De 8 a 12 meses, de acordo com cuidados pós micro",
  bookingFee: 50,
  bookingFeeDisplay: "R$ 50,00",
  simulationNote:
    "A simulação é agendada para montar um plano de construção da sobrancelha: inclui anamnese, testes de segurança, avaliação da saúde da pele e das preferências da cliente dentro da técnica da Aléxia.",
} as const;
