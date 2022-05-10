const { user } = require('../../models')

exports.addUser = async (req, res) => {
    try {
    let dataAll = req.body
    let data = await user.create({
        ...dataAll,
    attributes: {
      exclude: ["createdAt", "updatedAt"]
    }
    })
    data = JSON.parse(JSON.stringify(data))
      res.send({
        status: "Success",
        dataUser : {
          ...data,
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