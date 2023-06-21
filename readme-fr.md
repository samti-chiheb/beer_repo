# **Beer App**

Beer App est une application Web qui permet aux utilisateurs de parcourir et d'enregistrer des informations sur différentes bières. Elle propose des fonctionnalités telles que la recherche de bières, l'application de filtres et l'affichage des détails des bières. Les utilisateurs peuvent également enregistrer leurs bières préférées pour référence future.

## **Fonctionnalités**

- Afficher une liste de bières avec des détails tels que le nom, la date de première brassage, l'ABV et l'IBU.
- Rechercher des bières par nom.
- Appliquer des filtres pour affiner la liste des bières.
- Voir des informations détaillées sur une bière spécifique.
- Sauvegarder des bières favorites pour référence future.
- Design adaptatif pour une visualisation optimale sur différents appareils.

## **Installation**

Pour exécuter Beer App localement, suivez ces étapes :

1. Clonez le dépôt sur votre machine locale.
2. Naviguez vers le répertoire du projet.
3. Installez les dépendances requises en exécutant la commande suivante :
    
    ```
    npm install
    ```
    
4. Démarrez le serveur de développement en exécutant la commande suivante :
    
    ```
    npm run dev
    ```
    
5. Ouvrez votre navigateur web et visitez **`http://localhost:5173`** pour accéder à Beer App.

## **Technologies utilisées**

Beer App est construit en utilisant les technologies suivantes :

- Vite : Un serveur de développement rapide et des outils de construction pour les applications web modernes.
- React : Une bibliothèque JavaScript pour la construction d'interfaces utilisateur.
- React Router : Une bibliothèque de routage pour les applications React.
- Axios : Un client HTTP basé sur les promesses pour faire des requêtes API.
- styled-components : Une bibliothèque CSS-in-JS pour le style des composants React.

## **Défis rencontrés**

Le développement de l'application Beer App a été un processus d'apprentissage riche avec plusieurs défis à surmonter.

- **Calcul de la dernière page** : L'API que j'ai utilisée ne fournit pas de point de terminaison pour la longueur, donc le calcul de la dernière page a été un défi. J'ai choisi de régler dynamiquement la dernière page à chaque appel d'API, ce qui a été une solution efficace pour ce problème.

- **Mise en cache des données** : La mise en cache des données a également été un défi car je ne savais pas comment le faire initialement. Au début, j'ai mis en cache les pages et un produit, mais j'ai ensuite réalisé que je pouvais extraire les pages pour obtenir le produit unique. Cette réalisation a contribué à améliorer l'efficacité de la mise en cache dans l'application.

- **Pratique de React et styled-components** : Ce projet a été une excellente occasion de pratiquer React et styled-components. J'ai appris de nouvelles techniques et amélioré mes compétences dans ces technologies tout en développant une application fonctionnelle et utile.

Ces défis ont grandement contribué à ma croissance en tant que développeur et j'ai hâte de surmonter davantage de défis dans mes futurs projets.

## **Développement futur**

Plusieurs améliorations sont prévues pour Beer App :

- **Boutons de navigation dans les détails de la bière** : Je prévois d'introduire des boutons de navigation dans la page de détails de la bière. Cette fonctionnalité permettra aux utilisateurs de naviguer vers la bière suivante ou précédente sans avoir à revenir à la liste des bières.
- **Filtre et recherche optimisés** : Je travaille à l'amélioration de la fonctionnalité de filtrage et de recherche en affichant des balises de filtre et de recherche qui peuvent être supprimées en un seul clic. Cela permettra aux utilisateurs de voir et de gérer facilement leurs filtres actifs et leurs requêtes de recherche.
- **Amélioration de la mise en cache** : Actuellement, l'application utilise le stockage de session pour la mise en cache. Je prévois d'optimiser cette fonctionnalité pour une meilleure performance et expérience utilisateur.
- **Image placeholder** : Pour les bières qui n'ont pas d'images associées, je prévois d'implémenter une image placeholder pour améliorer la cohérence visuelle de l'application.
- **Barre de recherche dans la barre de navigation** : Je prévois d'ajouter une barre de recherche dans la barre de navigation. Cette fonctionnalité permettra aux utilisateurs de rechercher une bière par nom depuis n'importe où dans l'application. Je prévois également d'introduire des suggestions de recherche pour aider les utilisateurs à trouver plus rapidement les bières qu'ils désirent.

Ces améliorations visent à améliorer l'expérience utilisateur, augmenter les performances de l'application et offrir une navigation plus efficace dans les bières. Restez à l'écoute pour ces mises à jour !

## **Contribuer**

Les contributions au projet Beer App sont les bienvenues ! Si vous avez des suggestions, des rapports de bugs ou des demandes de fonctionnalités, veuillez ouvrir un problème sur le dépôt GitHub.

## **Licence**

Beer App est open source et disponible sous la **[Licence MIT](https://opensource.org/licenses/MIT)**.