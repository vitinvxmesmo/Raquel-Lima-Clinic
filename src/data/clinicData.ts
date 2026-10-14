/**
 * Configurações e Dados da Raquel Lima Clinic
 * 
 * ATENÇÃO:
 * - Para alterar o número de WhatsApp, substitua WHATSAPP_NUMBER abaixo pelo número
 *   oficial com código de país e DDD (sem traços ou espaços, ex: 5538999999999).
 * - Para substituir as fotografias, você pode simplesmente salvar seus arquivos em
 *   /public/images/ com os mesmos nomes ou alterar os caminhos nesta configuração.
 */

export const CLINIC_CONFIG = {
  brandName: "RAQUEL LIMA",
  brandSubtitle: "CLINIC",
  fullName: "Raquel Lima Clinic",
  legalName: "Raquel de Lima Pereira Ferreira",
  professionalName: "Dra. Raquel Lima",
  canonicalUrl: "https://raquellimaclinic.com.br",
  
  // NÚMERO OFICIAL DO WHATSAPP
  // Substitua pelo número real da clínica (com 55 + DDD + Número)
  whatsappNumber: "553899967338",
  contactPhone: "(38) 9996-7338",
  
  // Localização
  city: "Unaí",
  state: "MG",
  cityState: "Unaí — Minas Gerais",
  country: "Brasil",
  address: "Rua Calixto Martins de Melo, 142 — Unaí, MG",
  
  // Horários e Contatos
  openingHours: "Segunda a sexta: 08h às 18h · Sábado: 08h às 12h",
  openingHoursSaturday: "Sábado: 08h às 12h",
  openingHoursSunday: "Domingo: fechado",
  instagramHandle: "@dra.raquellimaunai",
  instagramUrl: "https://www.instagram.com/dra.raquellimaunai/",
  googleMapsQuery: "https://maps.app.goo.gl/b6WBfe8PhSY4iJMk7",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.2719275431623!2d-46.90226472485775!3d-16.360104484362306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9357aa2b1174fd2b%3A0xf1303cf266b7814e!2sClinica%20Dra%20Raquel%20Lima!5e0!3m2!1spt-PT!2sbr!4v1791492050271!5m2!1spt-PT!2sbr",
  
  // Registro profissional (CRO provisório / a ser preenchido)
  croInfo: "CRO-MG 22739",
  
  // Mensagens padrão de WhatsApp
  defaultMessage: "Olá! Vim pelo site da Raquel Lima Clinic e gostaria de saber mais sobre os atendimentos em Unaí.",
  consultationMessage: "Olá! Gostaria de agendar uma avaliação com a Dra. Raquel Lima na Raquel Lima Clinic em Unaí.",
  
  // Crédito de desenvolvimento
  developerName: "Voxtor Brasil",
  developerUrl: "https://voxtorbrasil.com",
};

/**
 * Mapeamento Semântico de Imagens para Alta Performance e SEO
 */
export const CLINIC_IMAGES = {
  hero: {
    src: "/images/foto 1.webp",
    alt: "Dra. Raquel Lima em consultório de odontologia e estética em Unaí, Minas Gerais",
    width: 900,
    height: 1200,
  },
  about: {
    src: "/images/foto 2.webp",
    alt: "Dra. Raquel Lima em retrato profissional de blazer escuro em ambiente clínico contemporâneo",
    width: 900,
    height: 1200,
  },
  clinicSpace: {
    src: "/images/foto 3.webp",
    alt: "Lounge de acolhimento e recepção arquitetônica da Raquel Lima Clinic em Unaí - MG",
    width: 1920,
    height: 1080,
  },
  consultationDetail: {
    src: "/images/raquel-lima-consulta-diagnostica-facial.jpg",
    alt: "Avaliação minuciosa de proporções faciais e planejamento de odontologia estética na clínica",
    width: 1200,
    height: 900,
  },
  ogImage: {
    src: "https://raquellimaclinic.com.br/images/og-raquel-lima-clinic.jpg",
    alt: "Raquel Lima Clinic — Odontologia e Estética em Unaí MG",
    width: 1200,
    height: 630,
  }
};

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  { id: "localizacao", question: "Qual é o endereço da Raquel Lima Clinic?", answer: "A clínica está localizada na Rua Calixto Martins de Melo, 142 — Unaí, MG. Consulte o mapa na seção de contato para planejar sua chegada." },
  { id: "agendamento", question: "Como agendar uma avaliação?", answer: "O agendamento é realizado por telefone ou WhatsApp. Entre em contato pelo número oficial para consultar os horários disponíveis." },
  { id: "primeira-consulta", question: "Como funciona a avaliação?", answer: "A consulta começa com a escuta das suas necessidades, características e objetivos. A indicação de qualquer tratamento depende de avaliação e planejamento individualizados." },
  { id: "procedimentos", question: "Quais tratamentos são realizados?", answer: "A clínica oferece Harmonização Facial Full Face, Implantes Dentários, Toxina Botulínica, Bioestimuladores de Colágeno e Lentes Dentais, sempre conforme indicação profissional." },
  { id: "horarios", question: "Quais são os horários de atendimento?", answer: "De segunda a sexta, das 08h às 18h; aos sábados, das 08h às 12h. Aos domingos, a clínica está fechada." },
  { id: "pacientes-regiao", question: "A clínica atende pacientes de outras cidades?", answer: "Entre em contato para verificar a disponibilidade de horários e organizar sua avaliação na clínica em Unaí, MG." }
];

