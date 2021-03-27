
/* eslint-disable indent */

/* eslint-disable no-unused-vars */

const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const contactControllers = require('../controllers/contactController.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

/**
 * @Create the contact
 */
router.post('/api/contact', function(req, res, next) {
  console.log(req.body);
  //res.json(req.body);
  const contactInfo = req.body;

  if (!contactInfo.name || !contactInfo.email || !contactInfo.mobile) {
    res.send();
  } else {
    let c = 1;
    Contact.findOne({}, function(err, data) {
      if (data) {
        console.log('if');
        c = data.unique_id + 1
      }

      const newContact = new Contact({
        unique_id: c,
        name: contactInfo.name,
        email: contactInfo.email,
        mobile: contactInfo.mobile,
      });

      newContact.save(function(err2, cnt) {
        if (err2) {
          console.log(err2);
          res.json({Status: '500', "message": "Internal Server Error: Failed to add a contact"})
        }
          console.log('Success');
          res.json({Status: '200', "message": "Success: Contact created successfully"});
        
      });
  });
  }

});
/**
 * @GET Lists all the contact
 */
router.get('/api/contact', function(req, res, next) {
  Contact.find(function(err, response) {
    if(err) return res.status(500).send(err.message);
    res.json(response);
  });
});

/**
 * @Update the one single contact using id as a key
 */
router.put('/api/contact/:id', function(req, res) {
  const id = req.params.id;
  
  const contactInfo = req.body;
  console.log("contact info", contactInfo);
  
  Contact.findOneAndUpdate({'unique_id': req.params.id},{
    name : contactInfo.name || name,
    email : contactInfo.email || email,
    mobile : contactInfo.mobile || contact
  }, {upsert: true}, 
   function(err, result) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json({"message" : "Updated contact successfully", "Contact" : contactInfo});
   });
  });

/**
 * @Delete the contact for the provided id
 */
router.delete('/api/contact/:id', function(req, res) {
  const id = req.params.id;
  console.log('id' + id);

  Contact.findOneAndRemove({'unique_id': id}, function(err, offer) {
    if(err) 
      return res.status(500).send(err.message);
    res.status(200).json({"message" : "Delete contact successfully", id});
  });
  
});

module.exports = router;
