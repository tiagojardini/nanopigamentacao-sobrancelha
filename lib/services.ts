export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  priceDisplay: string;
  sessionDuration?: string;
  resultDuration?: string;
};

export const services: Service[] = [
  {
    slug: "design-estrategico",
    name: "Design Estratégico de Sobrancelhas",
    shortDescription: "Harmonização do desenho da sobrancelha com o rosto.",
    description:
      "O design de sobrancelhas harmoniza o desenho da sobrancelha em relação ao rosto, criando pontos estratégicos a partir das próprias medidas faciais, o que garante um resultado personalizado para cada cliente.",
    priceDisplay: "R$80 (linha egípcia + pinça) ou R$95 com tintura RefectoCil",
  },
  {
    slug: "brow-lamination",
    name: "Brow Lamination",
    shortDescription: "Alinhamento e reestruturação natural dos fios.",
    description:
      "Também chamada de laminação de sobrancelha, é uma técnica não invasiva que reestrutura e remodela os fios, valorizando uma estética natural. Surgiu na Rússia, fez sucesso na Europa e hoje conquista as brasileiras.",
    priceDisplay: "R$220 à vista",
    sessionDuration: "De 60 a 90 minutos",
  },
  {
    slug: "lash-lifting",
    name: "Lash Lifting",
    shortDescription: "Curva, alonga e hidrata os fios naturais dos cílios.",
    description:
      "Diferente do alongamento fio a fio, o lash lifting não usa fios artificiais — ele cria o efeito de cílios alongados e curvados usando os próprios fios. Procedimento indolor, você só precisa manter os olhos fechados enquanto os produtos agem.",
    priceDisplay: "R$170",
    sessionDuration: "De 45 a 60 minutos",
    resultDuration: "4 a 6 semanas, de acordo com os cuidados recomendados",
  },
  {
    slug: "epilacao-facial",
    name: "Epilação Facial e Buço",
    shortDescription: "Epilação com linha, técnica precisa e delicada.",
    description:
      "Epilação com linha para o rosto e buço, uma técnica precisa que respeita a pele e o formato natural da região.",
    priceDisplay: "Facial R$65 · Buço R$25",
  },
];
