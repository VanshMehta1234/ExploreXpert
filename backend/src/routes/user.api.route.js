const express = require('express');
const router = express.Router();
const { clerkAuth, addUserData } = require('../middleware/auth.middleware');

// Apply Clerk authentication to all routes
router.use(clerkAuth);
router.use(addUserData);

const getPlacelocation = require("../controllers/User-Api-Controller/getLocation");
const getImage=require('../controllers/User-Api-Controller/getImage');
const getlocationid=require("../controllers/User-Api-Controller/getLocationId.js");
const getphotosforimage=require("../controllers/User-Api-Controller/getphotosforplace.js");
const setHolidayPlace=require("../controllers/User-Api-Controller/setHolidayPlace2.js");
const verifyToken=require("../middleware/verifyUserToken.js");
const setItenoryData=require("../controllers/User-Api-Controller/setItenoryData.js");
const setFavPlaces=require("../controllers/User-Api-Controller/setFavPlaces.js");
const getSelectedItem=require("../controllers/User-Api-Controller/getSelectedItem.js");
const getSelectedFavPlaces=require("../controllers/User-Api-Controller/getSelectedFavPlaces.js");
const fetchUserProfile =require("../controllers/User-Api-Controller/fetchUserProfile.js");
const updateProfile =require("../controllers/User-Api-Controller/updateProfile.js");
router

    .route('/getlocation')
    .post(getPlacelocation);

router
    .route('/getImageforplace')
    .post(getImage); 

router
    .route('/storeData')
    .post(verifyToken, setHolidayPlace);

router
    .route('/storeFavPlaces')
    .post(verifyToken,setFavPlaces);

router
    .route('/storeAccordionData')
    .post(verifyToken,setItenoryData);


router
    .route('/getlocationid')
    .post(verifyToken)
    .get(getlocationid);      

router
    .route('/getPhotosForPlace')
    .get(getphotosforimage);      

router
    .route('/getSelectedItem')
    .get(async (req, res) => {
        try {
            const user = await User.findOne({ clerkId: req.userId });
            // ... rest of your logic
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

router
    .route('/getSelectedFavPlaces')
    .get(verifyToken,getSelectedFavPlaces);

router  
    .route('/profile')
    .get(verifyToken,fetchUserProfile);
           
router
    .route('/profile')
    .put(verifyToken,updateProfile);
       

module.exports = router;