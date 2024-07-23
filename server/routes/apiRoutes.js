const express = require('express');
const router = express.Router();

// Import controllers
const globalExportsController = require('../controllers/globalExportsController');
const scfiController = require('../controllers/scfiController');
const portComparisonController = require('../controllers/portComparisonController');
const portDataController = require('../controllers/portDataController');

// Define routes
router.get('/global-exports', globalExportsController.getGlobalExports);
router.get('/scfi', scfiController.getScfi);
router.get('/port-comparison', portComparisonController.getPortComparison);
router.get('/port-data', portDataController.getPortData);

module.exports = router;
