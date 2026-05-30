export const WA_NUMBER = "237690722872";
export const WA_MESSAGE = encodeURIComponent("Bonjour R&C System, je souhaite avoir plus d'informations sur vos services.");
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
export const PHONE_PRIMARY = "+237 690 722 872";
export const PHONE_SECONDARY = "+237 674 161 584";
export const EMAIL = "r_csystem@yahoo.com";
export const ADDRESS = "Biyem-Assi Lycée, En face d'Express Union, Cameroun";

export const services = [
  {
    id: 1,
    icon: "FaDesktop",
    title: "Maintenance Informatique",
    description: "Diagnostic, réparation et entretien préventif de vos équipements informatiques. Nous garantissons la disponibilité maximale de vos systèmes.",
    color: "#0A4D9D",
  },
  {
    id: 2,
    icon: "FaNetworkWired",
    title: "Maintenance Réseau",
    description: "Surveillance, maintenance et optimisation de vos infrastructures réseau pour des performances maximales et sans interruption.",
    color: "#1E88E5",
  },
  {
    id: 3,
    icon: "FaServer",
    title: "Installation Réseau",
    description: "Conception et déploiement d'infrastructures réseau complètes : câblage structuré, Wi-Fi, VPN, et équipements actifs.",
    color: "#00C2FF",
  },
  {
    id: 4,
    icon: "FaSitemap",
    title: "Administration Réseau",
    description: "Gestion et administration de vos serveurs et équipements réseau. Configuration, monitoring et optimisation continue.",
    color: "#0A4D9D",
  },
  {
    id: 5,
    icon: "FaShieldAlt",
    title: "Cybersécurité",
    description: "Protection de vos données et systèmes contre les cybermenaces. Audits de sécurité, pare-feu, antivirus et politiques de sécurité.",
    color: "#1E88E5",
  },
  {
    id: 6,
    icon: "FaLightbulb",
    title: "Conseil IT",
    description: "Accompagnement stratégique pour optimiser votre infrastructure IT. Audit, planification et recommandations expertes.",
    color: "#00C2FF",
  },
  {
    id: 7,
    icon: "FaHeadset",
    title: "Support Technique",
    description: "Assistance technique réactive pour résoudre rapidement vos problèmes informatiques. Intervention sur site ou à distance.",
    color: "#0A4D9D",
  },
  {
    id: 8,
    icon: "FaGraduationCap",
    title: "Formation IT",
    description: "Programmes de formation sur mesure pour vos équipes : utilisation des outils, sécurité informatique, administration réseau.",
    color: "#1E88E5",
  },
  {
    id: 9,
    icon: "FaLaptop",
    title: "Vente Informatique",
    description: "Fourniture d'ordinateurs neufs et reconditionnés adaptés à vos besoins et votre budget. Conseil d'achat personnalisé.",
    color: "#00C2FF",
  },
  {
    id: 10,
    icon: "FaPlug",
    title: "Vente d'Accessoires",
    description: "Large gamme d'accessoires informatiques et réseau : câbles, switches, routeurs, imprimantes, clés USB et bien plus.",
    color: "#0A4D9D",
  },
];

export const whyUs = [
  { icon: "FaUserTie", title: "Techniciens Expérimentés", desc: "Notre équipe possède plus de 10 ans d'expérience dans le domaine IT." },
  { icon: "FaBolt", title: "Intervention Rapide", desc: "Nous intervenons rapidement pour minimiser les interruptions de votre activité." },
  { icon: "FaStar", title: "Satisfaction Client", desc: "Plus de 500 clients satisfaits témoignent de la qualité de nos services." },
  { icon: "FaCheckCircle", title: "Solutions Fiables", desc: "Des solutions durables et adaptées à vos besoins spécifiques." },
  { icon: "FaTag", title: "Tarifs Abordables", desc: "Des prix compétitifs sans compromis sur la qualité du service." },
  { icon: "FaHandshake", title: "Support Personnalisé", desc: "Un suivi dédié et une relation de proximité avec chaque client." },
];

export const stats = [
  { value: 500, suffix: "+", label: "Clients Satisfaits" },
  { value: 1000, suffix: "+", label: "Problèmes Résolus" },
  { value: 10, suffix: "+", label: "Années d'Expérience" },
  { value: 24, suffix: "/7", label: "Support Disponible" },
];

export const testimonials = [
  {
    name: "Jean-Pierre Mbarga",
    role: "Directeur, PME Douala",
    text: "R&C System a complètement transformé notre infrastructure réseau. Plus aucune panne depuis leur intervention. Réactifs et vraiment professionnels !",
    rating: 5,
    avatar: "JM",
  },
  {
    name: "Sylvie Nkomo",
    role: "Responsable IT, ONG Yaoundé",
    text: "Formation excellente pour notre équipe. Explications claires et adaptées à notre niveau. Je recommande vivement leurs services de formation IT.",
    rating: 5,
    avatar: "SN",
  },
  {
    name: "Paul Essomba",
    role: "Entrepreneur",
    text: "Panne critique un vendredi soir, ils sont intervenus en moins d'une heure. Service impeccable, tarifs raisonnables. Mon prestataire IT de confiance.",
    rating: 5,
    avatar: "PE",
  },
  {
    name: "Marie-Claire Atangana",
    role: "Chef de projet, Secteur Bancaire",
    text: "Installation réseau complète de notre agence réalisée en temps record. Câblage propre, matériel de qualité. Vraiment satisfaite du résultat final.",
    rating: 5,
    avatar: "MA",
  },
];

export const process = [
  { step: "01", title: "Contactez-nous", desc: "Envoyez-nous un message WhatsApp pour décrire votre besoin ou problème.", icon: "FaWhatsapp" },
  { step: "02", title: "Diagnostic", desc: "Nous analysons votre situation et proposons la meilleure solution adaptée.", icon: "FaSearch" },
  { step: "03", title: "Intervention", desc: "Nos techniciens interviennent rapidement sur site ou à distance.", icon: "FaTools" },
  { step: "04", title: "Résolution", desc: "Votre problème est résolu avec un suivi garanti pour votre tranquillité.", icon: "FaCheckCircle" },
];
