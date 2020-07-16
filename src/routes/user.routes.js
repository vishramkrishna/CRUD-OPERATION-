import express from 'express'
import passport from 'passport'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'
import multer from 'multer';
import path from 'path'
import config from '../config/config'
import userController from '../controllers/user.controller';
import authController from '../controllers/auth.controller';

// multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../server/img')
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g,""))
    }
  })

  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      const extension = path.extname(file.originalname);

      if (extension == '.png' || extension == '.jpg' || extension == '.jpeg') {
        return cb(null, true)
      }
      req.uploadError = { "message": "image only" };
      return cb(null, false)
    }
  })

const router = express.Router()
// var opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
// opts.secretOrKey = config.jwtSecret
// passport.use('directorylisting', new JWTStrategy(opts, (jwtPayload, done) => {
//     directorylisting.findById(jwtPayload._id, (err, directorylisting) => {
//     if (err) {
//       return done(err, false);
//     }
//     if (directorylisting) {
//       done(null, directorylisting);
//     } else {
//       done(null, false);
//     }
//   })
// }));

router.route('/api/userlisting')
.post(userController.create)


router.route('/api/userlisting')
.get(userController.list)

router.route('/api/userlisting/:userlistingId')
.put(userController.update)
.delete(userController.remove)



export default router
