module.exports = {
  url: 'http: //localhost',
  port: process.env.PORT || 3030,
  originUrl: 'http://localhost:3030',
  mongoUrl: 'mongodb://mongodb-replicaset-0.mongodb-replicaset.default.svc.cluster.local:27017/db',
  ISDEV: process.env.NODE_ENV !== 'production',
  emailer: {
    from: "Chat App <no-reply@chatapp.com>",
    transport: {
      service: 'gmail',
      auth: {
        user: 'roniecosmi@gmail.com',
        pass: 'cosmi2017'
      }
    }
  }
}