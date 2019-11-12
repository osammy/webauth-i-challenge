const express = require('express');

const Users = require('./users.helpers');
const auth = require("../../authController");

const router = express.Router();

router.route("/")
.post(Users.create)
.get(Users.find)

router.route("/login")
.post(auth.login)

router.route("/register")
.post(auth.register)



// router.get('/', (req, res) => {
//   Projects.find()
//   .then(projects => {
//     res.json(projects);
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get projects' });
//   });
// });

// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   Projects.findById(id)
//   .then(project => {
//     if (project) {
//       res.json(project);
//     } else {
//       res.status(404).json({ message: 'Could not find project with given id.' })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get projects' });
//   });
// });

// router.get('/:id/steps', (req, res) => {
//   const { id } = req.params;

//   Projects.findSteps(id)
//   .then(steps => {
//     if (steps.length) {
//       res.json(steps);
//     } else {
//       res.status(404).json({ message: 'Could not find steps for given project' })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get steps' });
//   });
// });

// router.post('/', (req, res) => {
//   const schemeData = req.body;

//   Projects.add(schemeData)
//   .then(project => {
//     res.status(201).json(project);
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to create new project' });
//   });
// });

// router.post('/:id/steps', (req, res) => {
//   const stepData = req.body;
//   const { id } = req.params; 

//   Projects.findById(id)
//   .then(project => {
//     if (project) {
//       Projects.addStep(stepData, id)
//       .then(step => {
//         res.status(201).json(step);
//       })
//     } else {
//       res.status(404).json({ message: 'Could not find project with given id.' })
//     }
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to create new step '+err.message });
//   });
// });

// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;

//   Projects.findById(id)
//   .then(project => {
//     if (project) {
//       Projects.update(changes, id)
//       .then(updatedScheme => {
//         res.json(updatedScheme);
//       });
//     } else {
//       res.status(404).json({ message: 'Could not find project with given id' });
//     }
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to update project' });
//   });
// });

// router.delete('/:id', (req, res) => {
//   const { id } = req.params;

//   Projects.remove(id)
//   .then(deleted => {
//     if (deleted) {
//       res.json({ removed: deleted });
//     } else {
//       res.status(404).json({ message: 'Could not find project with given id' });
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to delete project' });
//   });
// });

module.exports = router;