const LEGACY_FAQ_ITEMS: FAQItem[] = [
  {
    id: "localizacao",
    question: "Onde fica a Raquel Lima Clinic em Unaí?",
    answer: "A Raquel Lima Clinic está localizada em Unaí, Minas Gerais. O espaço foi concebido como um refúgio privativo e discreto para proporcionar comodidade, segurança e tranquilidade a todos os pacientes durante a consulta e os procedimentos."
  },
  {
    id: "agendamento",
    question: "Como funciona o agendamento de consultas e avaliações?",
    answer: "Todos os atendimentos na clínica são realizados exclusivamente com hora marcada. Para agendar sua avaliação individualizada com a Dra. Raquel Lima, basta entrar em contato com nossa equipe pelo WhatsApp oficial. Auxiliaremos na escolha do melhor dia e horário."
  },
  {
    id: "procedimentos",
    question: "Quais procedimentos de odontologia e estética são realizados?",
    answer: "Nossa atuação contempla a odontologia estética do sorriso, harmonização facial anatômica, bioestímulo de colágeno, rejuvenescimento cutâneo e protocolos preventivos de longevidade, sempre com foco em resultados naturais que valorizam a beleza singular de cada pessoa."
  },
  {
    id: "primeira-consulta",
    question: "Como é estruturada a primeira consulta de avaliação?",
    answer: "A primeira consulta é dedicada à escuta detalhada das suas expectativas e à análise minuciosa da anatomia facial e dinâmica oclusal. Não realizamos procedimentos sem antes diagnosticar, planejar e alinhar com total clareza todas as etapas do cuidado."
  },
  {
    id: "horario-marcado",
    question: "A clínica atende convênios ou exclusivamente de forma particular?",
    answer: "Para assegurar tempo estendido de atendimento, biossegurança rigorosa e protocolos estritamente personalizados, a Raquel Lima Clinic opera na modalidade particular, fornecendo toda a documentação necessária para os pacientes."
  },
  {
    id: "pacientes-regiao",
    question: "A clínica recebe pacientes de outras cidades da região?",
    answer: "Sim. Recebemos regularmente pacientes de municípios vizinhos e de todo o Noroeste de Minas. Nossa equipe oferece suporte no alinhamento de horários estratégicos para facilitar sua viagem e retorno com total tranquilidade."
  }
];

/**
 * Helper para gerar link com mensagem no WhatsApp
 */
export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message || CLINIC_CONFIG.defaultMessage);
  return `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${text}`;
}

export interface SpecialtyItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  indications: string[];
}

export const SPECIALTIES: SpecialtyItem[] = [
  { id: "harmonizacao-full-face", number: "01", title: "Harmonização Facial Full Face", shortDescription: "Abordagem integrada que respeita proporções, características individuais e objetivos definidos na avaliação.", fullDescription: "Uma abordagem de harmonização que considera o rosto de maneira integrada, respeitando proporções, características individuais e objetivos definidos durante a avaliação profissional.", indications: ["Avaliação individualizada", "Planejamento facial integrado", "Respeito às características naturais"] },
  { id: "implantes-dentarios", number: "02", title: "Implantes Dentários", shortDescription: "Planejamento individualizado para reabilitar dentes perdidos e recuperar função e estética do sorriso, conforme indicação clínica.", fullDescription: "Uma alternativa para a reabilitação de dentes perdidos, com planejamento individualizado para recuperar função mastigatória e estética do sorriso, conforme a indicação clínica.", indications: ["Avaliação clínica", "Planejamento individualizado", "Reabilitação do sorriso"] },
  { id: "toxina-botulinica", number: "03", title: "Toxina Botulínica (Botox)", shortDescription: "Aplicação para indicações estéticas e funcionais pertinentes à atuação odontológica, após avaliação individualizada.", fullDescription: "Aplicação de toxina botulínica para indicações estéticas e funcionais pertinentes à atuação odontológica, após avaliação individualizada.", indications: ["Avaliação profissional", "Indicação estética ou funcional", "Plano individualizado"] },
  { id: "bioestimuladores", number: "04", title: "Bioestimuladores de Colágeno", shortDescription: "Tratamentos que buscam estimular a produção de colágeno de acordo com as características da pele e a indicação profissional.", fullDescription: "Tratamentos que buscam estimular a produção de colágeno, de acordo com as características da pele e a indicação profissional.", indications: ["Avaliação da pele", "Indicação profissional", "Acompanhamento individualizado"] },
  { id: "lentes-dentais", number: "05", title: "Lentes Dentais", shortDescription: "Tratamentos estéticos planejados conforme as características dentárias e necessidades de cada paciente.", fullDescription: "Tratamentos estéticos voltados à aparência do sorriso, planejados conforme as características dentárias e necessidades de cada paciente.", indications: ["Planejamento estético", "Avaliação das características dentárias", "Cuidado com a naturalidade"] }
];

