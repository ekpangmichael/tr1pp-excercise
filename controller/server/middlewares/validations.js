

  /**
   * @param {object} req
   * @param {object} res
   * @param {function} next
   * @returns {function} next
   */
  function validateFields(req, res, next) {
    const {message, task_id, contact_list} = req.body;
    const {token} = req.headers;
   
    if (!message || ! task_id || ! contact_list ) {
      return res.status(400).json({
        message: 'please provide your message content'
      });
    }
    if (!token || token.trim().length < 1) {
      return res.status(400).json({
        message: 'please provide a valid token'
      });
    }

    return next();
  }

export default validateFields;
