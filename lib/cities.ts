import type { CitySlug } from "./testimonials";

export type City = {
  slug: CitySlug;
  name: string;
  state: "SP";
  /** Approximate driving time from the city center to the Valinhos studio. Confirm before publishing. */
  approxTravelTime: string;
  /** One differentiating angle for this city's intro paragraph. */
  intro: string;
};

export const cities: City[] = [
  {
    slug: "valinhos",
    name: "Valinhos",
    state: "SP",
    approxTravelTime: "no bairro Jd Paiquerê, mesma cidade do estúdio",
    intro:
      "O estúdio da Aléxia fica em Valinhos, no Jd Paiquerê — perto do Condomínio Millenium e do Colégio Porto Seguro. Se você já é ou está pesquisando sobre nanopigmentação de sobrancelhas aqui na cidade, está no lugar certo.",
  },
  {
    slug: "vinhedo",
    name: "Vinhedo",
    state: "SP",
    approxTravelTime: "cerca de 15 a 20 minutos de carro",
    intro:
      "Vinhedo fica a poucos minutos de Valinhos, e boa parte das clientes da Aléxia vem exatamente desse trajeto curto — dá pra encaixar a sessão de nanopigmentação sem virar o dia de cabeça pra baixo.",
  },
  {
    slug: "campinas",
    name: "Campinas",
    state: "SP",
    approxTravelTime: "cerca de 25 a 35 minutos de carro, dependendo da região",
    intro:
      "Mesmo com todos os estúdios de estética que Campinas tem, muitas clientes preferem atravessar até Valinhos pela técnica de fio a fio hiper-realista da Aléxia — o resultado natural é o que mais pesa na decisão.",
  },
  {
    slug: "itatiba",
    name: "Itatiba",
    state: "SP",
    approxTravelTime: "cerca de 35 a 45 minutos de carro",
    intro:
      "De Itatiba, o deslocamento até o estúdio em Valinhos costuma valer a pena justamente pela durabilidade do procedimento: com resultado de 8 a 12 meses, não é uma viagem recorrente toda semana.",
  },
  {
    slug: "jundiai",
    name: "Jundiaí",
    state: "SP",
    approxTravelTime: "cerca de 40 a 50 minutos de carro",
    intro:
      "Jundiaí é a cidade mais distante do estúdio entre as que a Aléxia atende, e ainda assim várias clientes fazem esse trajeto — geralmente depois de ver o resultado de alguma amiga ou nas redes sociais.",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
