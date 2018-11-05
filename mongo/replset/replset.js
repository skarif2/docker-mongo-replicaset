rsconf = {
  _id : 'mongo-rs',
  members: [
    { _id : 0, host : 'mongo-rs-01:27017' },
    { _id : 1, host : 'mongo-rs-02:27017' },
    { _id : 2, host : 'mongo-rs-03:27017' }
  ]
}

rs.initiate(rsconf);

rs.conf();