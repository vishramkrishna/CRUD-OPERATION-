import config from './config/config'
import app from './express'
import mongoose from 'mongoose'

// Connection URL
mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true);
mongoose
  .connect(config.mongoUri, { useNewUrlParser: true })
  .catch(e => {
      console.error(`unable to connect to database: ${mongoUri}: ${e.message}`)
  })

app.listen(config.port, (err) => {
  if (err) {
    console.error(err)
  }
  console.info('Server started on port %s.', config.port)
})
