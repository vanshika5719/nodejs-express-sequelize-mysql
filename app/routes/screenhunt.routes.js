module.exports = app => {
    const screenhunts = require("../controllers/screenhunt.controller.js");
  
    var router = require("express").Router();
  
    // // Create a new Tutorial
    // router.post("/", screenhunts.create);
  
    // // Retrieve all Tutorials
    // router.get("/", screenhunts.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", screenhunts.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", screenhunts.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", screenhunts.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", screenhunts.delete);
  
    // // Delete all Tutorials
    // router.delete("/", screenhunts.deleteAll);
  
    app.use('/api/screenhunts', router);
  };