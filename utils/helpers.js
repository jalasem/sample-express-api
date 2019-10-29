module.exports = {
  /**
   * serverResponse
   * @description Handles server response to client
   * @param {object} res - server response object
   * @param {object|array|string} - data to be sent to client
   * @param {string?} type - type of response (success or error)
   */
  serverResponse(res, data, status = 200, type = 'success') {
    const response = {
      status: type,
    };
    if (type === 'error') {
      response.error = data;
    } else if (typeof data === 'string') {
      response.message = data;
    } else {
      response.data = data;
    }
    res.status(status).json(response);
  },
};
