import bannerFacade from '../assets/images/banner_antonia_ribeiro_facade_1793468405963.jpg';
import salonInterior from '../assets/images/salon_interior_luxury_1793467616606.jpg';
import hairShowcase from '../assets/images/hair_transformation_showcase_1793467616863.jpg';
import specialistPortrait from '../assets/images/antonia_stylist_portrait_1793467629614.jpg';
import spaTreatment from '../assets/images/spa_treatment_hair_1793467628790.jpg';
import nailArt from '../assets/images/nail_art_elegance_1793467641637.jpg';
import brunetteHighlights from '../assets/images/brunette_morena_iluminada_1793467641840.jpg';

export interface ServiceItem {
  id: string;
  category: 'mechas' | 'tratamento' | 'corte' | 'estetica';
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  priceFrom: string;
  popular?: boolean;
  image: string;
  includes: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  neighborhood: string;
  service: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SALON_DATA = {
  name: 'Antônia Ribeiro',
  fullName: 'Salão Antônia Ribeiro - Estética, Saúde, Beleza',
  brandTagline: 'Estética · Saúde · Beleza',
  city: 'Belém - PA',
  neighborhood: 'Marco',
  address: 'Tv. Dr. Enéas Pinheiro, 2672 – Marco, Belém - PA, 66095-015',
  googleMapsUrl: 'https://maps.app.goo.gl/xx87jq6HLmm7vLdM9',
  wazeUrl: 'https://waze.com/ul?q=Tv.+Dr.+Enéas+Pinheiro,+2672+Marco+Belém',
  defaultWhatsApp: '5591988397430',
  phoneWhatsAppDisplay: '(91) 98839-7430',
  phoneLandline: '(91) 3276-0255',
  instagram: '@studioantoniaribeiro',
  rating: 4.9,
  reviewsCount: 384,
  yearsExperience: 14,
  clientsServed: '2.500+',
  schedule: {
    weekdays: 'Terça a Sábado: 08:30 às 19:00',
    sundayMonday: 'Segunda & Domingo: Sob consulta para Noivas e Eventos',
  },
  images: {
    facade: bannerFacade,
    hero: salonInterior,
    specialist: specialistPortrait,
    blondTransformation: hairShowcase,
    brunetteLights: brunetteHighlights,
    spa: spaTreatment,
    nails: nailArt,
  },
  amenities: [
    { title: 'Ambiente Climatizado', desc: 'Espaço requintado, fresco e acolhedor' },
    { title: 'Cafeteria & Drinks Cortesia', desc: 'Cappuccino, café expresso, sucos e taça de espumante' },
    { title: 'Wi-Fi de Alta Velocidade', desc: 'Trabalhe ou relaxe enquanto cuidamos de você' },
    { title: 'Fácil Estacionamento', desc: 'Vagas seguras em frente na Tv. Dr. Enéas Pinheiro' },
    { title: 'Biossegurança Rígida', desc: 'Materiais 100% autoclavados e descartáveis' },
    { title: 'Marcas Internacionais', desc: 'Kérastase, L’Oréal Professionnel, Wella & Truss' },
  ],
  services: [
    {
      id: 'mechas-loiro',
      category: 'mechas',
      categoryLabel: 'Mechas & Cores',
      title: 'Loiro dos Sonhos & Mechas Personalizadas',
      subtitle: 'Técnica exclusiva sem agressão à fibra',
      description: 'Construção personalizada de mechas adaptada ao seu tom de pele e formato de rosto (Babylights, Balayage, AirTouch). Mantém a elasticidade e o brilho intenso dos fios.',
      duration: 'Aprox. 4h a 5h',
      priceFrom: 'R$ 380',
      popular: true,
      image: hairShowcase,
      includes: [
        'Diagnóstico e teste de mecha prévio obrigatório',
        'Tonalização com neutralizadores de alta tecnologia',
        'Tratamento Reconstrutor Imediato pós-química',
        'Escova modelada e finalização iluminada'
      ]
    },
    {
      id: 'morena-iluminada',
      category: 'mechas',
      categoryLabel: 'Mechas & Cores',
      title: 'Morena Iluminada Sofisticada',
      subtitle: 'Contraste sutil e brilho quente',
      description: 'Efeito luminoso nos tons avelã, caramelo, mel dourado ou canela tostada. Perfeito para quem busca iluminação natural sem a manutenção constante de um loiro platinado.',
      duration: 'Aprox. 3h30',
      priceFrom: 'R$ 290',
      popular: true,
      image: brunetteHighlights,
      includes: [
        'Avaliação prévia da saúde capilar',
        'Design de contorno facial luminoso',
        'Tratamento de nutrição profunda com óleos nobres',
        'Escova e babyliss ondulado'
      ]
    },
    {
      id: 'spa-terapia-capilar',
      category: 'tratamento',
      categoryLabel: 'Tratamentos & SPA',
      title: 'Terapia Capilar & Cronograma de Luxo',
      subtitle: 'Recuperação intensiva com massagem craniana',
      description: 'Protocolo completo de desintoxicação do couro cabeludo, reposição de massa lipídica, hidratação profunda e selagem de cutículas com vapor de ozônio.',
      duration: 'Aprox. 1h30',
      priceFrom: 'R$ 150',
      popular: false,
      image: spaTreatment,
      includes: [
        'Lavagem relaxante no lavatório ergonômico',
        'Massagem craniana relaxante antistress',
        'Vaporização com ozônio para penetração profunda',
        'Leave-in protetor térmico e escova com brilho espelhado'
      ]
    },
    {
      id: 'alinhamento-gloss',
      category: 'tratamento',
      categoryLabel: 'Tratamentos & SPA',
      title: 'Alinhamento Térmico Orgânico & Botox Gloss',
      subtitle: 'Zero formol · Efeito liso natural e sedoso',
      description: 'Redução de volume e eliminação do frizz com fórmula rica em aminoácidos da Amazônia e ácido hialurônico. Fios com movimento natural e balanço suave.',
      duration: 'Aprox. 2h30',
      priceFrom: 'R$ 220',
      popular: false,
      image: salonInterior,
      includes: [
        'Sem ardência, cheiro forte ou fumaça tóxica',
        'Compatível com quase todas as químicas',
        'Nutrição seladora de pontas',
        'Durabilidade de 3 a 5 meses'
      ]
    },
    {
      id: 'corte-visagismo',
      category: 'corte',
      categoryLabel: 'Cortes & Finalização',
      title: 'Corte Visagista & Escova Modelada',
      subtitle: 'Design sob medida que harmoniza seus traços',
      description: 'Análise personalizada da textura dos fios, rotina diária e formato do rosto para criar um corte prático, contemporâneo e cheio de movimento.',
      duration: 'Aprox. 1h',
      priceFrom: 'R$ 90',
      popular: false,
      image: hairShowcase,
      includes: [
        'Consulta visagista individual',
        'Lavagem purificante com massagem relaxante',
        'Finalização modelada com escova ou babyliss'
      ]
    },
    {
      id: 'unhas-gel-blindagem',
      category: 'estetica',
      categoryLabel: 'Unhas & Estética',
      title: 'Spa dos Pés, Blindagem & Alongamento em Gel',
      subtitle: 'Unhas impecáveis e duradouras',
      description: 'Cutilagem russa ou combinada de altíssima precisão, esmaltação em gel com brilho espelhado que não descasca e blindagem protetora para unhas frágeis.',
      duration: 'Aprox. 1h30',
      priceFrom: 'R$ 80',
      popular: false,
      image: nailArt,
      includes: [
        'Instrumentais 100% esterilizados em autoclave',
        'Esmaltes hipoalergênicos de longa duração',
        'Hidratação profunda com massagem reflexológica rápida',
        'Garantia de retoque de 7 dias para gel'
      ]
    }
  ] as ServiceItem[],
  reviews: [
    {
      id: 'rev-1',
      name: 'Mariana Vasconcelos',
      neighborhood: 'Marco, Belém',
      service: 'Loiro dos Sonhos & Tratamento',
      rating: 5,
      date: 'Há 1 semana',
      text: 'Simplesmente a melhor experiência de salão em Belém! A Antonia é extremamente minuciosa e honesta. Ela fez o teste de mecha primeiro e o resultado do meu loiro ficou impecável, sem quebrar um fio. O café e a massagem no lavatório são divinos!',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      verified: true
    },
    {
      id: 'rev-2',
      name: 'Juliana P. Albuquerque',
      neighborhood: 'Nazaré, Belém',
      service: 'Morena Iluminada Canela',
      rating: 5,
      date: 'Há 2 semanas',
      text: 'Moro em Nazaré e atravessei a cidade para vir no Marco por indicação da minha irmã. Valeu cada minuto! A iluminação ficou sutil, elegante e com um brilho de cinema. Atendimento pontual e equipe super atenciosa.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      verified: true
    },
    {
      id: 'rev-3',
      name: 'Camila Fernandes Barata',
      neighborhood: 'Marco / Pedreira, Belém',
      service: 'Terapia Capilar & Corte',
      rating: 5,
      date: 'Há 3 semanas',
      text: 'O salão é lindo, cheiroso, climatizado e muito tranquilo. O corte devolveu vida para o meu cabelo sem tirar o comprimento que eu queria. Já virei cliente fiel da Antonia!',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      verified: true
    },
    {
      id: 'rev-4',
      name: 'Dra. Beatriz Mendes',
      neighborhood: 'Umarizal, Belém',
      service: 'Blindagem de Unhas & Escova Gloss',
      rating: 5,
      date: 'Há 1 mês',
      text: 'Agendei pelo WhatsApp em 2 minutos e fui atendida exatamente no horário marcado. Para quem tem rotina corrida na área da saúde, pontualidade e excelência fazem toda a diferença.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      verified: true
    }
  ] as ReviewItem[],
  faqs: [
    {
      question: 'Preciso agendar com antecedência?',
      answer: 'Recomendamos agendar com pelo menos 2 a 3 dias de antecedência para garantir seu horário de preferência, especialmente para mechas e aos finais de semana (quinta a sábado). O agendamento é feito de forma rápida pelo nosso WhatsApp.'
    },
    {
      question: 'Vocês fazem teste de mecha antes de fazer clareamento?',
      answer: 'Sim, sempre! A saúde do seu cabelo é nossa prioridade inegociável. Realizamos o diagnóstico capilar e teste de mecha prévio para assegurar que a fibra suportará o processo químico com total segurança e integridade.'
    },
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Aceitamos Pix (com condições especiais), cartões de crédito (com opção de parcelamento em até 6x para procedimentos maiores) e cartões de débito.'
    },
    {
      question: 'Onde o salão fica localizado e tem estacionamento?',
      answer: 'Estamos na Tv. Dr. Enéas Pinheiro, nº 2672, no tradicional bairro do Marco em Belém - PA (próximo à UEPA e Av. Duque de Caxias). O local conta com fácil estacionamento na frente e é de fácil acesso por transporte próprio ou aplicativo.'
    },
    {
      question: 'Tem algum benefício para minha primeira visita?',
      answer: 'Sim! Clientes que agendam pela primeira vez através desta landing page recebem um Diagnóstico Capilar Personalizado e um Tratamento de Brilho Espelhado de cortesia junto com qualquer procedimento.'
    }
  ] as FaqItem[]
};
