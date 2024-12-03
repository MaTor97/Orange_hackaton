# Orange_hackaton
# To-Do List Collaborative pour 5 personnes (sans chef de projet)

---

## 1. Recherche et préparation
**Responsables** : Membres A & B  
- [x] **Comprendre l'API Geofencing d'Orange** :  
  - Lire la documentation officielle.  
  - Faire une liste des endpoints pertinents (délimitation de zones, notifications, localisation).  
  - Identifier les limitations techniques ou les quotas d'utilisation.  
- [x] **Benchmarking** :  
  - Analyser des applications similaires (ex. localisation en temps réel, notifications en groupe).  
  - Proposer des idées UX/UI adaptées à un festival.  
- [x] **Cartographie initiale** :  
  - Délimiter une zone fictive pour tester le geofencing.  
  - Collecter des ressources nécessaires (cartes, données GPS).  

---

## 2. Backend et intégration API
**Responsables** : Membres C & D  
- [x] Configurer le serveur backend (Node.js, Django, etc.).  
- [x] Implémenter l'authentification avec l'API d'Orange.  
- [ ] Créer une logique pour :  
  - Délimiter et enregistrer une zone géographique.  
  - Recevoir et stocker les données des appareils connectés.  
  - Envoyer des messages depuis l'organisation.  
- [ ] Tester les réponses de l'API et gérer les erreurs.  

---

## 3. Frontend et interactions utilisateur
**Responsables** : Membres B & E  
- [x] Prototyper l’interface utilisateur :  
  - Carte interactive pour voir les zones et localiser les amis.  
  - Formulaires simples pour envoyer des messages ou signaler une urgence.  
- [x] Développer les pages :  
  - Localisation en temps réel (avec WebSocket si nécessaire).  
  - Section d’alerte en cas d’urgence.  
- [x] Tester les fonctionnalités sur différents appareils (desktop et mobile).  

---

## 4. Sécurité et tests
**Responsables** : Membres A & D  
- [ ] Assurer la protection des données des utilisateurs :  
  - Chiffrer les communications (HTTPS, JWT pour l'authentification).  
  - Respecter les normes GDPR pour la gestion des données.  
- [ ] Tester les scénarios possibles :  
  - Envoi de messages entre utilisateurs.  
  - Notifications à l’organisation.  
  - Localisation précise d’un appareil dans la zone.  
- [ ] Documenter tous les bugs et leurs corrections.  

---

## 5. Déploiement et retour utilisateur
**Responsables** : Membres C & E  
- [ ] Déployer une version bêta :  
  - Héberger l'application backend et frontend.  
  - Fournir un guide d'utilisation simple.  
- [ ] Organiser un test utilisateur :  
  - Simuler un événement fictif pour tester en conditions réelles.  
  - Recueillir les retours sur l’expérience utilisateur.  
- [ ] Apporter les corrections nécessaires et préparer la version finale.  

---

## Outils recommandés
- **Gestion de tâches** : Trello, Notion ou Jira  
- **Partage de code** : GitHub ou GitLab  
- **Communication** : Slack ou Microsoft Teams  
- **Cartographie & géolocalisation** : Leaflet, Google Maps API  

---

### 🚀 Avec cette structure, vous pouvez avancer efficacement tout en gardant une vision claire de l’avancement.
