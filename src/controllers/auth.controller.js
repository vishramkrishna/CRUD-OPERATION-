// import Brand from '../models/brand.model'
// import Influencer from '../models/influencer.model'
// import jwt from 'jsonwebtoken'
// import expressJwt from 'express-jwt'
// import config from '../config/config'

// const signin = (req, res) => {
//   Brand.findOne({
//     "email": req.body.email
//   }, (err, brand) => {

//     if (err || !brand)
//       return res.status('401').json({
//         error: "Email and password don't match."
//       })

//     if (!brand.authenticate(req.body.password)) {
//       return res.status('401').send({
//         error: "Email and password don't match."
//       })
//     }

//     const token = jwt.sign({_id: brand._id}, config.jwtSecret, { expiresIn: 3600 }) // 60 minutes

//     return res.json({
//       token,
//       brand: {name: brand.businessName, email: brand.email}
//     })
//   })
// }

// const signinInfluencer = (req, res) => {
//   Influencer.findOne({
//     "email": req.body.email
//   }, (err, influencer) => {

//     if (err || !influencer)
//       return res.status('401').json({
//         error: "influencer not found"
//       })

//     if (!influencer.authenticate(req.body.password)) {
//       return res.status('401').send({
//         error: "Email and password don't match."
//       })
//     }

//     const token = jwt.sign({_id: influencer._id}, config.jwtSecret, { expiresIn: 3600 }) // 60 minutes

//     return res.json({
//       token,
//       influencer: {id: influencer._id, name: influencer.instagramAccount, email: influencer.email}
//     })
//   })
// }

// const requireSignin = expressJwt({
//   secret: config.jwtSecret
// })

// const hasAuthorization = (req, res, next) => {
//   const authorized = req.profile && req.user && req.profile._id == req.user._id
//   if (!(authorized)) {
//     return res.status('403').json({
//       error: "User is not authorized"
//     })
//   }
//   next()
// }

// export default {
//   signin,
//   requireSignin,
//   signinInfluencer,
//   hasAuthorization,
// }
