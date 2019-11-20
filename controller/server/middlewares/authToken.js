import redis from 'redis';

const { REDIS_PORT = 6379 } = process.env;
const client = redis.createClient(REDIS_PORT);
/**

  /**
   * @param {object} req
   * @param {object} res
   * @param {function} next
   * @returns {function} next
   */
  function authToken(req, res, next) {
    const {token} = req.headers;
    return client.get(token, (err, data) => {
      if(data == null){
        return res.status(400).json({
          message: 'Please provide a valid token',
        });
      }
      return next();
    })
  }


export default authToken;
