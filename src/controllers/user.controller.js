import user from '../models/user.model'

const create = (req, res, next) => {
  const useristing = new user(req.body)
  useristing.save((err, result) => {
    if (err) {
      return res.status(400).send({
        message: "Failed"
      })
    }

    else{
      return res.status(200).json({
        success:"Business succesfully registered!"
      })

    }
  });
}

const list = (req, res) =>{
  user.find((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json({result})
  }).select('username password email firstname lastname isactive')

}

const remove = (req, res, next) => {
  var uid = req.params.userlistingId;
  user.remove({"_id": uid},(err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
  }
  res.json(
    result
  )
  })
}

const update = (req, res) => {
  var uid = req.params.userlistingId;
  user.findOne({"_id": uid},(err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
  }
  result.isactive = false;
  result.save((err, result) => {
    if (err) {
      res.send(err);
    }
  })
  res.json(
    result
  )
  })
}

export default {
  create,
  list,
  remove,
  update,
}
