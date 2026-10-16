"use strict";
// Catalogue et réponses : cette version locale est un outil pédagogique.
const DATA = {
  "games": [
    {
      "id": 0,
      "name": "La forge des verbes",
      "desc": "Transforme les verbes au passé.",
      "level": "A1",
      "mode": "choice",
      "icon": "⚒",
      "category": "Verbes irréguliers",
      "color": "mint"
    },
    {
      "id": 1,
      "name": "Le grimoire oublié",
      "desc": "Retrouve le participe passé.",
      "level": "A2",
      "mode": "input",
      "icon": "✧",
      "category": "Verbes irréguliers",
      "color": "mint"
    },
    {
      "id": 2,
      "name": "Les trois runes",
      "desc": "Associe les verbes à leurs participes.",
      "level": "B1",
      "mode": "match",
      "icon": "◈",
      "category": "Verbes irréguliers",
      "color": "mint"
    },
    {
      "id": 3,
      "name": "Le duel du passé",
      "desc": "Déjoue les fausses conjugaisons.",
      "level": "A2",
      "mode": "bool",
      "icon": "⚔",
      "category": "Verbes irréguliers",
      "color": "mint"
    },
    {
      "id": 4,
      "name": "Le boss irrégulier",
      "desc": "Enchaîne les verbes sans indice.",
      "level": "B2",
      "mode": "input",
      "icon": "♜",
      "category": "Verbes irréguliers",
      "color": "mint"
    },
    {
      "id": 5,
      "name": "Premiers mots",
      "desc": "Découvre les mots du quotidien.",
      "level": "A0",
      "mode": "flash",
      "icon": "✦",
      "category": "Vocabulaire",
      "color": "blue"
    },
    {
      "id": 6,
      "name": "Le coffre des mots",
      "desc": "Trouve le bon mot anglais.",
      "level": "A1",
      "mode": "choice",
      "icon": "▣",
      "category": "Vocabulaire",
      "color": "blue"
    },
    {
      "id": 7,
      "name": "Les paires enchantées",
      "desc": "Relie les mots à leur traduction.",
      "level": "A1",
      "mode": "match",
      "icon": "◇",
      "category": "Vocabulaire",
      "color": "blue"
    },
    {
      "id": 8,
      "name": "La chasse aux synonymes",
      "desc": "Élargis ton vocabulaire.",
      "level": "B2",
      "mode": "choice",
      "icon": "⌕",
      "category": "Vocabulaire",
      "color": "blue"
    },
    {
      "id": 9,
      "name": "Le mot mystère",
      "desc": "Retrouve le vocabulaire avancé.",
      "level": "C1",
      "mode": "input",
      "icon": "?",
      "category": "Vocabulaire",
      "color": "blue"
    },
    {
      "id": 10,
      "name": "Le bouclier du présent",
      "desc": "Choisis la bonne conjugaison.",
      "level": "A1",
      "mode": "choice",
      "icon": "⬡",
      "category": "Grammaire",
      "color": "purple"
    },
    {
      "id": 11,
      "name": "Vrai ou faux ?",
      "desc": "Repère les phrases incorrectes.",
      "level": "A2",
      "mode": "bool",
      "icon": "✓",
      "category": "Grammaire",
      "color": "purple"
    },
    {
      "id": 12,
      "name": "La faille temporelle",
      "desc": "Maîtrise les temps anglais.",
      "level": "B1",
      "mode": "input",
      "icon": "◷",
      "category": "Grammaire",
      "color": "purple"
    },
    {
      "id": 13,
      "name": "L’alchimie des conditions",
      "desc": "Compose les conditionnels.",
      "level": "B2",
      "mode": "choice",
      "icon": "△",
      "category": "Grammaire",
      "color": "purple"
    },
    {
      "id": 14,
      "name": "Le maître des nuances",
      "desc": "Affronte les structures avancées.",
      "level": "C1",
      "mode": "choice",
      "icon": "♛",
      "category": "Grammaire",
      "color": "purple"
    },
    {
      "id": 15,
      "name": "L’écho des mots",
      "desc": "Écoute et reconnais un mot.",
      "level": "A0",
      "mode": "listen",
      "icon": "♫",
      "category": "Écoute",
      "color": "pink"
    },
    {
      "id": 16,
      "name": "La dictée des runes",
      "desc": "Écris exactement ce que tu entends.",
      "level": "A1",
      "mode": "dictation",
      "icon": "⌁",
      "category": "Écoute",
      "color": "pink"
    },
    {
      "id": 17,
      "name": "L’oreille du chasseur",
      "desc": "Comprends une phrase courte.",
      "level": "A2",
      "mode": "listen",
      "icon": "◉",
      "category": "Écoute",
      "color": "pink"
    },
    {
      "id": 18,
      "name": "Le messager",
      "desc": "Retrouve le sens du message.",
      "level": "B1",
      "mode": "listen",
      "icon": "➤",
      "category": "Écoute",
      "color": "pink"
    },
    {
      "id": 19,
      "name": "L’écho avancé",
      "desc": "Décode des expressions naturelles.",
      "level": "B2",
      "mode": "dictation",
      "icon": "≋",
      "category": "Écoute",
      "color": "pink"
    },
    {
      "id": 20,
      "name": "Les briques magiques",
      "desc": "Remets les mots dans l’ordre.",
      "level": "A1",
      "mode": "order",
      "icon": "▥",
      "category": "Construction",
      "color": "gold"
    },
    {
      "id": 21,
      "name": "Le pont des questions",
      "desc": "Construis une question.",
      "level": "A2",
      "mode": "order",
      "icon": "↗",
      "category": "Construction",
      "color": "gold"
    },
    {
      "id": 22,
      "name": "La phrase brisée",
      "desc": "Reconstruis une phrase au passé.",
      "level": "B1",
      "mode": "order",
      "icon": "⋈",
      "category": "Construction",
      "color": "gold"
    },
    {
      "id": 23,
      "name": "Le laboratoire des liens",
      "desc": "Choisis le bon connecteur.",
      "level": "B2",
      "mode": "choice",
      "icon": "∞",
      "category": "Construction",
      "color": "gold"
    },
    {
      "id": 24,
      "name": "L’architecte",
      "desc": "Construis une phrase complexe.",
      "level": "C1",
      "mode": "order",
      "icon": "▱",
      "category": "Construction",
      "color": "gold"
    },
    {
      "id": 25,
      "name": "Hello, aventurier !",
      "desc": "Réponds à tes premiers dialogues.",
      "level": "A0",
      "mode": "dialogue",
      "icon": "☀",
      "category": "Conversation",
      "color": "orange"
    },
    {
      "id": 26,
      "name": "À la taverne",
      "desc": "Commande et demande poliment.",
      "level": "A1",
      "mode": "dialogue",
      "icon": "☕",
      "category": "Conversation",
      "color": "orange"
    },
    {
      "id": 27,
      "name": "Mission voyage",
      "desc": "Trouve ton chemin en anglais.",
      "level": "A2",
      "mode": "dialogue",
      "icon": "⌖",
      "category": "Conversation",
      "color": "orange"
    },
    {
      "id": 28,
      "name": "La négociation",
      "desc": "Réponds dans la vie professionnelle.",
      "level": "B1",
      "mode": "dialogue",
      "icon": "☏",
      "category": "Conversation",
      "color": "orange"
    },
    {
      "id": 29,
      "name": "Le diplomate",
      "desc": "Exprime ton avis avec nuance.",
      "level": "C1",
      "mode": "dialogue",
      "icon": "✺",
      "category": "Conversation",
      "color": "orange"
    }
  ],
  "categories": [
    "Verbes irréguliers",
    "Vocabulaire",
    "Grammaire",
    "Écoute",
    "Construction",
    "Conversation"
  ],
  "levels": [
    "A0",
    "A1",
    "A2",
    "B1",
    "B2",
    "C1"
  ],
  "levelNames": [
    "Premiers pas",
    "Débutant",
    "Élémentaire",
    "Intermédiaire",
    "Autonome",
    "Avancé"
  ],
  "powers": [
    {
      "id": "oracle",
      "name": "Œil de l’oracle",
      "cost": 15,
      "icon": "◉",
      "desc": "Révèle les premières lettres de la réponse."
    },
    {
      "id": "shield",
      "name": "Bouclier de mana",
      "cost": 25,
      "icon": "⬡",
      "desc": "Protège une erreur et accorde 10 XP de consolation."
    },
    {
      "id": "boost",
      "name": "Éveil de puissance",
      "cost": 40,
      "icon": "✦",
      "desc": "Double les XP des bonnes réponses de cette partie."
    }
  ],
  "questions": {
    "0": [
      {
        "id": "0-0",
        "prompt": "Prétérit de « go » (aller)",
        "answer": "went",
        "options": [
          "went",
          "go",
          "goed",
          "gones"
        ],
        "explanation": "go → went → gone (aller).",
        "level": "A1"
      },
      {
        "id": "0-1",
        "prompt": "Prétérit de « eat » (manger)",
        "answer": "ate",
        "options": [
          "ate",
          "eat",
          "eated",
          "eatens"
        ],
        "explanation": "eat → ate → eaten (manger).",
        "level": "A1"
      },
      {
        "id": "0-2",
        "prompt": "Prétérit de « see » (voir)",
        "answer": "saw",
        "options": [
          "saw",
          "see",
          "seeed",
          "seens"
        ],
        "explanation": "see → saw → seen (voir).",
        "level": "A1"
      },
      {
        "id": "0-3",
        "prompt": "Prétérit de « take » (prendre)",
        "answer": "took",
        "options": [
          "took",
          "take",
          "takeed",
          "takens"
        ],
        "explanation": "take → took → taken (prendre).",
        "level": "A1"
      },
      {
        "id": "0-4",
        "prompt": "Prétérit de « write » (écrire)",
        "answer": "wrote",
        "options": [
          "wrote",
          "write",
          "writeed",
          "writtens"
        ],
        "explanation": "write → wrote → written (écrire).",
        "level": "A1"
      }
    ],
    "1": [
      {
        "id": "1-0",
        "prompt": "Participe passé de « write » (écrire)",
        "answer": "written",
        "options": [
          "written",
          "write",
          "writeed",
          "wroteed"
        ],
        "explanation": "write → wrote → written (écrire).",
        "level": "A2"
      },
      {
        "id": "1-1",
        "prompt": "Participe passé de « speak » (parler)",
        "answer": "spoken",
        "options": [
          "spoken",
          "speak",
          "speaked",
          "spokeed"
        ],
        "explanation": "speak → spoke → spoken (parler).",
        "level": "A2"
      },
      {
        "id": "1-2",
        "prompt": "Participe passé de « buy » (acheter)",
        "answer": "bought",
        "options": [
          "bought",
          "buy",
          "buyed",
          "boughted"
        ],
        "explanation": "buy → bought → bought (acheter).",
        "level": "A2"
      },
      {
        "id": "1-3",
        "prompt": "Participe passé de « think » (penser)",
        "answer": "thought",
        "options": [
          "thought",
          "think",
          "thinked",
          "thoughted"
        ],
        "explanation": "think → thought → thought (penser).",
        "level": "A2"
      },
      {
        "id": "1-4",
        "prompt": "Participe passé de « bring » (apporter)",
        "answer": "brought",
        "options": [
          "brought",
          "bring",
          "bringed",
          "broughted"
        ],
        "explanation": "bring → brought → brought (apporter).",
        "level": "A2"
      }
    ],
    "2": [
      {
        "id": "2-0",
        "prompt": "Participe passé de « bring » (apporter)",
        "answer": "brought",
        "options": [
          "brought",
          "bring",
          "bringed",
          "broughted"
        ],
        "explanation": "bring → brought → brought (apporter).",
        "level": "B1"
      },
      {
        "id": "2-1",
        "prompt": "Participe passé de « choose » (choisir)",
        "answer": "chosen",
        "options": [
          "chosen",
          "choose",
          "chooseed",
          "choseed"
        ],
        "explanation": "choose → chose → chosen (choisir).",
        "level": "B1"
      },
      {
        "id": "2-2",
        "prompt": "Participe passé de « begin » (commencer)",
        "answer": "begun",
        "options": [
          "begun",
          "begin",
          "begined",
          "beganed"
        ],
        "explanation": "begin → began → begun (commencer).",
        "level": "B1"
      },
      {
        "id": "2-3",
        "prompt": "Participe passé de « break » (casser)",
        "answer": "broken",
        "options": [
          "broken",
          "break",
          "breaked",
          "brokeed"
        ],
        "explanation": "break → broke → broken (casser).",
        "level": "B1"
      },
      {
        "id": "2-4",
        "prompt": "Participe passé de « forget » (oublier)",
        "answer": "forgotten",
        "options": [
          "forgotten",
          "forget",
          "forgeted",
          "forgoted"
        ],
        "explanation": "forget → forgot → forgotten (oublier).",
        "level": "B1"
      }
    ],
    "3": [
      {
        "id": "3-0",
        "prompt": "Prétérit de « see » (voir)",
        "answer": "saw",
        "options": [
          "saw",
          "see",
          "seeed",
          "seens"
        ],
        "explanation": "see → saw → seen (voir).",
        "level": "A2"
      },
      {
        "id": "3-1",
        "prompt": "Prétérit de « take » (prendre)",
        "answer": "took",
        "options": [
          "took",
          "take",
          "takeed",
          "takens"
        ],
        "explanation": "take → took → taken (prendre).",
        "level": "A2"
      },
      {
        "id": "3-2",
        "prompt": "Prétérit de « write » (écrire)",
        "answer": "wrote",
        "options": [
          "wrote",
          "write",
          "writeed",
          "writtens"
        ],
        "explanation": "write → wrote → written (écrire).",
        "level": "A2"
      },
      {
        "id": "3-3",
        "prompt": "Prétérit de « speak » (parler)",
        "answer": "spoke",
        "options": [
          "spoke",
          "speak",
          "speaked",
          "spokens"
        ],
        "explanation": "speak → spoke → spoken (parler).",
        "level": "A2"
      },
      {
        "id": "3-4",
        "prompt": "Prétérit de « buy » (acheter)",
        "answer": "bought",
        "options": [
          "bought",
          "buy",
          "buyed",
          "boughts"
        ],
        "explanation": "buy → bought → bought (acheter).",
        "level": "A2"
      }
    ],
    "4": [
      {
        "id": "4-0",
        "prompt": "Prétérit de « swim » (nager)",
        "answer": "swam",
        "options": [
          "swam",
          "swim",
          "swimed",
          "swums"
        ],
        "explanation": "swim → swam → swum (nager).",
        "level": "B2"
      },
      {
        "id": "4-1",
        "prompt": "Prétérit de « grow » (grandir)",
        "answer": "grew",
        "options": [
          "grew",
          "grow",
          "growed",
          "growns"
        ],
        "explanation": "grow → grew → grown (grandir).",
        "level": "B2"
      },
      {
        "id": "4-2",
        "prompt": "Prétérit de « shake » (secouer)",
        "answer": "shook",
        "options": [
          "shook",
          "shake",
          "shakeed",
          "shakens"
        ],
        "explanation": "shake → shook → shaken (secouer).",
        "level": "B2"
      },
      {
        "id": "4-3",
        "prompt": "Prétérit de « arise » (survenir)",
        "answer": "arose",
        "options": [
          "arose",
          "arise",
          "ariseed",
          "arisens"
        ],
        "explanation": "arise → arose → arisen (survenir).",
        "level": "B2"
      },
      {
        "id": "4-4",
        "prompt": "Prétérit de « seek » (chercher)",
        "answer": "sought",
        "options": [
          "sought",
          "seek",
          "seeked",
          "soughts"
        ],
        "explanation": "seek → sought → sought (chercher).",
        "level": "B2"
      }
    ],
    "5": [
      {
        "id": "5-0",
        "prompt": "Comment dit-on « bonjour » ?",
        "answer": "hello",
        "options": [
          "hello",
          "water",
          "school",
          "window"
        ],
        "explanation": "« bonjour » se dit « hello ».",
        "level": "A0"
      },
      {
        "id": "5-1",
        "prompt": "Comment dit-on « merci » ?",
        "answer": "thank you",
        "options": [
          "thank you",
          "book",
          "breakfast",
          "journey"
        ],
        "explanation": "« merci » se dit « thank you ».",
        "level": "A0"
      },
      {
        "id": "5-2",
        "prompt": "Comment dit-on « chat » ?",
        "answer": "cat",
        "options": [
          "cat",
          "house",
          "window",
          "neighbour"
        ],
        "explanation": "« chat » se dit « cat ».",
        "level": "A0"
      },
      {
        "id": "5-3",
        "prompt": "Comment dit-on « eau » ?",
        "answer": "water",
        "options": [
          "water",
          "friend",
          "journey",
          "reliable"
        ],
        "explanation": "« eau » se dit « water ».",
        "level": "A0"
      },
      {
        "id": "5-4",
        "prompt": "Comment dit-on « livre » ?",
        "answer": "book",
        "options": [
          "book",
          "school",
          "neighbour",
          "achieve"
        ],
        "explanation": "« livre » se dit « book ».",
        "level": "A0"
      }
    ],
    "6": [
      {
        "id": "6-0",
        "prompt": "Comment dit-on « maison » ?",
        "answer": "house",
        "options": [
          "house",
          "breakfast",
          "reliable",
          "aware"
        ],
        "explanation": "« maison » se dit « house ».",
        "level": "A1"
      },
      {
        "id": "6-1",
        "prompt": "Comment dit-on « ami » ?",
        "answer": "friend",
        "options": [
          "friend",
          "window",
          "achieve",
          "improve"
        ],
        "explanation": "« ami » se dit « friend ».",
        "level": "A1"
      },
      {
        "id": "6-2",
        "prompt": "Comment dit-on « école » ?",
        "answer": "school",
        "options": [
          "school",
          "journey",
          "aware",
          "resilient"
        ],
        "explanation": "« école » se dit « school ».",
        "level": "A1"
      },
      {
        "id": "6-3",
        "prompt": "Comment dit-on « petit-déjeuner » ?",
        "answer": "breakfast",
        "options": [
          "breakfast",
          "neighbour",
          "improve",
          "thorough"
        ],
        "explanation": "« petit-déjeuner » se dit « breakfast ».",
        "level": "A1"
      },
      {
        "id": "6-4",
        "prompt": "Comment dit-on « fenêtre » ?",
        "answer": "window",
        "options": [
          "window",
          "reliable",
          "resilient",
          "inevitable"
        ],
        "explanation": "« fenêtre » se dit « window ».",
        "level": "A1"
      }
    ],
    "7": [
      {
        "id": "7-0",
        "prompt": "Comment dit-on « petit-déjeuner » ?",
        "answer": "breakfast",
        "options": [
          "breakfast",
          "neighbour",
          "improve",
          "thorough"
        ],
        "explanation": "« petit-déjeuner » se dit « breakfast ».",
        "level": "A1"
      },
      {
        "id": "7-1",
        "prompt": "Comment dit-on « fenêtre » ?",
        "answer": "window",
        "options": [
          "window",
          "reliable",
          "resilient",
          "inevitable"
        ],
        "explanation": "« fenêtre » se dit « window ».",
        "level": "A1"
      },
      {
        "id": "7-2",
        "prompt": "Comment dit-on « voyage » ?",
        "answer": "journey",
        "options": [
          "journey",
          "achieve",
          "thorough",
          "ambiguous"
        ],
        "explanation": "« voyage » se dit « journey ».",
        "level": "A1"
      },
      {
        "id": "7-3",
        "prompt": "Comment dit-on « voisin » ?",
        "answer": "neighbour",
        "options": [
          "neighbour",
          "aware",
          "inevitable",
          "hello"
        ],
        "explanation": "« voisin » se dit « neighbour ».",
        "level": "A1"
      },
      {
        "id": "7-4",
        "prompt": "Comment dit-on « fiable » ?",
        "answer": "reliable",
        "options": [
          "reliable",
          "improve",
          "ambiguous",
          "thank you"
        ],
        "explanation": "« fiable » se dit « reliable ».",
        "level": "A1"
      }
    ],
    "8": [
      {
        "id": "8-0",
        "prompt": "Un synonyme de « happy » ?",
        "answer": "glad",
        "options": [
          "glad",
          "sad",
          "tired",
          "angry"
        ],
        "explanation": "happy et glad ont un sens proche.",
        "level": "B2"
      },
      {
        "id": "8-1",
        "prompt": "Un synonyme de « quick » ?",
        "answer": "fast",
        "options": [
          "fast",
          "slow",
          "late",
          "weak"
        ],
        "explanation": "quick et fast ont un sens proche.",
        "level": "B2"
      },
      {
        "id": "8-2",
        "prompt": "Un synonyme de « difficult » ?",
        "answer": "challenging",
        "options": [
          "challenging",
          "simple",
          "tiny",
          "empty"
        ],
        "explanation": "difficult et challenging ont un sens proche.",
        "level": "B2"
      },
      {
        "id": "8-3",
        "prompt": "Un synonyme de « begin » ?",
        "answer": "start",
        "options": [
          "start",
          "finish",
          "lose",
          "stay"
        ],
        "explanation": "begin et start ont un sens proche.",
        "level": "B2"
      },
      {
        "id": "8-4",
        "prompt": "Un synonyme de « reliable » ?",
        "answer": "dependable",
        "options": [
          "dependable",
          "careless",
          "uncertain",
          "fragile"
        ],
        "explanation": "reliable et dependable ont un sens proche.",
        "level": "B2"
      },
      {
        "id": "8-5",
        "prompt": "Un synonyme de « enormous » ?",
        "answer": "huge",
        "options": [
          "huge",
          "tiny",
          "brief",
          "narrow"
        ],
        "explanation": "enormous et huge ont un sens proche.",
        "level": "B2"
      },
      {
        "id": "8-6",
        "prompt": "Un synonyme de « crucial » ?",
        "answer": "essential",
        "options": [
          "essential",
          "optional",
          "ordinary",
          "minor"
        ],
        "explanation": "crucial et essential ont un sens proche.",
        "level": "B2"
      },
      {
        "id": "8-7",
        "prompt": "Un synonyme de « reluctant » ?",
        "answer": "unwilling",
        "options": [
          "unwilling",
          "eager",
          "ready",
          "keen"
        ],
        "explanation": "reluctant et unwilling ont un sens proche.",
        "level": "B2"
      }
    ],
    "9": [
      {
        "id": "9-0",
        "prompt": "Comment dit-on « améliorer » ?",
        "answer": "improve",
        "options": [
          "improve",
          "inevitable",
          "cat",
          "book"
        ],
        "explanation": "« améliorer » se dit « improve ».",
        "level": "C1"
      },
      {
        "id": "9-1",
        "prompt": "Comment dit-on « résilient » ?",
        "answer": "resilient",
        "options": [
          "resilient",
          "ambiguous",
          "water",
          "house"
        ],
        "explanation": "« résilient » se dit « resilient ».",
        "level": "C1"
      },
      {
        "id": "9-2",
        "prompt": "Comment dit-on « minutieux » ?",
        "answer": "thorough",
        "options": [
          "thorough",
          "hello",
          "book",
          "friend"
        ],
        "explanation": "« minutieux » se dit « thorough ».",
        "level": "C1"
      },
      {
        "id": "9-3",
        "prompt": "Comment dit-on « inévitable » ?",
        "answer": "inevitable",
        "options": [
          "inevitable",
          "thank you",
          "house",
          "school"
        ],
        "explanation": "« inévitable » se dit « inevitable ».",
        "level": "C1"
      },
      {
        "id": "9-4",
        "prompt": "Comment dit-on « ambigu » ?",
        "answer": "ambiguous",
        "options": [
          "ambiguous",
          "cat",
          "friend",
          "breakfast"
        ],
        "explanation": "« ambigu » se dit « ambiguous ».",
        "level": "C1"
      }
    ],
    "10": [
      {
        "id": "10-0",
        "prompt": "I ___ a student.",
        "answer": "am",
        "options": [
          "am",
          "is",
          "are",
          "be"
        ],
        "explanation": "Avec I, le verbe be devient am.",
        "level": "A1"
      },
      {
        "id": "10-1",
        "prompt": "She ___ English.",
        "answer": "speaks",
        "options": [
          "speaks",
          "speak",
          "speaking",
          "spoke"
        ],
        "explanation": "Au présent simple, he/she/it prend -s.",
        "level": "A1"
      },
      {
        "id": "10-2",
        "prompt": "They ___ happy.",
        "answer": "are",
        "options": [
          "are",
          "is",
          "am",
          "be"
        ],
        "explanation": "Avec they, on utilise are.",
        "level": "A1"
      },
      {
        "id": "10-3",
        "prompt": "I have ___ apple.",
        "answer": "an",
        "options": [
          "an",
          "a",
          "the",
          "some"
        ],
        "explanation": "An précède ici un son voyelle.",
        "level": "A1"
      },
      {
        "id": "10-4",
        "prompt": "He ___ not like coffee.",
        "answer": "does",
        "options": [
          "does",
          "do",
          "is",
          "has"
        ],
        "explanation": "La négation au présent avec he utilise does not.",
        "level": "A1"
      }
    ],
    "11": [
      {
        "id": "11-0",
        "prompt": "I have ___ apple.",
        "answer": "an",
        "options": [
          "an",
          "a",
          "the",
          "some"
        ],
        "explanation": "An précède ici un son voyelle.",
        "level": "A2"
      },
      {
        "id": "11-1",
        "prompt": "He ___ not like coffee.",
        "answer": "does",
        "options": [
          "does",
          "do",
          "is",
          "has"
        ],
        "explanation": "La négation au présent avec he utilise does not.",
        "level": "A2"
      },
      {
        "id": "11-2",
        "prompt": "There ___ two cats.",
        "answer": "are",
        "options": [
          "are",
          "is",
          "am",
          "be"
        ],
        "explanation": "Two cats est pluriel : there are.",
        "level": "A2"
      },
      {
        "id": "11-3",
        "prompt": "Yesterday, I ___ to London.",
        "answer": "went",
        "options": [
          "went",
          "go",
          "gone",
          "going"
        ],
        "explanation": "Yesterday appelle ici le prétérit : went.",
        "level": "A2"
      },
      {
        "id": "11-4",
        "prompt": "She has ___ her keys.",
        "answer": "lost",
        "options": [
          "lost",
          "lose",
          "losing",
          "loses"
        ],
        "explanation": "Has est suivi du participe passé lost.",
        "level": "A2"
      }
    ],
    "12": [
      {
        "id": "12-0",
        "prompt": "Yesterday, I ___ to London.",
        "answer": "went",
        "options": [
          "went",
          "go",
          "gone",
          "going"
        ],
        "explanation": "Yesterday appelle ici le prétérit : went.",
        "level": "B1"
      },
      {
        "id": "12-1",
        "prompt": "She has ___ her keys.",
        "answer": "lost",
        "options": [
          "lost",
          "lose",
          "losing",
          "loses"
        ],
        "explanation": "Has est suivi du participe passé lost.",
        "level": "B1"
      },
      {
        "id": "12-2",
        "prompt": "I ___ when you called.",
        "answer": "was sleeping",
        "options": [
          "was sleeping",
          "sleep",
          "have slept",
          "am sleeping"
        ],
        "explanation": "Une action en cours dans le passé : was + -ing.",
        "level": "B1"
      },
      {
        "id": "12-3",
        "prompt": "We have lived here ___ 2020.",
        "answer": "since",
        "options": [
          "since",
          "for",
          "during",
          "from"
        ],
        "explanation": "Since indique le point de départ. For indique une durée.",
        "level": "B1"
      },
      {
        "id": "12-4",
        "prompt": "If it rains, I ___ at home.",
        "answer": "will stay",
        "options": [
          "will stay",
          "would stay",
          "stayed",
          "have stayed"
        ],
        "explanation": "Premier conditionnel : if + présent, will + verbe.",
        "level": "B1"
      }
    ],
    "13": [
      {
        "id": "13-0",
        "prompt": "If it rains, I ___ at home.",
        "answer": "will stay",
        "options": [
          "will stay",
          "would stay",
          "stayed",
          "have stayed"
        ],
        "explanation": "Premier conditionnel : if + présent, will + verbe.",
        "level": "B2"
      },
      {
        "id": "13-1",
        "prompt": "If I had more time, I ___ more.",
        "answer": "would read",
        "options": [
          "would read",
          "will read",
          "read",
          "have read"
        ],
        "explanation": "Deuxième conditionnel : if + passé, would + verbe.",
        "level": "B2"
      },
      {
        "id": "13-2",
        "prompt": "If I had known, I ___ you.",
        "answer": "would have helped",
        "options": [
          "would have helped",
          "will help",
          "would help",
          "help"
        ],
        "explanation": "Troisième conditionnel : would have + participe passé.",
        "level": "B2"
      },
      {
        "id": "13-3",
        "prompt": "You ___ have told me earlier.",
        "answer": "should",
        "options": [
          "should",
          "must to",
          "ought",
          "can to"
        ],
        "explanation": "Should have + participe exprime un reproche ou regret.",
        "level": "B2"
      },
      {
        "id": "13-4",
        "prompt": "Rarely ___ such kindness.",
        "answer": "have I seen",
        "options": [
          "have I seen",
          "I have seen",
          "I saw",
          "I see"
        ],
        "explanation": "Après rarely en début de phrase, on inverse auxiliaire et sujet.",
        "level": "B2"
      }
    ],
    "14": [
      {
        "id": "14-0",
        "prompt": "You ___ have told me earlier.",
        "answer": "should",
        "options": [
          "should",
          "must to",
          "ought",
          "can to"
        ],
        "explanation": "Should have + participe exprime un reproche ou regret.",
        "level": "C1"
      },
      {
        "id": "14-1",
        "prompt": "Rarely ___ such kindness.",
        "answer": "have I seen",
        "options": [
          "have I seen",
          "I have seen",
          "I saw",
          "I see"
        ],
        "explanation": "Après rarely en début de phrase, on inverse auxiliaire et sujet.",
        "level": "C1"
      },
      {
        "id": "14-2",
        "prompt": "I wish I ___ more confident.",
        "answer": "were",
        "options": [
          "were",
          "am",
          "will be",
          "have been"
        ],
        "explanation": "Wish + passé exprime un souhait contraire à la réalité.",
        "level": "C1"
      },
      {
        "id": "14-3",
        "prompt": "The report ___ by Friday.",
        "answer": "will have been completed",
        "options": [
          "will have been completed",
          "will completing",
          "has complete",
          "would completing"
        ],
        "explanation": "Futur antérieur passif : will have been + participe.",
        "level": "C1"
      },
      {
        "id": "14-4",
        "prompt": "Had I known, I ___ differently.",
        "answer": "would have acted",
        "options": [
          "would have acted",
          "will act",
          "act",
          "have acted"
        ],
        "explanation": "Had I known remplace if I had known : troisième conditionnel.",
        "level": "C1"
      }
    ],
    "15": [
      {
        "id": "15-0",
        "prompt": "Écoute puis choisis le sens français.",
        "answer": "bonjour",
        "options": [
          "bonjour",
          "ami",
          "J’aime les pommes.",
          "Le train part à neuf heures."
        ],
        "explanation": "« hello » signifie « bonjour ».",
        "level": "A0",
        "audio": "hello"
      },
      {
        "id": "15-1",
        "prompt": "Écoute puis choisis le sens français.",
        "answer": "eau",
        "options": [
          "eau",
          "livre",
          "Elle habite à Londres.",
          "Pourrais-tu ouvrir la fenêtre ?"
        ],
        "explanation": "« water » signifie « eau ».",
        "level": "A0",
        "audio": "water"
      },
      {
        "id": "15-2",
        "prompt": "Écoute puis choisis le sens français.",
        "answer": "ami",
        "options": [
          "ami",
          "merci",
          "Le train part à neuf heures.",
          "Je ne suis jamais allé en Écosse."
        ],
        "explanation": "« friend » signifie « ami ».",
        "level": "A0",
        "audio": "friend"
      },
      {
        "id": "15-3",
        "prompt": "Écoute puis choisis le sens français.",
        "answer": "livre",
        "options": [
          "livre",
          "J’aime les pommes.",
          "Pourrais-tu ouvrir la fenêtre ?",
          "La réunion a été reportée."
        ],
        "explanation": "« book » signifie « livre ».",
        "level": "A0",
        "audio": "book"
      },
      {
        "id": "15-4",
        "prompt": "Écoute puis choisis le sens français.",
        "answer": "merci",
        "options": [
          "merci",
          "Elle habite à Londres.",
          "Je ne suis jamais allé en Écosse.",
          "J’habitais près de la mer autrefois."
        ],
        "explanation": "« thank you » signifie « merci ».",
        "level": "A0",
        "audio": "thank you"
      }
    ],
    "16": [
      {
        "id": "16-0",
        "prompt": "Écoute puis écris la phrase anglaise.",
        "answer": "I like apples",
        "options": [],
        "explanation": "« I like apples » signifie « J’aime les pommes. ».",
        "level": "A1",
        "audio": "I like apples"
      },
      {
        "id": "16-1",
        "prompt": "Écoute puis écris la phrase anglaise.",
        "answer": "She lives in London",
        "options": [],
        "explanation": "« She lives in London » signifie « Elle habite à Londres. ».",
        "level": "A1",
        "audio": "She lives in London"
      },
      {
        "id": "16-2",
        "prompt": "Écoute puis écris la phrase anglaise.",
        "answer": "The train leaves at nine",
        "options": [],
        "explanation": "« The train leaves at nine » signifie « Le train part à neuf heures. ».",
        "level": "A1",
        "audio": "The train leaves at nine"
      },
      {
        "id": "16-3",
        "prompt": "Écoute puis écris la phrase anglaise.",
        "answer": "Could you open the window",
        "options": [],
        "explanation": "« Could you open the window » signifie « Pourrais-tu ouvrir la fenêtre ? ».",
        "level": "A1",
        "audio": "Could you open the window"
      },
      {
        "id": "16-4",
        "prompt": "Écoute puis écris la phrase anglaise.",
        "answer": "I have never been to Scotland",
        "options": [],
        "explanation": "« I have never been to Scotland » signifie « Je ne suis jamais allé en Écosse. ».",
        "level": "A1",
        "audio": "I have never been to Scotland"
      }
    ],
    "17": [
      {
        "id": "17-0",
        "prompt": "Écoute puis choisis le sens français.",
        "answer": "J’aime les pommes.",
        "options": [
          "J’aime les pommes.",
          "Le train part à neuf heures.",
          "La réunion a été reportée.",
          "Tu aurais dû m’appeler."
        ],
        "explanation": "« I like apples » signifie « J’aime les pommes. ».",
        "level": "A2",
        "audio": "I like apples"
      },
      {
        "id": "17-1",
        "prompt": "Écoute puis choisis le sens français.",
        "answer": "Elle habite à Londres.",
        "options": [
          "Elle habite à Londres.",
          "Pourrais-tu ouvrir la fenêtre ?",
          "J’habitais près de la mer autrefois.",
          "C’est plus facile à dire qu’à faire."
        ],
        "explanation": "« She lives in London » signifie « Elle habite à Londres. ».",
        "level": "A2",
        "audio": "She lives in London"
      },
      {
        "id": "17-2",
        "prompt": "Écoute puis choisis le sens français.",
        "answer": "Le train part à neuf heures.",
        "options": [
          "Le train part à neuf heures.",
          "Je ne suis jamais allé en Écosse.",
          "Tu aurais dû m’appeler.",
          "Arrêtons-nous pour aujourd’hui."
        ],
        "explanation": "« The train leaves at nine » signifie « Le train part à neuf heures. ».",
        "level": "A2",
        "audio": "The train leaves at nine"
      },
      {
        "id": "17-3",
        "prompt": "Écoute puis choisis le sens français.",
        "answer": "Pourrais-tu ouvrir la fenêtre ?",
        "options": [
          "Pourrais-tu ouvrir la fenêtre ?",
          "La réunion a été reportée.",
          "C’est plus facile à dire qu’à faire.",
          "bonjour"
        ],
        "explanation": "« Could you open the window » signifie « Pourrais-tu ouvrir la fenêtre ? ».",
        "level": "A2",
        "audio": "Could you open the window"
      },
      {
        "id": "17-4",
        "prompt": "Écoute puis choisis le sens français.",
        "answer": "Je ne suis jamais allé en Écosse.",
        "options": [
          "Je ne suis jamais allé en Écosse.",
          "J’habitais près de la mer autrefois.",
          "Arrêtons-nous pour aujourd’hui.",
          "eau"
        ],
        "explanation": "« I have never been to Scotland » signifie « Je ne suis jamais allé en Écosse. ».",
        "level": "A2",
        "audio": "I have never been to Scotland"
      }
    ],
    "18": [
      {
        "id": "18-0",
        "prompt": "Écoute puis choisis le sens français.",
        "answer": "Je ne suis jamais allé en Écosse.",
        "options": [
          "Je ne suis jamais allé en Écosse.",
          "J’habitais près de la mer autrefois.",
          "Arrêtons-nous pour aujourd’hui.",
          "eau"
        ],
        "explanation": "« I have never been to Scotland » signifie « Je ne suis jamais allé en Écosse. ».",
        "level": "B1",
        "audio": "I have never been to Scotland"
      },
      {
        "id": "18-1",
        "prompt": "Écoute puis choisis le sens français.",
        "answer": "La réunion a été reportée.",
        "options": [
          "La réunion a été reportée.",
          "Tu aurais dû m’appeler.",
          "bonjour",
          "ami"
        ],
        "explanation": "« The meeting has been postponed » signifie « La réunion a été reportée. ».",
        "level": "B1",
        "audio": "The meeting has been postponed"
      },
      {
        "id": "18-2",
        "prompt": "Écoute puis choisis le sens français.",
        "answer": "J’habitais près de la mer autrefois.",
        "options": [
          "J’habitais près de la mer autrefois.",
          "C’est plus facile à dire qu’à faire.",
          "eau",
          "livre"
        ],
        "explanation": "« I used to live near the sea » signifie « J’habitais près de la mer autrefois. ».",
        "level": "B1",
        "audio": "I used to live near the sea"
      },
      {
        "id": "18-3",
        "prompt": "Écoute puis choisis le sens français.",
        "answer": "Tu aurais dû m’appeler.",
        "options": [
          "Tu aurais dû m’appeler.",
          "Arrêtons-nous pour aujourd’hui.",
          "ami",
          "merci"
        ],
        "explanation": "« You should have called me » signifie « Tu aurais dû m’appeler. ».",
        "level": "B1",
        "audio": "You should have called me"
      },
      {
        "id": "18-4",
        "prompt": "Écoute puis choisis le sens français.",
        "answer": "C’est plus facile à dire qu’à faire.",
        "options": [
          "C’est plus facile à dire qu’à faire.",
          "bonjour",
          "livre",
          "J’aime les pommes."
        ],
        "explanation": "« It is easier said than done » signifie « C’est plus facile à dire qu’à faire. ».",
        "level": "B1",
        "audio": "It is easier said than done"
      }
    ],
    "19": [
      {
        "id": "19-0",
        "prompt": "Écoute puis écris la phrase anglaise.",
        "answer": "The meeting has been postponed",
        "options": [],
        "explanation": "« The meeting has been postponed » signifie « La réunion a été reportée. ».",
        "level": "B2",
        "audio": "The meeting has been postponed"
      },
      {
        "id": "19-1",
        "prompt": "Écoute puis écris la phrase anglaise.",
        "answer": "I used to live near the sea",
        "options": [],
        "explanation": "« I used to live near the sea » signifie « J’habitais près de la mer autrefois. ».",
        "level": "B2",
        "audio": "I used to live near the sea"
      },
      {
        "id": "19-2",
        "prompt": "Écoute puis écris la phrase anglaise.",
        "answer": "You should have called me",
        "options": [],
        "explanation": "« You should have called me » signifie « Tu aurais dû m’appeler. ».",
        "level": "B2",
        "audio": "You should have called me"
      },
      {
        "id": "19-3",
        "prompt": "Écoute puis écris la phrase anglaise.",
        "answer": "It is easier said than done",
        "options": [],
        "explanation": "« It is easier said than done » signifie « C’est plus facile à dire qu’à faire. ».",
        "level": "B2",
        "audio": "It is easier said than done"
      },
      {
        "id": "19-4",
        "prompt": "Écoute puis écris la phrase anglaise.",
        "answer": "Let us call it a day",
        "options": [],
        "explanation": "« Let us call it a day » signifie « Arrêtons-nous pour aujourd’hui. ».",
        "level": "B2",
        "audio": "Let us call it a day"
      }
    ],
    "20": [
      {
        "id": "20-0",
        "prompt": "Construis en anglais : Je suis heureux.",
        "answer": "I am happy",
        "options": [],
        "explanation": "La phrase correcte est : I am happy.",
        "level": "A1"
      },
      {
        "id": "20-1",
        "prompt": "Construis en anglais : Elle aime les livres.",
        "answer": "She likes books",
        "options": [],
        "explanation": "La phrase correcte est : She likes books.",
        "level": "A1"
      },
      {
        "id": "20-2",
        "prompt": "Construis en anglais : Nous apprenons l’anglais.",
        "answer": "We are learning English",
        "options": [],
        "explanation": "La phrase correcte est : We are learning English.",
        "level": "A1"
      },
      {
        "id": "20-3",
        "prompt": "Construis en anglais : Ceci est mon ami.",
        "answer": "This is my friend",
        "options": [],
        "explanation": "La phrase correcte est : This is my friend.",
        "level": "A1"
      },
      {
        "id": "20-4",
        "prompt": "Construis en anglais : Je voudrais de l’eau.",
        "answer": "I would like some water",
        "options": [],
        "explanation": "La phrase correcte est : I would like some water.",
        "level": "A1"
      }
    ],
    "21": [
      {
        "id": "21-0",
        "prompt": "Construis en anglais : Où habites-tu ?",
        "answer": "Where do you live",
        "options": [],
        "explanation": "La phrase correcte est : Where do you live.",
        "level": "A2"
      },
      {
        "id": "21-1",
        "prompt": "Construis en anglais : Parles-tu anglais ?",
        "answer": "Do you speak English",
        "options": [],
        "explanation": "La phrase correcte est : Do you speak English.",
        "level": "A2"
      },
      {
        "id": "21-2",
        "prompt": "Construis en anglais : Combien ça coûte ?",
        "answer": "How much does it cost",
        "options": [],
        "explanation": "La phrase correcte est : How much does it cost.",
        "level": "A2"
      },
      {
        "id": "21-3",
        "prompt": "Construis en anglais : À quelle heure part le train ?",
        "answer": "What time does the train leave",
        "options": [],
        "explanation": "La phrase correcte est : What time does the train leave.",
        "level": "A2"
      },
      {
        "id": "21-4",
        "prompt": "Construis en anglais : Pourquoi es-tu en retard ?",
        "answer": "Why are you late",
        "options": [],
        "explanation": "La phrase correcte est : Why are you late.",
        "level": "A2"
      }
    ],
    "22": [
      {
        "id": "22-0",
        "prompt": "Construis en anglais : Je suis allé au parc hier.",
        "answer": "I went to the park yesterday",
        "options": [],
        "explanation": "La phrase correcte est : I went to the park yesterday.",
        "level": "B1"
      },
      {
        "id": "22-1",
        "prompt": "Construis en anglais : Elle avait déjà fini.",
        "answer": "She had already finished",
        "options": [],
        "explanation": "La phrase correcte est : She had already finished.",
        "level": "B1"
      },
      {
        "id": "22-2",
        "prompt": "Construis en anglais : Nous regardions un film.",
        "answer": "We were watching a film",
        "options": [],
        "explanation": "La phrase correcte est : We were watching a film.",
        "level": "B1"
      },
      {
        "id": "22-3",
        "prompt": "Construis en anglais : J’ai perdu mes clés.",
        "answer": "I have lost my keys",
        "options": [],
        "explanation": "La phrase correcte est : I have lost my keys.",
        "level": "B1"
      },
      {
        "id": "22-4",
        "prompt": "Construis en anglais : Ils sont arrivés après le déjeuner.",
        "answer": "They arrived after lunch",
        "options": [],
        "explanation": "La phrase correcte est : They arrived after lunch.",
        "level": "B1"
      }
    ],
    "23": [
      {
        "id": "23-0",
        "prompt": "I was tired, ___ I kept working.",
        "answer": "but",
        "options": [
          "but",
          "because",
          "so",
          "if"
        ],
        "explanation": "But introduit un contraste.",
        "level": "B2"
      },
      {
        "id": "23-1",
        "prompt": "I stayed home ___ I was ill.",
        "answer": "because",
        "options": [
          "because",
          "although",
          "but",
          "unless"
        ],
        "explanation": "Because donne la cause.",
        "level": "B2"
      },
      {
        "id": "23-2",
        "prompt": "___ the rain, we went out.",
        "answer": "Despite",
        "options": [
          "Despite",
          "Although",
          "Because",
          "Since"
        ],
        "explanation": "Despite est suivi ici d’un nom.",
        "level": "B2"
      },
      {
        "id": "23-3",
        "prompt": "I will go ___ you come too.",
        "answer": "provided that",
        "options": [
          "provided that",
          "despite",
          "whereas",
          "because of"
        ],
        "explanation": "Provided that exprime une condition.",
        "level": "B2"
      },
      {
        "id": "23-4",
        "prompt": "He prefers tea, ___ she likes coffee.",
        "answer": "whereas",
        "options": [
          "whereas",
          "therefore",
          "unless",
          "because of"
        ],
        "explanation": "Whereas met en contraste deux faits.",
        "level": "B2"
      }
    ],
    "24": [
      {
        "id": "24-0",
        "prompt": "Construis en anglais : Bien qu’il pleuvait, nous sommes sortis.",
        "answer": "Although it was raining we went out",
        "options": [],
        "explanation": "La phrase correcte est : Although it was raining we went out.",
        "level": "C1"
      },
      {
        "id": "24-1",
        "prompt": "Construis en anglais : Si j’avais su, je serais resté.",
        "answer": "If I had known I would have stayed",
        "options": [],
        "explanation": "La phrase correcte est : If I had known I would have stayed.",
        "level": "C1"
      },
      {
        "id": "24-2",
        "prompt": "Construis en anglais : À peine étais-je arrivé que cela commença.",
        "answer": "No sooner had I arrived than it began",
        "options": [],
        "explanation": "La phrase correcte est : No sooner had I arrived than it began.",
        "level": "C1"
      },
      {
        "id": "24-3",
        "prompt": "Construis en anglais : Non seulement elle chante, mais elle danse aussi.",
        "answer": "Not only does she sing but she also dances",
        "options": [],
        "explanation": "La phrase correcte est : Not only does she sing but she also dances.",
        "level": "C1"
      },
      {
        "id": "24-4",
        "prompt": "Construis en anglais : Il aurait dû être prévenu.",
        "answer": "He should have been warned",
        "options": [],
        "explanation": "La phrase correcte est : He should have been warned.",
        "level": "C1"
      }
    ],
    "25": [
      {
        "id": "25-0",
        "prompt": "Hello! How are you?",
        "answer": "I am fine, thank you.",
        "options": [
          "I am fine, thank you.",
          "I am twenty years old.",
          "It is blue.",
          "At nine."
        ],
        "explanation": "On répond à How are you? en disant comment on va.",
        "level": "A0"
      },
      {
        "id": "25-1",
        "prompt": "What is your name?",
        "answer": "My name is Alex.",
        "options": [
          "My name is Alex.",
          "I am fine.",
          "Yes, please.",
          "In London."
        ],
        "explanation": "Pour donner son nom : My name is…",
        "level": "A0"
      },
      {
        "id": "25-2",
        "prompt": "Nice to meet you!",
        "answer": "Nice to meet you too!",
        "options": [
          "Nice to meet you too!",
          "It is cold.",
          "No, I cannot.",
          "At the station."
        ],
        "explanation": "Too signifie aussi : plaisir partagé.",
        "level": "A0"
      },
      {
        "id": "25-3",
        "prompt": "Where are you from?",
        "answer": "I am from France.",
        "options": [
          "I am from France.",
          "I am hungry.",
          "It is Monday.",
          "Thank you."
        ],
        "explanation": "From introduit ici le pays d’origine.",
        "level": "A0"
      },
      {
        "id": "25-4",
        "prompt": "Thank you!",
        "answer": "You are welcome!",
        "options": [
          "You are welcome!",
          "I am welcome.",
          "You are thank.",
          "Fine name."
        ],
        "explanation": "You are welcome signifie de rien.",
        "level": "A0"
      }
    ],
    "26": [
      {
        "id": "26-0",
        "prompt": "What would you like to drink?",
        "answer": "I would like some tea, please.",
        "options": [
          "I would like some tea, please.",
          "I am tea.",
          "I have drink.",
          "I was tomorrow."
        ],
        "explanation": "I would like permet de commander poliment.",
        "level": "A1"
      },
      {
        "id": "26-1",
        "prompt": "Are you ready to order?",
        "answer": "Yes, I would like the soup, please.",
        "options": [
          "Yes, I would like the soup, please.",
          "The bus is late.",
          "I am from Paris.",
          "It is my birthday."
        ],
        "explanation": "On indique au serveur ce que l’on souhaite.",
        "level": "A1"
      },
      {
        "id": "26-2",
        "prompt": "Anything else?",
        "answer": "No, thank you. Could I have the bill?",
        "options": [
          "No, thank you. Could I have the bill?",
          "I am else.",
          "It is yesterday.",
          "Where is north?"
        ],
        "explanation": "Could I have the bill? sert à demander l’addition.",
        "level": "A1"
      },
      {
        "id": "26-3",
        "prompt": "Can I help you?",
        "answer": "Yes, a table for two, please.",
        "options": [
          "Yes, a table for two, please.",
          "My sister is a teacher.",
          "I run every day.",
          "At seven yesterday."
        ],
        "explanation": "A table for two : une table pour deux personnes.",
        "level": "A1"
      },
      {
        "id": "26-4",
        "prompt": "Would you like milk in your tea?",
        "answer": "Yes, please.",
        "options": [
          "Yes, please.",
          "Milk is train.",
          "I was go.",
          "Yesterday table."
        ],
        "explanation": "Yes, please est une réponse polie à une proposition.",
        "level": "A1"
      }
    ],
    "27": [
      {
        "id": "27-0",
        "prompt": "Excuse me, where is the station?",
        "answer": "Go straight, then turn left.",
        "options": [
          "Go straight, then turn left.",
          "It is delicious.",
          "I am tired.",
          "You are welcome here."
        ],
        "explanation": "Go straight et turn left donnent une direction.",
        "level": "A2"
      },
      {
        "id": "27-1",
        "prompt": "Which platform does the train leave from?",
        "answer": "Platform three.",
        "options": [
          "Platform three.",
          "Three apples.",
          "Three euros.",
          "Three books."
        ],
        "explanation": "Platform signifie quai.",
        "level": "A2"
      },
      {
        "id": "27-2",
        "prompt": "Do you have a reservation?",
        "answer": "Yes, under the name Alex.",
        "options": [
          "Yes, under the name Alex.",
          "I am reserved yesterday.",
          "Go left.",
          "A coffee, please."
        ],
        "explanation": "Under the name… indique le nom de la réservation.",
        "level": "A2"
      },
      {
        "id": "27-3",
        "prompt": "How long does it take?",
        "answer": "About twenty minutes.",
        "options": [
          "About twenty minutes.",
          "Twenty euros.",
          "Twenty people.",
          "The red one."
        ],
        "explanation": "How long interroge ici sur une durée.",
        "level": "A2"
      },
      {
        "id": "27-4",
        "prompt": "Is this seat taken?",
        "answer": "No, you can sit here.",
        "options": [
          "No, you can sit here.",
          "It is raining.",
          "Turn right.",
          "It is too spicy."
        ],
        "explanation": "Seat taken signifie place occupée.",
        "level": "A2"
      }
    ],
    "28": [
      {
        "id": "28-0",
        "prompt": "Could we reschedule the meeting?",
        "answer": "Of course. Does Thursday work for you?",
        "options": [
          "Of course. Does Thursday work for you?",
          "I am a meeting.",
          "Yesterday only going.",
          "It is delicious."
        ],
        "explanation": "Reschedule signifie déplacer un rendez-vous.",
        "level": "B1"
      },
      {
        "id": "28-1",
        "prompt": "Could you clarify your point?",
        "answer": "Certainly. What I mean is that we need more time.",
        "options": [
          "Certainly. What I mean is that we need more time.",
          "Point at the door.",
          "I am fine, thanks.",
          "The train is blue."
        ],
        "explanation": "What I mean is… permet de reformuler.",
        "level": "B1"
      },
      {
        "id": "28-2",
        "prompt": "I am afraid I disagree.",
        "answer": "I understand your concern. Let us look at the evidence.",
        "options": [
          "I understand your concern. Let us look at the evidence.",
          "You must be stupid.",
          "I am disagree too.",
          "Please buy bread."
        ],
        "explanation": "On reconnaît le désaccord et propose de discuter des faits.",
        "level": "B1"
      },
      {
        "id": "28-3",
        "prompt": "What are your thoughts on this proposal?",
        "answer": "On balance, I think the benefits outweigh the risks.",
        "options": [
          "On balance, I think the benefits outweigh the risks.",
          "I proposal yesterday.",
          "The weather is green.",
          "I am fifteen."
        ],
        "explanation": "On balance : tout bien considéré. Outweigh : l’emporter sur.",
        "level": "B1"
      },
      {
        "id": "28-4",
        "prompt": "Would you be open to a compromise?",
        "answer": "Yes, provided that we can agree on the main priorities.",
        "options": [
          "Yes, provided that we can agree on the main priorities.",
          "No priorities was.",
          "I ate breakfast.",
          "Turn left here."
        ],
        "explanation": "Provided that signifie à condition que.",
        "level": "B1"
      }
    ],
    "29": [
      {
        "id": "29-0",
        "prompt": "Could we reschedule the meeting?",
        "answer": "Of course. Does Thursday work for you?",
        "options": [
          "Of course. Does Thursday work for you?",
          "I am a meeting.",
          "Yesterday only going.",
          "It is delicious."
        ],
        "explanation": "Reschedule signifie déplacer un rendez-vous.",
        "level": "C1"
      },
      {
        "id": "29-1",
        "prompt": "Could you clarify your point?",
        "answer": "Certainly. What I mean is that we need more time.",
        "options": [
          "Certainly. What I mean is that we need more time.",
          "Point at the door.",
          "I am fine, thanks.",
          "The train is blue."
        ],
        "explanation": "What I mean is… permet de reformuler.",
        "level": "C1"
      },
      {
        "id": "29-2",
        "prompt": "I am afraid I disagree.",
        "answer": "I understand your concern. Let us look at the evidence.",
        "options": [
          "I understand your concern. Let us look at the evidence.",
          "You must be stupid.",
          "I am disagree too.",
          "Please buy bread."
        ],
        "explanation": "On reconnaît le désaccord et propose de discuter des faits.",
        "level": "C1"
      },
      {
        "id": "29-3",
        "prompt": "What are your thoughts on this proposal?",
        "answer": "On balance, I think the benefits outweigh the risks.",
        "options": [
          "On balance, I think the benefits outweigh the risks.",
          "I proposal yesterday.",
          "The weather is green.",
          "I am fifteen."
        ],
        "explanation": "On balance : tout bien considéré. Outweigh : l’emporter sur.",
        "level": "C1"
      },
      {
        "id": "29-4",
        "prompt": "Would you be open to a compromise?",
        "answer": "Yes, provided that we can agree on the main priorities.",
        "options": [
          "Yes, provided that we can agree on the main priorities.",
          "No priorities was.",
          "I ate breakfast.",
          "Turn left here."
        ],
        "explanation": "Provided that signifie à condition que.",
        "level": "C1"
      }
    ]
  }
};
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuffle=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;};
const norm=s=>s.trim().toLowerCase().replace(/[.,!?;:]/g,'').replace(/’/g,"'").replace(/\s+/g,' ');
const rank=x=>x<300?'E':x<900?'D':x<1800?'C':x<3200?'B':x<5000?'A':'S';
const defaults=()=>({name:'Aventurier',xp:0,coins:0,completed:0,level:'A1'});
let local=defaults();try{const d=JSON.parse(localStorage.getItem('eq-static-v1'));if(d&&typeof d.name==='string'&&DATA.levels.includes(d.level)&&['xp','coins','completed'].every(k=>Number.isFinite(d[k])&&d[k]>=0))local=d;}catch{}
let profile={...local},online=false,server=false,guilds=[],view='quests',game=null,part=null,authMode='login',busy=false,activeGuild=null,poll=null;
let filters={search:'',category:'Tous',level:'Tous'};
function notice(t){$('#notice').textContent=t;}
function save(){if(!online){local={...profile};try{localStorage.setItem('eq-static-v1',JSON.stringify(local));}catch{notice('Le navigateur ne permet pas de conserver ta progression. Ouvre le site avec Live Server et autorise le stockage.');}}stats();}
function stats(){$('#stats').textContent=`◇ ${profile.coins} cristaux · ✦ ${profile.xp} XP · Rang ${rank(profile.xp)}`;$('#mode').textContent=online?'✓ Progression sauvegardée sur ton compte':'Progression sur cet appareil';$('#account').textContent=online?'Se déconnecter':'Se connecter / Créer un compte';}
async function request(path,body){const r=await fetch(path,{method:body?'POST':'GET',headers:body?{'Content-Type':'application/json'}:{},body:body?JSON.stringify(body):undefined,credentials:'same-origin'});let d;try{d=await r.json();}catch{throw Error('Le serveur de comptes est indisponible. Les jeux restent accessibles en mode local.');}if(!r.ok)throw Error(d.error||'La demande a échoué.');return d;}
const api=b=>request('/api/quest',b);
async function refresh(){const d=await api();server=true;online=!d.guest;if(online){profile=d.profile;guilds=d.guilds||[];}else{profile={...local};guilds=[];}stats();}
function render(){clearInterval(poll);document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));stats();const c=$('#content');
if(view==='quests'){c.innerHTML=`<div class="hero"><div><span class="badge">30 jeux · 6 niveaux · À ton rythme</span><h1>Ton anglais.<br><em>Ton prochain pouvoir.</em></h1><p>Transforme tes premiers mots en grandes victoires.<br>Choisis une quête et gagne en confiance.</p></div><div class="rank">${rank(profile.xp)}<small>TON RANG</small></div></div><div class="filters"><input id="search" type="search" aria-label="Chercher un jeu" placeholder="Chercher une quête…" value="${esc(filters.search)}"><select id="category" aria-label="Catégorie">${['Tous',...DATA.categories].map(v=>`<option ${v===filters.category?'selected':''}>${esc(v)}</option>`).join('')}</select><select id="level" aria-label="Niveau">${['Tous',...DATA.levels].map(v=>`<option ${v===filters.level?'selected':''}>${v}</option>`).join('')}</select></div><div class="grid" id="games"></div>`;drawGames();$('#search').oninput=e=>{filters.search=e.target.value;drawGames();};$('#category').onchange=e=>{filters.category=e.target.value;drawGames();};$('#level').onchange=e=>{filters.level=e.target.value;drawGames();};}
if(view==='powers')c.innerHTML=`<div class="wide"><h1>Mes pouvoirs</h1><p>Gagne des cristaux en jouant. Active un pouvoir pendant une partie, avant de répondre. Un seul pouvoir par partie.</p></div><div class="grid">${DATA.powers.map(p=>`<article class="card"><span class="icon">${p.icon}</span><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p><span class="badge">◇ ${p.cost} cristaux</span></article>`).join('')}</div>`;
if(view==='profile'){const target=[300,900,1800,3200,5000].find(v=>v>profile.xp);c.innerHTML=`<div class="wide"><h1>Ton aventure continue.</h1><div class="panel"><div class="rank">${rank(profile.xp)}<small>RANG ACTUEL</small></div><h2>${esc(profile.name)}</h2><p>${profile.xp} XP · ${profile.completed} parties terminées · ${profile.coins} cristaux</p><div class="progress"><span style="width:${target?Math.min(100,profile.xp/target*100):100}%"></span></div><p>${target?`${target-profile.xp} XP avant le prochain rang.`:'Rang S atteint. Continue à apprendre !'}</p></div><form id="profile-form"><label>Pseudo<input name="name" value="${esc(profile.name)}" minlength="2" maxlength="24" required></label><label>Mon niveau<select name="level">${DATA.levels.map((l,i)=>`<option value="${l}" ${l===profile.level?'selected':''}>${l} — ${DATA.levelNames[i]}</option>`).join('')}</select></label><button class="primary">Enregistrer</button></form><p>${online?'Ta progression est liée à ton compte.':'Ta progression est conservée dans ce navigateur. Connecte-toi au serveur pour retrouver un compte sur plusieurs appareils.'}</p></div>`;$('#profile-form').onsubmit=async e=>{e.preventDefault();const f=new FormData(e.target);try{if(online){await api({action:'profile',name:f.get('name'),level:f.get('level')});await refresh();}else{profile.name=f.get('name').trim();profile.level=f.get('level');save();}render();notice('Profil enregistré.');}catch(x){notice(x.message);}};}
if(view==='groups')renderGroups();}
function drawGames(){const list=DATA.games.filter(g=>(filters.category==='Tous'||g.category===filters.category)&&(filters.level==='Tous'||g.level===filters.level)&&norm(g.name+' '+g.desc+' '+g.category).includes(norm(filters.search)));$('#games').innerHTML=list.length?list.map(g=>`<article class="card"><div class="tags"><span>${esc(g.category)}</span><span>${g.level}</span></div><span class="icon">${g.icon}</span><h3>${esc(g.name)}</h3><p>${esc(g.desc)}</p><button class="primary" data-game="${g.id}">Jouer →</button></article>`).join(''):'<p class="empty">Aucune quête avec ces filtres.</p>';document.querySelectorAll('[data-game]').forEach(b=>b.onclick=()=>start(Number(b.dataset.game)));}
async function start(id){if(busy)return;busy=true;try{game=DATA.games.find(g=>g.id===id);const d=online?await api({action:'start',game:id}):{questions:shuffle(DATA.questions[id]).slice(0,5)};part={qs:d.questions.map(q=>({...q,options:shuffle(q.options||[])})),attempt:d.attempt,index:0,score:0,xp:0,power:'',shieldUsed:false,feedback:null,hint:'',done:false,selected:[],tokens:[],matches:{},left:null,submitted:0};part.right=shuffle(part.qs.map(q=>({id:q.id,answer:DATA.questions[id].find(x=>x.id===q.id).answer})));setupQ();drawPlay();$('#play').showModal();}catch(e){notice(e.message);game=null;}finally{busy=false;}}
function canonical(q){return DATA.questions[game.id].find(v=>v.id===q.id);}
function setupQ(){part.feedback=null;part.hint='';part.selected=[];part.flipped=false;const q=part.qs[part.index];part.tokens=shuffle(canonical(q).answer.split(' ')).map((word,id)=>({word,id}));part.claim=shuffle(q.options?.length?q.options:[canonical(q).answer])[0];}
function drawPlay(){const s=part,q=s.qs[s.index],host=$('#play-content');if(s.done){host.innerHTML=`<span class="badge">Quête terminée</span><h2 id="play-title">Bravo, ${esc(profile.name)} !</h2><p>${s.score} bonnes réponses sur ${s.qs.length} · +${s.xp} XP</p><p>Relis les corrections puis retente la quête pour consolider ce que tu as appris.</p><button class="primary" id="replay">Rejouer</button>`;$('#replay').onclick=()=>{$('#play').close();start(game.id);};return;}
host.innerHTML=`<span class="badge">${esc(game.category)} · ${game.level}</span><h2 id="play-title">${esc(game.name)}</h2><p>Question ${s.index+1} / ${s.qs.length} · ${s.xp} XP gagnés</p><div class="progress"><span style="width:${s.index/s.qs.length*100}%"></span></div><div class="power-row">${DATA.powers.map(p=>`<button data-power="${p.id}" ${s.power||s.feedback?'disabled':''}>${p.icon} ${esc(p.name)} · ${p.cost} ◇</button>`).join('')}</div>${s.power?`<p class="good">Pouvoir actif : ${esc(DATA.powers.find(p=>p.id===s.power).name)}</p>`:''}<h3>${game.mode==='match'?'Associe chaque question à sa réponse.':esc(q.prompt)}</h3><div id="exercise"></div><div id="feedback" aria-live="polite"></div>`;
const ex=$('#exercise');const submit=v=>answer(v);const mode=game.mode;
if(mode==='match'){ex.innerHTML=`<div class="matching"><div>${s.qs.map(v=>`<button data-left="${v.id}" ${s.matches[v.id]?'disabled':''} class="${s.left===v.id?'selected':''}">${esc(v.prompt)}</button>`).join('')}</div><div>${s.right.map((v,i)=>`<button data-right="${i}" ${Object.values(s.matches).includes(v.answer)?'disabled':''}>${esc(v.answer)}</button>`).join('')}</div></div><p id="match-note" role="status"></p>${Object.keys(s.matches).length===s.qs.length?'<button class="primary" id="finish-match">Terminer</button>':''}`;document.querySelectorAll('[data-left]').forEach(b=>b.onclick=()=>{s.left=b.dataset.left;drawPlay();});document.querySelectorAll('[data-right]').forEach(b=>b.onclick=()=>{if(!s.left)return;const a=s.right[Number(b.dataset.right)].answer;if(norm(a)===norm(canonical(s.qs.find(v=>v.id===s.left)).answer)){s.matches[s.left]=a;s.left=null;drawPlay();}else $('#match-note').textContent='Pas encore ! Essaie une autre paire.';});if($('#finish-match'))$('#finish-match').onclick=finishMatch;}
else if(['choice','dialogue','listen'].includes(mode)){ex.innerHTML=`${mode==='listen'?'<button id="listen">♫ Écouter</button>':''}<div class="options">${q.options.map((a,i)=>`<button data-option="${i}" ${s.feedback?'disabled':''}>${esc(a)}</button>`).join('')}</div>`;document.querySelectorAll('[data-option]').forEach(b=>b.onclick=()=>submit(q.options[Number(b.dataset.option)]));}
else if(mode==='bool'){ex.innerHTML=`<p>Proposition : <strong>${esc(s.claim)}</strong></p><div class="options"><button id="true" ${s.feedback?'disabled':''}>Vrai</button><button id="false" ${s.feedback?'disabled':''}>Faux</button></div>`;$('#true').onclick=()=>submit(s.claim);$('#false').onclick=()=>submit(norm(s.claim)!==norm(canonical(q).answer)?canonical(q).answer:'[proposition refusée]');}
else if(mode==='order'){ex.innerHTML=`<p>Ta phrase :</p><div class="tokens">${s.selected.map((t,i)=>`<button data-remove="${i}" ${s.feedback?'disabled':''}>${esc(t.word)}</button>`).join('')}</div><p>Mots disponibles :</p><div class="tokens">${s.tokens.filter(t=>!s.selected.some(x=>x.id===t.id)).map(t=>`<button data-token="${t.id}" ${s.feedback?'disabled':''}>${esc(t.word)}</button>`).join('')}</div><button id="validate" class="primary" ${s.feedback||!s.selected.length?'disabled':''}>Valider la phrase</button>`;document.querySelectorAll('[data-token]').forEach(b=>b.onclick=()=>{s.selected.push(s.tokens.find(t=>t.id===Number(b.dataset.token)));drawPlay();});document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{s.selected.splice(Number(b.dataset.remove),1);drawPlay();});$('#validate').onclick=()=>submit(s.selected.map(t=>t.word).join(' '));}
else{ex.innerHTML=`${mode==='dictation'?'<button id="listen">♫ Écouter la dictée</button>':''}${mode==='flash'?`<button id="flip">${s.flipped?esc(canonical(q).answer):'Voir le mot pour le mémoriser'}</button>`:''}<form id="answer-form"><label>Ta réponse en anglais<input id="answer-input" required autocomplete="off" ${s.feedback?'disabled':''}></label><button class="primary" ${s.feedback?'disabled':''}>Valider</button></form>`;$('#answer-form').onsubmit=e=>{e.preventDefault();submit($('#answer-input').value);};if($('#flip'))$('#flip').onclick=()=>{s.flipped=!s.flipped;drawPlay();};}
if($('#listen'))$('#listen').onclick=()=>speak(canonical(q).audio||canonical(q).answer);
document.querySelectorAll('[data-power]').forEach(b=>b.onclick=()=>power(b.dataset.power));
if(s.power==='oracle'){host.insertAdjacentHTML('beforeend','<button id="hint">Voir un indice</button><p id="hint-text"></p>');$('#hint-text').textContent=s.hint;$('#hint').onclick=hint;}
if(s.feedback){const f=s.feedback;$('#feedback').innerHTML=`<div class="feedback"><strong class="${f.correct?'good':'bad'}">${f.correct?'Bien joué !':'Continue, tu progresses.'}</strong><p>Réponse : ${esc(f.answer)}</p><p>${esc(f.explanation)}</p><span>+${f.xp} XP${f.shield?' · Bouclier utilisé':''}</span></div><button id="next" class="primary">${s.index===s.qs.length-1?'Voir mon résultat':'Question suivante →'}</button>`;$('#next').onclick=()=>{if(s.index===s.qs.length-1)s.done=true;else{s.index++;setupQ();}drawPlay();};}}
async function grade(q,value){if(online)return api({action:'answer',attempt:part.attempt,question:q.id,answer:value});const a=canonical(q),correct=norm(value)===norm(a.answer),shield=!correct&&part.power==='shield'&&!part.shieldUsed;if(shield)part.shieldUsed=true;const xp=correct?(part.power==='boost'?40:20):shield?10:0;profile.xp+=xp;profile.coins+=correct?5:0;if(part.index===part.qs.length-1)profile.completed++;save();return {correct,answer:a.answer,explanation:a.explanation,xp,shield};}
async function answer(value){if(busy||part.feedback||!value.trim())return;busy=true;try{part.feedback=await grade(part.qs[part.index],value);part.score+=part.feedback.correct?1:0;part.xp+=part.feedback.xp;if(online)await refresh();drawPlay();}catch(e){notice(e.message);}finally{busy=false;}}
async function finishMatch(){if(busy)return;busy=true;try{for(;part.submitted<part.qs.length;part.submitted++){part.index=part.submitted;const q=part.qs[part.submitted],f=await grade(q,part.matches[q.id]);part.score+=f.correct?1:0;part.xp+=f.xp;}if(online)await refresh();part.done=true;drawPlay();}catch(e){notice(e.message);}finally{busy=false;}}
async function power(id){if(busy||part.power||part.feedback)return;const p=DATA.powers.find(v=>v.id===id);if(profile.coins<p.cost){notice('Gagne encore quelques cristaux pour activer ce pouvoir.');return;}busy=true;try{if(online){await api({action:'power',attempt:part.attempt,power:id});await refresh();}else{profile.coins-=p.cost;save();}part.power=id;drawPlay();}catch(e){notice(e.message);}finally{busy=false;}}
async function hint(){try{part.hint=online?(await api({action:'hint',attempt:part.attempt})).hint:canonical(part.qs[part.index]).answer.split(' ').map(w=>w.slice(0,2)+'…').join(' ');$('#hint-text').textContent=part.hint;}catch(e){notice(e.message);}}
function speak(text){if(!('speechSynthesis' in window)){notice('La lecture audio est indisponible dans ce navigateur.');return;}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='en-GB';u.rate=.8;const v=speechSynthesis.getVoices().find(v=>v.lang.startsWith('en'));if(v)u.voice=v;speechSynthesis.speak(u);}
function renderGroups(){const c=$('#content');c.innerHTML=`<div class="wide"><h1>Ensemble, plus loin.</h1><p>Crée une guilde et entraide-toi avec tes amis. Sept personnes maximum par guilde.</p>${!online?'<div class="panel"><h2>Connecte-toi pour rejoindre tes amis.</h2><p>Les guildes et les discussions utilisent le serveur du projet complet. Avec ces fichiers seuls, les jeux et ta progression locale sont disponibles.</p><button id="group-login" class="primary">Se connecter</button></div>':`<div class="panel"><form id="create-group"><label>Nom de la nouvelle guilde<input name="name" minlength="3" maxlength="40" required></label><button>Créer</button></form><form id="join-group"><label>Code d’invitation<input name="code" required maxlength="20"></label><button>Rejoindre</button></form></div><div class="grid">${guilds.map((g,i)=>`<article class="card"><h3>${esc(g.name)}</h3><p>Code : ${esc(g.code)} · ${Number(g.size||0)} / 7</p><button data-guild="${i}">Ouvrir la discussion</button></article>`).join('')}</div><div id="chat"></div>`}</div>`;if(!online){$('#group-login').onclick=openAuth;return;}for(const [id,action] of [['create-group','create'],['join-group','join']])$('#'+id).onsubmit=async e=>{e.preventDefault();if(busy)return;busy=true;try{await api({action,...Object.fromEntries(new FormData(e.target))});await refresh();render();notice(action==='create'?'Guilde créée. Partage son code !':'Guilde rejointe !');}catch(x){notice(x.message);}finally{busy=false;}};document.querySelectorAll('[data-guild]').forEach(b=>b.onclick=()=>openGuild(guilds[Number(b.dataset.guild)]));}
async function openGuild(g){clearInterval(poll);activeGuild=g;$('#chat').innerHTML=`<div class="panel"><h2>${esc(g.name)}</h2><p id="members"></p><div id="messages" aria-live="polite"></div><form id="send"><label>Ton message<input name="body" required maxlength="500" autocomplete="off"></label><button class="primary">Envoyer</button></form><button id="leave">${g.owner===profile.id?'Supprimer ma guilde':'Quitter la guilde'}</button></div>`;$('#send').onsubmit=async e=>{e.preventDefault();if(busy)return;busy=true;try{await api({action:'message',guild:g.id,body:new FormData(e.target).get('body')});e.target.reset();await loadChat(g.id);}catch(x){notice(x.message);}finally{busy=false;}};$('#leave').onclick=async()=>{if(!confirm(g.owner===profile.id?'Supprimer cette guilde et tous ses messages ?':'Quitter cette guilde ?'))return;try{await api({action:'leave',guild:g.id});await refresh();render();}catch(e){notice(e.message);}};await loadChat(g.id);poll=setInterval(()=>{if(!document.hidden&&view==='groups')loadChat(g.id);},5000);}
async function loadChat(id){try{const d=await api({action:'chat',guild:id});if(view!=='groups'||activeGuild?.id!==id||!$('#messages'))return;$('#members').textContent=d.members.map(m=>m.name).join(' · ')+` (${d.members.length}/7)`;$('#messages').innerHTML=d.messages.map(m=>`<div class="message"><strong>${esc(m.name)}</strong> <small>${esc(new Date(m.time).toLocaleString('fr-FR'))}</small><p>${esc(m.body)}</p></div>`).join('')||'<p>Aucun message. Lance la conversation !</p>';}catch(e){clearInterval(poll);notice(e.message);}}
function authTabs(){const register=authMode==='register';$('#name-label').hidden=!register;$('#confirm-label').hidden=!register;$('#auth-form').elements.name.required=register;$('#auth-form').elements.confirmPassword.required=register;$('#auth-form').elements.password.autocomplete=register?'new-password':'current-password';document.querySelectorAll('[data-auth]').forEach(b=>b.classList.toggle('selected',b.dataset.auth===authMode));}
function openAuth(){authTabs();$('#auth-status').textContent=server?'':'Les comptes par mail nécessitent le serveur du projet complet. GitHub Pages seul conserve uniquement ta progression locale.';$('#auth').showModal();}
$('#auth-form').onsubmit=async e=>{e.preventDefault();if(busy)return;if(!server){$('#auth-status').textContent='Serveur non configuré : utilise le projet complet pour les comptes par mail. Aucun mot de passe n’a été enregistré.';return;}busy=true;try{await request('/api/auth',{action:authMode,...Object.fromEntries(new FormData(e.target))});await refresh();$('#auth').close();e.target.reset();render();notice('Connexion réussie. Ta progression de compte est disponible.');}catch(x){$('#auth-status').textContent=x.message;}finally{busy=false;}};
document.querySelectorAll('[data-auth]').forEach(b=>b.onclick=()=>{authMode=b.dataset.auth;authTabs();});document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>{view=b.dataset.view;render();});$('#close-auth').onclick=()=>$('#auth').close();$('#close-play').onclick=()=>{$('#play').close();render();};$('#play').addEventListener('cancel',()=>render());$('#account').onclick=async()=>{if(!online){openAuth();return;}try{await request('/api/auth',{action:'logout'});await refresh();render();notice('Déconnexion effectuée.');}catch(e){notice(e.message);}};
render();if(location.protocol!=='file:')refresh().then(render).catch(()=>{server=false;online=false;stats();});
