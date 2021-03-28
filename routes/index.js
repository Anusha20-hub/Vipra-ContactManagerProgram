/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const contactControllers = require('../controllers/contactController.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});


router.get('/', function(req, res, next) {
  return Contact.find(function(err, clients) {
    if (!err) {
      res.render('detail.ejs', {
        title: 'Details',
        clients: clients,

      });

      //  console.log(clients);
    } else {
      return console.log(err);
    }
  });
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
 * @GET list of all the contact
 */

router.get('/contact', function(req, res, next) {
  Contact.find(function(err, response) {
    res.json(response);
  });
});

/**
 * @UPDATE the one single contact using id as a key
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
 * @DELETE the contact for the provided id
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
