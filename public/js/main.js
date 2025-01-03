// Fonction pour récupérer et afficher les derniers articles
async function fetchLatestNews() {
    try {
        const response = await fetch('/api/news');
        const data = await response.json();
        displayNews(data.posts);
    } catch (error) {
        console.error('Erreur:', error);
        showError('Impossible de charger les articles');
    }
}

// TODO: Question 1 - Compléter la fonction displayNews
function displayNews(news) {
    const container = document.getElementById('news-container');
    // Utilisez Bootstrap pour créer des cards pour chaque article
    container.innerHTML = ''; // Vider le conteneur avant d'ajouter les articles

    articles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'card mb-3';

        card.innerHTML = `
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${article.image}" class="card-img" alt="${article.title}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.body.substring(0, 100)}...</p>
                        <a href="#" class="btn btn-primary">Voir plus</a>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// TODO: Question 2 - Créer une fonction pour gérer les erreurs
function showError(message) {
    // Afficher un message d'erreur avec Bootstrap
}

// Initialisation
document.addEventListener('DOMContentLoaded', fetchLatestNews);