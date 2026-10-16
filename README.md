# English Quest — HTML, CSS et JavaScript

Cette version comprend exactement quatre fichiers, sans React et sans installation obligatoire :

- `index.html` : structure et fenêtres de jeu/compte.
- `style.css` : couleurs, mise en page et affichage mobile.
- `script.js` : 30 jeux, questions, corrections, XP, cristaux et pouvoirs.
- `README.md` : ce guide.

## Ouvrir dans VS Code

1. Décompresse l’archive et ouvre son dossier dans VS Code.
2. Ouvre index.html dans ton navigateur, ou utilise l’extension Live Server de VS Code.
3. Garde les trois fichiers du site dans le même dossier.

## Ce qui fonctionne immédiatement

30 jeux répartis en six catégories : verbes irréguliers, vocabulaire, grammaire, écoute, construction de phrases et conversation. Six niveaux A0, A1, A2, B1, B2, C1. Questions corrigées avec explications en français. Associations, QCM, vrai/faux, cartes mémoire, dictées et phrases à remettre dans l’ordre.

Une bonne réponse rapporte 20 XP et 5 cristaux. Rangs : E dès 0 XP, D à 300, C à 900, B à 1800, A à 3200 et S à 5000. Les pouvoirs coûtent des cristaux : indice (15), bouclier contre une erreur (25), double XP (40). Un seul pouvoir par partie.

La progression de découverte reste dans le stockage local du navigateur. Elle n’est pas partagée entre appareils et disparaît si ce stockage est effacé. Ouvrir le site via une autre adresse crée un autre espace de stockage. Certains navigateurs limitent le stockage lorsque le fichier est ouvert directement ; Live Server évite ce problème. L’écoute utilise la synthèse vocale du navigateur ; la disponibilité d’une voix anglaise dépend de l’appareil. Aucun microphone n’est nécessaire.

## Comptes par mail et guildes

Ces quatre fichiers ne contiennent pas de serveur ni de base de données. GitHub Pages héberge des fichiers statiques : les comptes par mail, la sauvegarde entre appareils et les discussions nécessitent le serveur du projet complet déjà fourni dans English-Quest-VSCode-GitHub.zip.

Le JavaScript détecte les routes /api/quest et /api/auth sur la même adresse que le site. Avec un serveur compatible, les écrans de connexion/inscription et de guildes deviennent opérationnels ; les réponses et récompenses sont alors vérifiées par le serveur. Les guildes sont limitées à sept personnes par le serveur. En son absence, le site affiche clairement le mode local et explique la configuration nécessaire. Aucun faux compte et aucune fausse discussion ne sont créés. Le code de la base de données et l’authentification sécurisée restent dans le projet complet : ne remplace pas ces fonctions par des mots de passe dans le JavaScript.

Pour intégrer cette interface au projet complet, conserve ses API et publie ces fichiers statiques à côté d’elles sur le même domaine. La configuration du domaine, des cookies et de la base de données doit être faite dans ce projet. Un simple lien vers un serveur sur un autre domaine ne suffit pas. La progression locale et celle d’un compte sont séparées ; aucun transfert automatique n’est effectué.

## Mettre les fichiers sur GitHub et activer GitHub Pages

1. Crée un dépôt sur GitHub.
2. Ajoute ces quatre fichiers à la racine du dépôt et valide les changements.
3. Dans Settings → Pages, choisis Deploy from a branch, puis main et / (root), et enregistre.
4. Ouvre l’adresse indiquée par GitHub une fois la publication terminée.

Documentation : https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Personnaliser

Change le titre et les textes dans index.html, les variables de couleur en haut de style.css et le catalogue DATA au début de script.js. Chaque question possède un identifiant, un énoncé, une réponse, des options et une explication. En mode serveur, garde les identifiants et le catalogue alignés avec ceux du serveur.

Le contenu pédagogique de cette version est fini : les parties tirent cinq questions dans le petit ensemble de chaque jeu. Ajoute des questions pour renouveler les sessions. Les corrections par texte tolèrent les majuscules, espaces et ponctuation courante, mais ne comprennent pas toutes les formulations équivalentes. Le vrai/faux demande d’identifier une proposition ; les cartes mémoire invitent à se souvenir puis à saisir le mot. Les associations peuvent être réessayées et sont un entraînement guidé.

Les comptes du serveur complet n’ont pas encore de vérification de mail ni de récupération de mot de passe. Le fonctionnement réel du compte et du chat doit être testé avec le serveur et sa base de données avant utilisation publique.
