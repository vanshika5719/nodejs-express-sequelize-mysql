const db = require("../models");
const Screenhunt = db.screenhunts;
const Op = db.Sequelize.Op;

// Create and Save a new Screenhunt
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body.title) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//     return;
//   }

//   // Create a Screenhunt
//   // const screenhunt = {
//   //   title: req.body.title,
//   //   description: req.body.description,
//   //   published: req.body.published ? req.body.published : false
//   // };

//   // Save Screenhunt in the database
//   Screenhunt.create(screenhunt)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Screenhunt."
//       });
//     });
// };

// // Retrieve all Tutorials from the database.
 exports.findAll = (req, res) => {
 const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Screenhunt.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving screenhunt."
      });
    });
};

// Find a single Screenhunt with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Screenhunt.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Screenhunt with id=" + id
      });
    });
};

// // Update a Screenhunt by the id in the request
// exports.update = (req, res) => {
//   const id = req.params.id;

//   Screenhunt.update(req.body, {
//     where: { MovieId: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Screenhunt was updated successfully."
//         });
//       } else {
//         res.send({
//           message: `Cannot update Screenhunt with id=${id}. Maybe Screenhunt was not found or req.body is empty!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Screenhunt with id=" + id
//       });
//     });
// };

// Delete a Screenhunt with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Screenhunt.destroy({
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Screenhunt was deleted successfully!"
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Screenhunt with id=${id}. Maybe Screenhunt was not found!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Screenhunt with id=" + id
//       });
//     });
// };

// Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   Screenhunt.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} Tutorials were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all screenhunt."
//       });
//     });
// };

// find all published Screenhunt
// exports.findAllPublished = (req, res) => {
//   Screenhunt.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving screenhunt."
//       });
//     });
// };