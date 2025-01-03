const axios = require('axios');

const DUMMY_JSON_URL = 'https://dummyjson.com/posts';

const newsController = {
    // TODO: Question 5 - Implémenter les méthodes du contrôleur
    async getAllNews(req, res) {
        try {
            // Utiliser axios pour faire une requête à DummyJSON
            const response = await axios.get(DUMMY_JSON_URL);
            res.status(200).json(response.data.posts);
        } catch (error) {
            res.status(500).json({ message: 'Erreur serveur' });
        }
    },

    async getNewsById(req, res) {
        // TODO: Implémenter la récupération d'un article par son ID
        const { id } = req.params;

        if (!id || isNaN(id)) {
            return res.status(400).json({ message: 'ID invalide.' });
        }

        try {
            const response = await axios.get(`${DUMMY_JSON_URL}/${id}`);
            res.status(200).json(response.data);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                res.status(404).json({ message: "Article introuvable." });
            } else {
                console.error(error.message);
                res.status(500).json({ message: "Erreur lors de la récupération de l'article." });
            }
        }
    },

    async createNews(req, res) {
        // TODO: Implémenter la création d'un article
        const { title, body, userId } = req.body;

        // Validation des données
        if (!title || !body || !userId || isNaN(userId)) {
            return res.status(400).json({
                message: "Les champs 'title', 'body', et 'userId' sont requis et doivent être valides."
            });
        }

        try {
            const response = await axios.post(DUMMY_JSON_URL, { title, body, userId });
            res.status(201).json(response.data);
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ message: "Erreur lors de la création de l'article." });
        }
    }
};

module.exports = newsController;