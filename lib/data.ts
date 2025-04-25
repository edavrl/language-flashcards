export const languages = {
  english: {
    name: "English",
    code: "en",
  },
  turkish: {
    name: "Turkish",
    code: "tr",
  },
  german: {
    name: "German",
    code: "de",
  },
  spanish: {
    name: "Spanish",
    code: "es",
  },
  italian: {
    name: "Italian",
    code: "it",
  },
  french: {
    name: "French",
    code: "fr",
  },
  portuguese: {
    name: "Portuguese",
    code: "pt",
  },
}

export const levels = ["A1", "A2", "B1", "B2", "C1"]

// Universal vocabulary data with translations in all languages
const universalVocabulary = {
  A1: {
    set1: [
      {
        id: "a1-s1-1",
        translations: {
          english: "hello",
          turkish: "merhaba",
          german: "hallo",
          spanish: "hola",
          italian: "ciao",
          french: "bonjour",
          portuguese: "olá",
        },
      },
      {
        id: "a1-s1-2",
        translations: {
          english: "goodbye",
          turkish: "hoşça kal",
          german: "auf wiedersehen",
          spanish: "adiós",
          italian: "arrivederci",
          french: "au revoir",
          portuguese: "adeus",
        },
      },
      {
        id: "a1-s1-3",
        translations: {
          english: "please",
          turkish: "lütfen",
          german: "bitte",
          spanish: "por favor",
          italian: "per favore",
          french: "s'il vous plaît",
          portuguese: "por favor",
        },
      },
      {
        id: "a1-s1-4",
        translations: {
          english: "thank you",
          turkish: "teşekkür ederim",
          german: "danke",
          spanish: "gracias",
          italian: "grazie",
          french: "merci",
          portuguese: "obrigado",
        },
      },
      {
        id: "a1-s1-5",
        translations: {
          english: "yes",
          turkish: "evet",
          german: "ja",
          spanish: "sí",
          italian: "sì",
          french: "oui",
          portuguese: "sim",
        },
      },
      {
        id: "a1-s1-6",
        translations: {
          english: "no",
          turkish: "hayır",
          german: "nein",
          spanish: "no",
          italian: "no",
          french: "non",
          portuguese: "não",
        },
      },
      {
        id: "a1-s1-7",
        translations: {
          english: "excuse me",
          turkish: "affedersiniz",
          german: "entschuldigung",
          spanish: "disculpe",
          italian: "scusa",
          french: "excusez-moi",
          portuguese: "com licença",
        },
      },
      {
        id: "a1-s1-8",
        translations: {
          english: "sorry",
          turkish: "özür dilerim",
          german: "es tut mir leid",
          spanish: "lo siento",
          italian: "mi dispiace",
          french: "désolé",
          portuguese: "desculpe",
        },
      },
      {
        id: "a1-s1-9",
        translations: {
          english: "water",
          turkish: "su",
          german: "wasser",
          spanish: "agua",
          italian: "acqua",
          french: "eau",
          portuguese: "água",
        },
      },
      {
        id: "a1-s1-10",
        translations: {
          english: "food",
          turkish: "yemek",
          german: "essen",
          spanish: "comida",
          italian: "cibo",
          french: "nourriture",
          portuguese: "comida",
        },
      },
    ],
    set2: [
      {
        id: "a1-s2-1",
        translations: {
          english: "house",
          turkish: "ev",
          german: "haus",
          spanish: "casa",
          italian: "casa",
          french: "maison",
          portuguese: "casa",
        },
      },
      {
        id: "a1-s2-2",
        translations: {
          english: "car",
          turkish: "araba",
          german: "auto",
          spanish: "coche",
          italian: "macchina",
          french: "voiture",
          portuguese: "carro",
        },
      },
      {
        id: "a1-s2-3",
        translations: {
          english: "book",
          turkish: "kitap",
          german: "buch",
          spanish: "libro",
          italian: "libro",
          french: "livre",
          portuguese: "livro",
        },
      },
      {
        id: "a1-s2-4",
        translations: {
          english: "friend",
          turkish: "arkadaş",
          german: "freund",
          spanish: "amigo",
          italian: "amico",
          french: "ami",
          portuguese: "amigo",
        },
      },
      {
        id: "a1-s2-5",
        translations: {
          english: "family",
          turkish: "aile",
          german: "familie",
          spanish: "familia",
          italian: "famiglia",
          french: "famille",
          portuguese: "família",
        },
      },
      {
        id: "a1-s2-6",
        translations: {
          english: "school",
          turkish: "okul",
          german: "schule",
          spanish: "escuela",
          italian: "scuola",
          french: "école",
          portuguese: "escola",
        },
      },
      {
        id: "a1-s2-7",
        translations: {
          english: "work",
          turkish: "iş",
          german: "arbeit",
          spanish: "trabajo",
          italian: "lavoro",
          french: "travail",
          portuguese: "trabalho",
        },
      },
      {
        id: "a1-s2-8",
        translations: {
          english: "day",
          turkish: "gün",
          german: "tag",
          spanish: "día",
          italian: "giorno",
          french: "jour",
          portuguese: "dia",
        },
      },
      {
        id: "a1-s2-9",
        translations: {
          english: "night",
          turkish: "gece",
          german: "nacht",
          spanish: "noche",
          italian: "notte",
          french: "nuit",
          portuguese: "noite",
        },
      },
      {
        id: "a1-s2-10",
        translations: {
          english: "time",
          turkish: "zaman",
          german: "zeit",
          spanish: "tiempo",
          italian: "tempo",
          french: "temps",
          portuguese: "tempo",
        },
      },
    ],
  },
  A2: {
    set1: [
      {
        id: "a2-s1-1",
        translations: {
          english: "weather",
          turkish: "hava durumu",
          german: "wetter",
          spanish: "clima",
          italian: "tempo",
          french: "météo",
          portuguese: "clima",
        },
      },
      {
        id: "a2-s1-2",
        translations: {
          english: "holiday",
          turkish: "tatil",
          german: "urlaub",
          spanish: "vacaciones",
          italian: "vacanza",
          french: "vacances",
          portuguese: "férias",
        },
      },
      {
        id: "a2-s1-3",
        translations: {
          english: "restaurant",
          turkish: "restoran",
          german: "restaurant",
          spanish: "restaurante",
          italian: "ristorante",
          french: "restaurant",
          portuguese: "restaurante",
        },
      },
      {
        id: "a2-s1-4",
        translations: {
          english: "shopping",
          turkish: "alışveriş",
          german: "einkaufen",
          spanish: "compras",
          italian: "shopping",
          french: "shopping",
          portuguese: "compras",
        },
      },
      {
        id: "a2-s1-5",
        translations: {
          english: "travel",
          turkish: "seyahat",
          german: "reise",
          spanish: "viaje",
          italian: "viaggio",
          french: "voyage",
          portuguese: "viagem",
        },
      },
      {
        id: "a2-s1-6",
        translations: {
          english: "hobby",
          turkish: "hobi",
          german: "hobby",
          spanish: "pasatiempo",
          italian: "hobby",
          french: "passe-temps",
          portuguese: "passatempo",
        },
      },
      {
        id: "a2-s1-7",
        translations: {
          english: "weekend",
          turkish: "hafta sonu",
          german: "wochenende",
          spanish: "fin de semana",
          italian: "fine settimana",
          french: "week-end",
          portuguese: "fim de semana",
        },
      },
      {
        id: "a2-s1-8",
        translations: {
          english: "appointment",
          turkish: "randevu",
          german: "termin",
          spanish: "cita",
          italian: "appuntamento",
          french: "rendez-vous",
          portuguese: "compromisso",
        },
      },
      {
        id: "a2-s1-9",
        translations: {
          english: "direction",
          turkish: "yön",
          german: "richtung",
          spanish: "dirección",
          italian: "direzione",
          french: "direction",
          portuguese: "direção",
        },
      },
      {
        id: "a2-s1-10",
        translations: {
          english: "city",
          turkish: "şehir",
          german: "stadt",
          spanish: "ciudad",
          italian: "città",
          french: "ville",
          portuguese: "cidade",
        },
      },
    ],
    set2: [
      {
        id: "a2-s2-1",
        translations: {
          english: "country",
          turkish: "ülke",
          german: "land",
          spanish: "país",
          italian: "paese",
          french: "pays",
          portuguese: "país",
        },
      },
      {
        id: "a2-s2-2",
        translations: {
          english: "language",
          turkish: "dil",
          german: "sprache",
          spanish: "idioma",
          italian: "lingua",
          french: "langue",
          portuguese: "língua",
        },
      },
      {
        id: "a2-s2-3",
        translations: {
          english: "people",
          turkish: "insanlar",
          german: "leute",
          spanish: "gente",
          italian: "persone",
          french: "personnes",
          portuguese: "pessoas",
        },
      },
      {
        id: "a2-s2-4",
        translations: {
          english: "money",
          turkish: "para",
          german: "geld",
          spanish: "dinero",
          italian: "soldi",
          french: "argent",
          portuguese: "dinheiro",
        },
      },
      {
        id: "a2-s2-5",
        translations: {
          english: "shop",
          turkish: "mağaza",
          german: "geschäft",
          spanish: "tienda",
          italian: "negozio",
          french: "magasin",
          portuguese: "loja",
        },
      },
      {
        id: "a2-s2-6",
        translations: {
          english: "market",
          turkish: "pazar",
          german: "markt",
          spanish: "mercado",
          italian: "mercato",
          french: "marché",
          portuguese: "mercado",
        },
      },
      {
        id: "a2-s2-7",
        translations: {
          english: "hotel",
          turkish: "otel",
          german: "hotel",
          spanish: "hotel",
          italian: "albergo",
          french: "hôtel",
          portuguese: "hotel",
        },
      },
      {
        id: "a2-s2-8",
        translations: {
          english: "airport",
          turkish: "havalimanı",
          german: "flughafen",
          spanish: "aeropuerto",
          italian: "aeroporto",
          french: "aéroport",
          portuguese: "aeroporto",
        },
      },
      {
        id: "a2-s2-9",
        translations: {
          english: "station",
          turkish: "istasyon",
          german: "bahnhof",
          spanish: "estación",
          italian: "stazione",
          french: "gare",
          portuguese: "estação",
        },
      },
      {
        id: "a2-s2-10",
        translations: {
          english: "ticket",
          turkish: "bilet",
          german: "fahrkarte",
          spanish: "billete",
          italian: "biglietto",
          french: "billet",
          portuguese: "bilhete",
        },
      },
    ],
  },
  B1: {
    set1: [
      {
        id: "b1-s1-1",
        translations: {
          english: "environment",
          turkish: "çevre",
          german: "umwelt",
          spanish: "medio ambiente",
          italian: "ambiente",
          french: "environnement",
          portuguese: "ambiente",
        },
      },
      {
        id: "b1-s1-2",
        translations: {
          english: "technology",
          turkish: "teknoloji",
          german: "technologie",
          spanish: "tecnología",
          italian: "tecnologia",
          french: "technologie",
          portuguese: "tecnologia",
        },
      },
      {
        id: "b1-s1-3",
        translations: {
          english: "culture",
          turkish: "kültür",
          german: "kultur",
          spanish: "cultura",
          italian: "cultura",
          french: "culture",
          portuguese: "cultura",
        },
      },
      {
        id: "b1-s1-4",
        translations: {
          english: "politics",
          turkish: "siyaset",
          german: "politik",
          spanish: "política",
          italian: "politica",
          french: "politique",
          portuguese: "política",
        },
      },
      {
        id: "b1-s1-5",
        translations: {
          english: "economy",
          turkish: "ekonomi",
          german: "wirtschaft",
          spanish: "economía",
          italian: "economia",
          french: "économie",
          portuguese: "economia",
        },
      },
      {
        id: "b1-s1-6",
        translations: {
          english: "education",
          turkish: "eğitim",
          german: "bildung",
          spanish: "educación",
          italian: "educazione",
          french: "éducation",
          portuguese: "educação",
        },
      },
      {
        id: "b1-s1-7",
        translations: {
          english: "relationship",
          turkish: "ilişki",
          german: "beziehung",
          spanish: "relación",
          italian: "relazione",
          french: "relation",
          portuguese: "relacionamento",
        },
      },
      {
        id: "b1-s1-8",
        translations: {
          english: "experience",
          turkish: "deneyim",
          german: "erfahrung",
          spanish: "experiencia",
          italian: "esperienza",
          french: "expérience",
          portuguese: "experiência",
        },
      },
      {
        id: "b1-s1-9",
        translations: {
          english: "development",
          turkish: "gelişim",
          german: "entwicklung",
          spanish: "desarrollo",
          italian: "sviluppo",
          french: "développement",
          portuguese: "desenvolvimento",
        },
      },
      {
        id: "b1-s1-10",
        translations: {
          english: "achievement",
          turkish: "başarı",
          german: "erfolg",
          spanish: "logro",
          italian: "successo",
          french: "réussite",
          portuguese: "conquista",
        },
      },
    ],
    set2: [
      {
        id: "b1-s2-1",
        translations: {
          english: "opportunity",
          turkish: "fırsat",
          german: "gelegenheit",
          spanish: "oportunidad",
          italian: "opportunità",
          french: "opportunité",
          portuguese: "oportunidade",
        },
      },
      {
        id: "b1-s2-2",
        translations: {
          english: "challenge",
          turkish: "zorluk",
          german: "herausforderung",
          spanish: "desafío",
          italian: "sfida",
          french: "défi",
          portuguese: "desafio",
        },
      },
      {
        id: "b1-s2-3",
        translations: {
          english: "solution",
          turkish: "çözüm",
          german: "lösung",
          spanish: "solución",
          italian: "soluzione",
          french: "solution",
          portuguese: "solução",
        },
      },
      {
        id: "b1-s2-4",
        translations: {
          english: "problem",
          turkish: "sorun",
          german: "problem",
          spanish: "problema",
          italian: "problema",
          french: "problème",
          portuguese: "problema",
        },
      },
      {
        id: "b1-s2-5",
        translations: {
          english: "decision",
          turkish: "karar",
          german: "entscheidung",
          spanish: "decisión",
          italian: "decisione",
          french: "décision",
          portuguese: "decisão",
        },
      },
      {
        id: "b1-s2-6",
        translations: {
          english: "opinion",
          turkish: "görüş",
          german: "meinung",
          spanish: "opinión",
          italian: "opinione",
          french: "opinion",
          portuguese: "opinião",
        },
      },
      {
        id: "b1-s2-7",
        translations: {
          english: "discussion",
          turkish: "tartışma",
          german: "diskussion",
          spanish: "discusión",
          italian: "discussione",
          french: "discussion",
          portuguese: "discussão",
        },
      },
      {
        id: "b1-s2-8",
        translations: {
          english: "argument",
          turkish: "argüman",
          german: "argument",
          spanish: "argumento",
          italian: "argomento",
          french: "argument",
          portuguese: "argumento",
        },
      },
      {
        id: "b1-s2-9",
        translations: {
          english: "agreement",
          turkish: "anlaşma",
          german: "vereinbarung",
          spanish: "acuerdo",
          italian: "accordo",
          french: "accord",
          portuguese: "acordo",
        },
      },
      {
        id: "b1-s2-10",
        translations: {
          english: "disagreement",
          turkish: "anlaşmazlık",
          german: "meinungsverschiedenheit",
          spanish: "desacuerdo",
          italian: "disaccordo",
          french: "désaccord",
          portuguese: "desacordo",
        },
      },
    ],
  },
  B2: {
    set1: [
      {
        id: "b2-s1-1",
        translations: {
          english: "sustainability",
          turkish: "sürdürülebilirlik",
          german: "nachhaltigkeit",
          spanish: "sostenibilidad",
          italian: "sostenibilità",
          french: "durabilité",
          portuguese: "sustentabilidade",
        },
      },
      {
        id: "b2-s1-2",
        translations: {
          english: "innovation",
          turkish: "yenilik",
          german: "innovation",
          spanish: "innovación",
          italian: "innovazione",
          french: "innovation",
          portuguese: "inovação",
        },
      },
      {
        id: "b2-s1-3",
        translations: {
          english: "globalization",
          turkish: "küreselleşme",
          german: "globalisierung",
          spanish: "globalización",
          italian: "globalizzazione",
          french: "mondialisation",
          portuguese: "globalização",
        },
      },
      {
        id: "b2-s1-4",
        translations: {
          english: "diversity",
          turkish: "çeşitlilik",
          german: "vielfalt",
          spanish: "diversidad",
          italian: "diversità",
          french: "diversité",
          portuguese: "diversidade",
        },
      },
      {
        id: "b2-s1-5",
        translations: {
          english: "perspective",
          turkish: "bakış açısı",
          german: "perspektive",
          spanish: "perspectiva",
          italian: "prospettiva",
          french: "perspective",
          portuguese: "perspectiva",
        },
      },
      {
        id: "b2-s1-6",
        translations: {
          english: "analysis",
          turkish: "analiz",
          german: "analyse",
          spanish: "análisis",
          italian: "analisi",
          french: "analyse",
          portuguese: "análise",
        },
      },
      {
        id: "b2-s1-7",
        translations: {
          english: "strategy",
          turkish: "strateji",
          german: "strategie",
          spanish: "estrategia",
          italian: "strategia",
          french: "stratégie",
          portuguese: "estratégia",
        },
      },
      {
        id: "b2-s1-8",
        translations: {
          english: "implementation",
          turkish: "uygulama",
          german: "umsetzung",
          spanish: "implementación",
          italian: "implementazione",
          french: "mise en œuvre",
          portuguese: "implementação",
        },
      },
      {
        id: "b2-s1-9",
        translations: {
          english: "evaluation",
          turkish: "değerlendirme",
          german: "bewertung",
          spanish: "evaluación",
          italian: "valutazione",
          french: "évaluation",
          portuguese: "avaliação",
        },
      },
      {
        id: "b2-s1-10",
        translations: {
          english: "conclusion",
          turkish: "sonuç",
          german: "schlussfolgerung",
          spanish: "conclusión",
          italian: "conclusione",
          french: "conclusion",
          portuguese: "conclusão",
        },
      },
    ],
    set2: [
      {
        id: "b2-s2-1",
        translations: {
          english: "research",
          turkish: "araştırma",
          german: "forschung",
          spanish: "investigación",
          italian: "ricerca",
          french: "recherche",
          portuguese: "pesquisa",
        },
      },
      {
        id: "b2-s2-2",
        translations: {
          english: "development",
          turkish: "geliştirme",
          german: "entwicklung",
          spanish: "desarrollo",
          italian: "sviluppo",
          french: "développement",
          portuguese: "desenvolvimento",
        },
      },
      {
        id: "b2-s2-3",
        translations: {
          english: "investment",
          turkish: "yatırım",
          german: "investition",
          spanish: "inversión",
          italian: "investimento",
          french: "investissement",
          portuguese: "investimento",
        },
      },
      {
        id: "b2-s2-4",
        translations: {
          english: "management",
          turkish: "yönetim",
          german: "management",
          spanish: "gestión",
          italian: "gestione",
          french: "gestion",
          portuguese: "gestão",
        },
      },
      {
        id: "b2-s2-5",
        translations: {
          english: "leadership",
          turkish: "liderlik",
          german: "führung",
          spanish: "liderazgo",
          italian: "leadership",
          french: "leadership",
          portuguese: "liderança",
        },
      },
      {
        id: "b2-s2-6",
        translations: {
          english: "collaboration",
          turkish: "işbirliği",
          german: "zusammenarbeit",
          spanish: "colaboración",
          italian: "collaborazione",
          french: "collaboration",
          portuguese: "colaboração",
        },
      },
      {
        id: "b2-s2-7",
        translations: {
          english: "competition",
          turkish: "rekabet",
          german: "wettbewerb",
          spanish: "competencia",
          italian: "competizione",
          french: "compétition",
          portuguese: "competição",
        },
      },
      {
        id: "b2-s2-8",
        translations: {
          english: "negotiation",
          turkish: "müzakere",
          german: "verhandlung",
          spanish: "negociación",
          italian: "negoziazione",
          french: "négociation",
          portuguese: "negociação",
        },
      },
      {
        id: "b2-s2-9",
        translations: {
          english: "presentation",
          turkish: "sunum",
          german: "präsentation",
          spanish: "presentación",
          italian: "presentazione",
          french: "présentation",
          portuguese: "apresentação",
        },
      },
      {
        id: "b2-s2-10",
        translations: {
          english: "communication",
          turkish: "iletişim",
          german: "kommunikation",
          spanish: "comunicación",
          italian: "comunicazione",
          french: "communication",
          portuguese: "comunicação",
        },
      },
    ],
  },
  C1: {
    set1: [
      {
        id: "c1-s1-1",
        translations: {
          english: "ambiguity",
          turkish: "belirsizlik",
          german: "mehrdeutigkeit",
          spanish: "ambigüedad",
          italian: "ambiguità",
          french: "ambiguïté",
          portuguese: "ambiguidade",
        },
      },
      {
        id: "c1-s1-2",
        translations: {
          english: "paradigm",
          turkish: "paradigma",
          german: "paradigma",
          spanish: "paradigma",
          italian: "paradigma",
          french: "paradigme",
          portuguese: "paradigma",
        },
      },
      {
        id: "c1-s1-3",
        translations: {
          english: "rhetoric",
          turkish: "retorik",
          german: "rhetorik",
          spanish: "retórica",
          italian: "retorica",
          french: "rhétorique",
          portuguese: "retórica",
        },
      },
      {
        id: "c1-s1-4",
        translations: {
          english: "nuance",
          turkish: "nüans",
          german: "nuance",
          spanish: "matiz",
          italian: "sfumatura",
          french: "nuance",
          portuguese: "nuance",
        },
      },
      {
        id: "c1-s1-5",
        translations: {
          english: "inference",
          turkish: "çıkarım",
          german: "schlussfolgerung",
          spanish: "inferencia",
          italian: "inferenza",
          french: "inférence",
          portuguese: "inferência",
        },
      },
      {
        id: "c1-s1-6",
        translations: {
          english: "hypothesis",
          turkish: "hipotez",
          german: "hypothese",
          spanish: "hipótesis",
          italian: "ipotesi",
          french: "hypothèse",
          portuguese: "hipótese",
        },
      },
      {
        id: "c1-s1-7",
        translations: {
          english: "methodology",
          turkish: "metodoloji",
          german: "methodologie",
          spanish: "metodología",
          italian: "metodologia",
          french: "méthodologie",
          portuguese: "metodologia",
        },
      },
      {
        id: "c1-s1-8",
        translations: {
          english: "phenomenon",
          turkish: "fenomen",
          german: "phänomen",
          spanish: "fenómeno",
          italian: "fenomeno",
          french: "phénomène",
          portuguese: "fenômeno",
        },
      },
      {
        id: "c1-s1-9",
        translations: {
          english: "controversy",
          turkish: "tartışma",
          german: "kontroverse",
          spanish: "controversia",
          italian: "controversia",
          french: "controverse",
          portuguese: "controvérsia",
        },
      },
      {
        id: "c1-s1-10",
        translations: {
          english: "interpretation",
          turkish: "yorumlama",
          german: "interpretation",
          spanish: "interpretación",
          italian: "interpretazione",
          french: "interprétation",
          portuguese: "interpretação",
        },
      },
    ],
    set2: [
      {
        id: "c1-s2-1",
        translations: {
          english: "philosophy",
          turkish: "felsefe",
          german: "philosophie",
          spanish: "filosofía",
          italian: "filosofia",
          french: "philosophie",
          portuguese: "filosofia",
        },
      },
      {
        id: "c1-s2-2",
        translations: {
          english: "psychology",
          turkish: "psikoloji",
          german: "psychologie",
          spanish: "psicología",
          italian: "psicologia",
          french: "psychologie",
          portuguese: "psicologia",
        },
      },
      {
        id: "c1-s2-3",
        translations: {
          english: "sociology",
          turkish: "sosyoloji",
          german: "soziologie",
          spanish: "sociología",
          italian: "sociologia",
          french: "sociologie",
          portuguese: "sociologia",
        },
      },
      {
        id: "c1-s2-4",
        translations: {
          english: "anthropology",
          turkish: "antropoloji",
          german: "anthropologie",
          spanish: "antropología",
          italian: "antropologia",
          french: "anthropologie",
          portuguese: "antropologia",
        },
      },
      {
        id: "c1-s2-5",
        translations: {
          english: "linguistics",
          turkish: "dilbilim",
          german: "linguistik",
          spanish: "lingüística",
          italian: "linguistica",
          french: "linguistique",
          portuguese: "linguística",
        },
      },
      {
        id: "c1-s2-6",
        translations: {
          english: "epistemology",
          turkish: "epistemoloji",
          german: "erkenntnistheorie",
          spanish: "epistemología",
          italian: "epistemologia",
          french: "épistémologie",
          portuguese: "epistemologia",
        },
      },
      {
        id: "c1-s2-7",
        translations: {
          english: "ontology",
          turkish: "ontoloji",
          german: "ontologie",
          spanish: "ontología",
          italian: "ontologia",
          french: "ontologie",
          portuguese: "ontologia",
        },
      },
      {
        id: "c1-s2-8",
        translations: {
          english: "metaphysics",
          turkish: "metafizik",
          german: "metaphysik",
          spanish: "metafísica",
          italian: "metafisica",
          french: "métaphysique",
          portuguese: "metafísica",
        },
      },
      {
        id: "c1-s2-9",
        translations: {
          english: "aesthetics",
          turkish: "estetik",
          german: "ästhetik",
          spanish: "estética",
          italian: "estetica",
          french: "esthétique",
          portuguese: "estética",
        },
      },
      {
        id: "c1-s2-10",
        translations: {
          english: "ethics",
          turkish: "etik",
          german: "ethik",
          spanish: "ética",
          italian: "etica",
          french: "éthique",
          portuguese: "ética",
        },
      },
    ],
  },
}

