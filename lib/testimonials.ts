export type Testimonial = {
  quote: string;
  author: string;
};

export type CitySlug =
  | "vinhedo"
  | "valinhos"
  | "campinas"
  | "itatiba"
  | "jundiai";

export const testimonialsByCity: Record<CitySlug, Testimonial[]> = {
  vinhedo: [
    {
      quote:
        "Eu não aguento essa sobrancelha belíssima! Eu olho as fotos de antes e depois e fico chocada com a diferença.",
      author: "Liz",
    },
    {
      quote: "Me arrependi por não ter feito antes!",
      author: "Ivana",
    },
    {
      quote:
        "Muito feliz! Obrigada pelo trabalho, por me ouvir, foi tudo uma delícia. Amei muito o processo e o resultado.",
      author: "Duda",
    },
  ],
  valinhos: [
    {
      quote:
        "Excelente profissional, muito bem qualificada. Produtos extremamente higienizados, ótima experiência — minha autoestima está muito melhor.",
      author: "Patricia",
    },
    {
      quote: "A Aléxia é uma fofa e o trabalho dela é impecável.",
      author: "M.P",
    },
    {
      quote:
        "Profissional maravilhosa, super atenciosa e com uma mão que faz mágica. Não tive dor e o resultado foi ótimo, atendeu todos os meus pedidos e me deixou com um olhar maravilhoso. Super recomendo.",
      author: "Tainá N.",
    },
  ],
  campinas: [
    {
      quote:
        "Levei minha mãe pra fazer a micro de presente. Ela tinha vergonha por não ter pelinhos na sobrancelha. Saiu de lá realizada e muito feliz, mesmo com pele madura o resultado ficou perfeito e natural. Recomendo de olhos fechados.",
      author: "Natalia S.",
    },
    {
      quote:
        "Espaço maravilhoso, aconchegante, a profissional excelente. Um carinho e cuidado que não se mede!",
      author: "Maju",
    },
    {
      quote: "Mãos de fada, quanto talento!",
      author: "Djennane M",
    },
  ],
  itatiba: [
    {
      quote:
        "Allexia é maravilhosa, excelente profissional e atendimento impecável.",
      author: "Cris",
    },
    {
      quote:
        "Perfeito como sempre! Allexia sempre se preocupa com o bem-estar das clientes e em deixá-las o mais lindas possível. Sempre atende com amor e carinho.",
      author: "Nat P.",
    },
    {
      quote:
        "Maravilhosaaaaaa! Super dedicada e atendendo todas as minhas necessidades. Não paro de olhar minhas novas sobrancelhas.",
      author: "Larissa",
    },
  ],
  jundiai: [
    {
      quote:
        "Profissional competente, paciente e atenciosa. Eu tinha muita insegurança em relação ao procedimento e ela me explicou e mostrou qual poderia ser o resultado. Hoje não vivo sem — minha autoestima é outra.",
      author: "Aline P.",
    },
    {
      quote:
        "Incrível! Minha sobrancelha é bem clarinha e rala e eu tinha medo de ficar artificial. A Aléxia fez o design de teste antes, testou a cor da tinta, e só tinha como dar certo. Amei a praticidade de poder dormir e acordar pronta.",
      author: "Pamela",
    },
    {
      quote:
        "Excelente profissional, ótimo atendimento. Superou minhas expectativas, ambiente super agradável. Parabéns.",
      author: "Hélida",
    },
  ],
};
