
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
router.post('/contact', function(req, res, next) {
  console.log(req.body);
  // res.json(req.body);
  const contactInfo = req.body;

  if (!contactInfo.name || !contactInfo.email || !contactInfo.mobile) {
    res.send();
  } else {
    let c = 1;
    Contact.findOne({}, function(err, data) {
      if (data) {
        console.log('if');
        c = data.unique_id + 1;
      }

      const newContact = new Contact({
        unique_id: c,
        name: contactInfo.name,
        email: contactInfo.email,
        mobile: contactInfo.mobile,
      });

      newContact.save(function(err, Contact) {
        if (err) {
          console.log(err);
} else {
          console.log('Success');
}
      });
    }).sort({_id: -1}).limit(1);
  }
  res.json({Success: '1'});
});

/**
 * @Read the contact
 */
router.get('/contact', function(req, res, next) {
  Contact.find(function(err, response) {
    res.json(response);
  });
});

/**
 * @Update the contact
 */
router.put('/contact/:id', function(req, res) {
  const id = req.params.id;
  console.log('id' + id);
  const contactInfo = req.body;
  console.log(contactInfo);

  Contact.update({unique_id: id}, {
    name: contactInfo.name,
    email: contactInfo.email,
    mobile: contactInfo.mobile,
  }, function(err, rawResponse) {
    console.log(rawResponse);
  });
});

/**
 * @Delete the contact
 */
router.delete('/contact/:id', function(req, res) {
  const id = req.params.id;
  console.log('id' + id);

  Contact.findOneAndRemove({'unique_id': id}, function(err, offer) {
    console.log('asa');
  });
  res.send('Success');
});

module.exports = router;
