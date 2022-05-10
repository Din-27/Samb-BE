const { user } = require('../../models')

exports.addUser = async (req, res) => {
    try {
    let data = await user.create({
        name:req.body.name,
        phone: req.body.phone,
        whatsapp: req.body.whatsapp,
        position: req.body.position,
    attributes: {
      exclude: ["createdAt", "updatedAt"]
    }
    })
    data = JSON.parse(JSON.stringify(data))
      res.send({
        status: "Success",
        dataUser : {
          data,
        }
      })
    } catch (e) {
      console.log(e);
      res.status(500).send({
        status: "failed",
        message: "thats wrong",
      });
    }
  };