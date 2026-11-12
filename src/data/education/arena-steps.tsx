import { ArenaStep } from "@/types/types";

export const arenaSteps: ArenaStep[] = [
   {
      rank: { fr: "Manieur de Shell", en: "Shell Wielder" },
      category: { fr: "Shell & serveur", en: "Shell & server" },
      skills: {
         fr: [
            "Manipuler le système de fichiers et écrire des scripts shell",
            "Prendre le contrôle d'un serveur via SSH",
            "Retrouver des fichiers cachés dans l'arborescence",
            "Gérer les droits (chmod) et les liens symboliques",
         ],
         en: [
            "Navigating the file system and writing shell scripts",
            "Taking control of a server over SSH",
            "Tracking down hidden files in the directory tree",
            "Managing permissions (chmod) and symbolic links",
         ],
      },
      badgeFight: 0,
   },
   {
      rank: { fr: "Apprenti Algorithmicien", en: "Apprentice Algorithmist" },
      category: { fr: "Algorithmie itérative", en: "Iterative algorithms" },
      skills: {
         fr: [
            "Manipuler chaînes et tableaux sans méthodes natives",
            "Recoder les fonctions natives de JavaScript",
            "Écrire ses premiers algorithmes itératifs",
         ],
         en: [
            "Handling strings and arrays without built-in methods",
            "Rewriting JavaScript's native functions from scratch",
            "Writing first iterative algorithms",
         ],
      },
      badgeFight: 1,
   },
   {
      rank: { fr: "Backtrackeur", en: "Backtracker" },
      category: {
         fr: "Récursivité & backtracking",
         en: "Recursion & backtracking",
      },
      skills: {
         fr: [
            "Comprendre le fonctionnement de la pile d'appels",
            "Écrire de nombreux algorithmes récursifs",
            "Sortir d'un labyrinthe grâce au backtracking",
         ],
         en: [
            "Understanding how the call stack works",
            "Writing many recursive algorithms",
            "Escaping a maze using backtracking",
         ],
      },
      badgeFight: 2,
   },
   {
      rank: { fr: "Basé", en: "Based" },
      category: { fr: "Bases numériques", en: "Number bases" },
      skills: {
         fr: [
            "Lire et écrire en binaire, octal et hexadécimal",
            "Coder des convertisseurs de bases",
            "Créer son propre système numérique… en emoji",
         ],
         en: [
            "Reading and writing binary, octal and hexadecimal",
            "Coding base converters",
            "Building a custom number system… in emoji",
         ],
      },
      badgeFight: 3,
   },
   {
      rank: { fr: "6 t'aime", en: "File Whisperer" },
      category: { fr: "Système de fichiers", en: "File system" },
      skills: {
         fr: [
            "Comprendre les file descriptors",
            "Lire et écrire des fichiers via l'API Node.js",
            "Utiliser les Buffers en Node.js",
         ],
         en: [
            "Understanding file descriptors",
            "Reading and writing files with the Node.js API",
            "Working with Buffers in Node.js",
         ],
      },
      badgeFight: 4,
   },
   {
      rank: { fr: "Fou à lier", en: "Linked Lunatic" },
      category: { fr: "Listes chaînées", en: "Linked lists" },
      skills: {
         fr: [
            "Créer et parcourir des listes chaînées",
            "Comprendre la différence entre primitives et références",
         ],
         en: [
            "Building and traversing linked lists",
            "Understanding primitives versus references",
         ],
      },
      badgeFight: 5,
   },
   {
      rank: { fr: "Équilibriste", en: "Tightrope Walker" },
      category: { fr: "Arbres binaires", en: "Binary trees" },
      skills: {
         fr: [
            "Créer et parcourir des arbres binaires",
            "Équilibrer des arbres de type AVL",
         ],
         en: ["Building and traversing binary trees", "Balancing AVL trees"],
      },
      badgeFight: 6,
   },
   {
      rank: { fr: "Succès", en: "Success" },
      category: {
         fr: "Certificat de réussite",
         en: "Certificate of Achievement",
      },
      skills: {
         fr: ["Certificat prouvant la bonne réussite de la formation"],
         en: ["Certificate proving successful completion of the training"],
      },
      badgeFight: 7,
   },
];
