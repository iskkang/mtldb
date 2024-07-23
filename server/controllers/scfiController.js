const axios = require('axios');

const getScfi = async (req, res) => {
    try {
        const url = "https://www.econdb.com/widgets/shanghai-containerized-index/data/";
        const response = await axios.get(url);
        if (response.status === 200 && response.data.plots && response.data.plots.length > 0) {
            res.json(response.data.plots[0].data);
        } else {
            res.status(404).json({ error: 'Data not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getScfi };
