const axios = require('axios');

const getPortData = async (req, res) => {
    try {
        const url = "https://www.econdb.com/maritime/search/ports/?ab=-62.933895117588925%2C-138.84538637063213%2C75.17530232751466%2C150.31476987936844&center=17.35344883620718%2C5.734691754366622";
        const headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        };
        const response = await axios.get(url, { headers });
        if (response.status === 200) {
            res.json(response.data.response.docs);
        } else {
            res.status(404).json({ error: 'Data not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getPortData };