const LEGACY_SPECIALTIES: SpecialtyItem[] = [
  {
    id: "harmonizacao-facial",
    number: "01",
    title: "Harmonização Facial",
    shortDescription: "Equilíbrio, proporções anatômicas e valorização da beleza individual com sutileza.",
    fullDescription: "A harmonização facial é conduzida sob o princípio da preservação da identidade. Cada traço é avaliado para realçar o que já existe de belo, sem exageros ou transformações artificiais.",
    indications: [
      "Planejamento estético tridimensional",
      "Estruturação de contornos com naturalidade",
      "Respeito às características anatômicas originais"
    ]
  },
  {
    id: "estetica-facial",
    number: "02",
    title: "Estética Facial & Rejuvenescimento",
    shortDescription: "Estímulo de colágeno, refinamento de textura cutânea e prevenção do envelhecimento.",
    fullDescription: "Tratamentos focados na vitalidade e saúde celular da pele. Através de tecnologias e injetáveis de padrão ouro, buscamos firmeza, luminosidade e desaceleração graciosa do tempo.",
    indications: [
      "Bioestimuladores de colágeno",
      "Suavização delicada de linhas de expressão",
      "Recuperação de densidade e brilho tecidual"
    ]
  },
  {
    id: "odontologia-estetica",
    number: "03",
    title: "Odontologia Estética",
    shortDescription: "Integração entre harmonia do sorriso, precisão funcional e conforto mastigatório.",
    fullDescription: "Um sorriso marcante nasce da união entre técnica odontológica refinada e sensibilidade estética. O desenho dental dialoga diretamente com as proporções da face.",
    indications: [
      "Avaliação funcional e estética do sorriso",
      "Refinamento de proporções dentárias",
      "Abordagem minimamente invasiva e individualizada"
    ]
  },
  {
    id: "protocolos-preventivos",
    number: "04",
    title: "Protocolos de Longevidade Facial",
    shortDescription: "Planejamento temporal contínuo para manter sua beleza autêntica ao longo dos anos.",
    fullDescription: "O verdadeiro cuidado estético não é reativo, mas preventivo e sustentável. Criamos uma linha de cuidado que acompanha cada fase da sua vida com consistência e naturalidade.",
    indications: [
      "Cronograma personalizado anual",
      "Manutenção preventiva de resultados",
      "Acompanhamento atento e acolhedor"
    ]
  },
  {
    id: "consulta-diagnostica",
    number: "05",
    title: "Consulta Diagnóstica Integrada",
    shortDescription: "Mapeamento minucioso, escuta ativa e diagnóstico individualizado antes de qualquer conduta.",
    fullDescription: "Nenhum procedimento é realizado sem um momento exclusivo para ouvir sua história, entender seus desejos e examinar criteriosamente as necessidades biológicas e estéticas.",
    indications: [
      "Escuta sem pressa em ambiente privativo",
      "Exame clínico detalhado e registros fotográficos",
      "Plano de tratamento transparente e exclusivo"
    ]
  }
];

export const CLINIC_PILLARS = [
  {
    title: "Escuta e Diagnóstico Individual",
    description: "Cada paciente possui uma história e anatomia singulares. O primeiro passo é sempre ouvir e compreender com profundidade."
  },
  {
    title: "Naturalidade sem Excessos",
    description: "Rejeitamos padrões artificiais e procedimentos padronizados em série. A elegância reside no detalhe quase imperceptível."
  },
  {
    title: "Integração Odonto-Estética",
    description: "O olhar clínico unificado entre sorriso e arquitetura facial garante harmonia verdadeira e coerência visual."
  },
  {
    title: "Sanctuário de Cuidado em Unaí",
    description: "Um espaço arquitetado para proporcionar serenidade, privacidade absoluta e uma experiência acolhedora."
  }
];
