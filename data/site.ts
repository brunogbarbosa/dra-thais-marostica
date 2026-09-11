export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };
export const site = {
  name: 'Thais Maróstica', monogram: 'TM',
  headline: 'Harmonização com identidade. Cuidado que valoriza você.',
  cro: 'CRO-SP 120.169',
  bio: 'Especialista e mentora em Harmonização Orofacial e endodontista em São José do Rio Preto. Um olhar atento aos seus traços e à sua história, com planejamento individualizado e cuidado em cada etapa.',
  education: [] as string[], specialties: ['Harmonização Orofacial', 'Endodontia'],
  phone: '+55 (17) 99149-4655', whatsapp: '5517991494655', whatsappUrl: '',
  address: 'São José do Rio Preto · SP', professionalPhilosophy: '',
  instagram: 'https://www.instagram.com/drathaismarostica/', instagramHandle: '@drathaismarostica',
  philosophy: ['NATURALIDADE', 'ANTES DE', 'EXCESSOS.'],
  colors: { paper: '#faf5ef', ink: '#442b27', taupe: '#a54844', champagne: '#edcfba', dark: '#442b27' },
  images: { hero: '/images/thais-portrait.webp', about: '/images/thais-atendimento.webp', beauty: '/images/thais-close.webp' },
  procedures: [
    {name:'Harmonização orofacial',description:'Um planejamento que considera proporções, contornos e a singularidade do seu rosto.',image:''},
    {name:'Cuidado com os lábios',description:'Atenção ao desenho e à harmonia dos lábios, respeitando seus traços.',image:''},
    {name:'Endodontia',description:'Cuidado com a saúde do dente, a partir de uma avaliação individual.',image:''},
  ] as Procedure[],
  office: [] as {src:string;alt:string}[], testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image:'/images/resultado-perfil.webp',label:'Equilíbrio de perfil',alt:'Registro original de antes e depois do perfil, fornecido para o site da Dra. Thais Maróstica',orientation:'horizontal',beforeShare:648/1280,comparisonRatio:648/1280 },
    { image:'/images/resultado-labios.webp',label:'Delicadeza nos detalhes',alt:'Registro original de antes e depois de lábios, Dra. Thais Maróstica',orientation:'horizontal',beforeShare:.5,comparisonRatio:640/1222 },
    { image:'/images/resultado-contorno.webp',label:'Contornos e expressão',alt:'Registro original de antes e depois do contorno facial, Dra. Thais Maróstica',orientation:'vertical',beforeShare:636/1280,comparisonRatio:1266/636 },
    { image:'/images/resultado-harmonia.webp',label:'Harmonia em cada ângulo',alt:'Registro original de antes e depois do perfil facial, Dra. Thais Maróstica',orientation:'horizontal',beforeShare:.5,comparisonRatio:.5 },
    { image:'/images/resultado-detalhe.webp',label:'A beleza do detalhe',alt:'Registro de lábios fornecido para o site da Dra. Thais Maróstica',orientation:'single',beforeShare:.5,comparisonRatio:818/1280 },
  ] },
  seo: { title:'Dra. Thais Maróstica | Harmonização Orofacial em Rio Preto', description:'Harmonização Orofacial e Endodontia em São José do Rio Preto. Conheça a Dra. Thais Maróstica, CRO-SP 120.169, e agende sua avaliação.', url:'' },
};
export const appointmentUrl = site.whatsappUrl || (site.whatsapp ? `https://wa.me/${site.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent('Olá, gostaria de agendar uma avaliação com a Dra. Thais.')}` : site.instagram);
