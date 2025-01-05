const express = require('express');
const router = express.Router();
const packageController = require('./packageController');

router.get('/', packageController.getAllPackages);
router.post('/', packageController.createPackage);
router.get('/:id', packageController.getPackageById);
router.put('/:id', packageController.updatePackage);
router.delete('/:id', packageController.deletePackage);

module.exports = router;