// Function to get all sets for a specific level
export const getSetsForLanguageAndLevel = async (language: string, level: string) => {
  // Simulate API call with a small delay
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      // If the level exists in our data, return the set names
      if (universalVocabulary[level]) {
        resolve(Object.keys(universalVocabulary[level]))
      } else {
        // Return empty array if not found
        resolve([])
      }
    }, 200)
  })
}

// Function to get vocabulary for a specific level and set with translations for target and translation languages
export const getVocabularyForSet = async (
  targetLanguage: string,
  translationLanguage: string,
  level: string,
  set: string,
) => {
  // Simulate API call with a small delay
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      // If the level and set exist in our data, return it with the appropriate translations
      if (universalVocabulary[level] && universalVocabulary[level][set]) {
        const words = universalVocabulary[level][set].map((item) => ({
          id: item.id,
          word: item.translations[targetLanguage],
          translation: item.translations[translationLanguage],
        }))
        resolve(words)
      } else {
        // Return empty array if not found
        resolve([])
      }
    }, 300)
  })
}

// Function to get vocabulary for a specific level (all sets combined)
export const getVocabularyForLanguageAndLevel = async (
  targetLanguage: string,
  translationLanguage: string,
  level: string,
) => {
  // Simulate API call with a small delay
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      // If the level exists in our data, combine all sets
      if (universalVocabulary[level]) {
        const allWords = Object.values(universalVocabulary[level])
          .flat()
          .map((item) => ({
            id: item.id,
            word: item.translations[targetLanguage],
            translation: item.translations[translationLanguage],
          }))
        resolve(allWords)
      } else {
        // Return empty array if not found
        resolve([])
      }
    }, 300)
  })
}
