module.exports = (sequelize, Sequelize) => {
    const Screenhunt = sequelize.define("screenhunt", {
      MovieID: {
        type: Sequelize.STRING
      },
      MovieName: {
        type: Sequelize.STRING
      },
      Detail: {
        type:Sequelize.STRING
      },
      Genre: {
        type: Sequelize.STRING
      },
      ReleaseDate: {
        type: Sequelize.STRING
      },
      Poster:{
        type:Sequelize.STRING
      },
      Cast:{
        type:Sequelize.STRING
      },
      Rating:{
        type:Sequelize.STRING
      },
      Netflix:{
        type:Sequelize.STRING
      },
      Disney:{
        type:Sequelize.STRING
      },
      HBO:{
        type:Sequelize.STRING
      },
      Prime:{
        type:Sequelize.STRING
      },
      IsTrending:{
        type:Sequelize.STRING
      },

    });
  
    return Screenhunt;
  };