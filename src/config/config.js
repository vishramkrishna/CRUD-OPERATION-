require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  imageLocation: process.env.IMAGE_LOCATION || 'http://localhost:3001/img/',
  jwtSecret: process.env.JWT_SECRET || "changeme",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://admin:admin@' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/curd'
}

export default config
