# **Beer App**

L'application Beer est une application web qui permet aux utilisateurs de parcourir et de sauvegarder des informations sur différentes bières. Elle offre des fonctionnalités telles que la recherche de bières, l'application de filtres et la consultation des détails des bières. Les utilisateurs peuvent également sauvegarder leurs bières préférées pour référence ultérieure.

## **Fonctionnalités**

- Afficher une liste de bières avec des détails tels que le nom, la date de première brasserie, l'ABV et l'IBU.
- Rechercher des bières par nom.
- Appliquer des filtres pour affiner la liste des bières.
- Consulter des informations détaillées sur une bière spécifique.
- Sauvegarder des bières préférées pour référence ultérieure.
- Conception responsive pour une visualisation optimale sur différents appareils.

## **Installation**

Pour exécuter l'application Beer localement, suivez ces étapes :

1. Clonez le dépôt sur votre machine locale.
2. Accédez au répertoire du projet.
3. Installez les dépendances requises en exécutant la commande suivante :

    ```
    npm install
    ```
    
4. Lancez le serveur de développement en exécutant la commande suivante :

    ```
    npm run dev
    ```
    
5. Ouvrez votre navigateur web et rendez-vous sur **`http://localhost:5173`** pour accéder à l'application Beer.

## **Technologies Utilisées**

L'application Beer est construite en utilisant les technologies suivantes :

- Vite : Un serveur de développement rapide et des outils de construction pour les applications web modernes.
- React : Une bibliothèque JavaScript pour construire des interfaces utilisateur.
- React Router : Une bibliothèque de routage pour les applications React.
- Axios : Un client HTTP basé sur les promesses pour effectuer des requêtes API.
- styled-components : Une bibliothèque CSS-in-JS pour styliser les composants React.

## **Architecture**

### **Arborescence**
├── App.jsx
├── Container
│   ├── BeerDetails.jsx
│   ├── BeerList.jsx
│   └── NotFound.jsx
├── assets
│   └── react.svg
├── components
│   ├── BeerCard.jsx
│   ├── Filter.jsx
│   ├── ListTable.jsx
│   ├── Pagination.jsx
│   ├── Search.jsx
│   ├── common
│   │   ├── SaveButton.jsx
│   │   └── ShowAlert.jsx
│   └── navbar
│       └── Navbar.jsx
├── hook
│   └── useBeers.jsx
├── index.css
├── main.jsx
└── utils
    └── ApiHandler.js


L'application Beer suit une architecture basée sur les composants. Voici un aperçu des principaux composants et de leurs responsabilités :

- **App** : Le composant racine qui configure le routage et rend les pages principales de l'application.
- **BeerList** : Affiche la liste des bières et gère les fonctionnalités de recherche, de filtrage et de pagination.
- **BeerDetails** : Affiche des informations détaillées sur une bière spécifique.
- **Navbar** : Fournit des liens de navigation vers différentes sections de l'application.
- **ListTable** : Rend la table des bières avec leurs détails de base.
- **Pagination** : Gère la fonctionnalité de pagination pour naviguer dans la liste des bières.
- **SearchComponent** : Fournit la barre de recherche pour rechercher des bières par nom.
- **FilterComponent** : Permet aux utilisateurs d'appliquer des filtres pour affiner la liste des bières.
- **BeerCard** : Affiche des informations détaillées sur une bière sous forme de carte.
- **SaveButton** : Permet aux utilisateurs de sauvegarder une bière en tant que favorite.

L'application utilise la classe **`ApiHandler`** et le hook **`useApi`** pour la gestion de l'API.

- **ApiHandler** : La classe **`ApiHandler`** est responsable de l'envoi des requêtes API pour récupérer les données sur les bières. Elle utilise la bibliothèque Axios pour gérer les requêtes HTTP. La classe fournit des méthodes pour récupérer une liste de bières, récupérer une bière par ID, obtenir une bière aléatoire et sauvegarder une bière. Elle gère également la gestion des erreurs et fournit une valeur configurable **`per_page`** pour la pagination.
- **useApi** : Le hook **`useApi`** est un hook personnalisé qui simplifie la gestion de l'API dans les composants fonctionnels. Il se charge de récupérer les données de l'API et de gérer les états de chargement, la gestion des erreurs et le caching. Le hook accepte des paramètres tels que **`isCaching`** (pour activer/désactiver le caching), **`filtreQuery`** (pour appliquer des filtres à la requête API) et **`searchQuery`** (pour rechercher des bières par nom). Il renvoie un objet avec les données, la page courante, la dernière page, l'état de chargement et les fonctions pour naviguer entre les pages.

En utilisant la classe **`ApiHandler`** et le hook **`useApi`**, l'application Beer sépare la logique de l'API des composants de présentation, favorisant ainsi la modularité et la réutilisabilité du code.

Cette architecture basée sur les composants et centrée sur l'API permet la scalabilité, la maintenabilité et la séparation des responsabilités, facilitant ainsi l'extension et l'amélioration de la fonctionnalité de l'application à l'avenir.

## **Contributions**

Les contributions au projet Beer sont les bienvenues ! Si vous avez des suggestions, des rapports de bugs ou des demandes de fonctionnalités, veuillez ouvrir une issue sur le dépôt GitHub.

## **Licence**

L'application Beer est open source et disponible sous la **[Licence MIT](https://opensource.org/licenses/MIT)**.