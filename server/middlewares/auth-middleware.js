const ApiError = require('../exceptions/api-error');
const tokenService = require('../services/token-service');

module.exports = async function(req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    // console.log('authorizationHeader >>>>', authorizationHeader);
    
    if(!authorizationHeader) {
      console.log('HERE-1 >>>>');
      return next(ApiError.UnautorizedError());
    }

    const accessToken = authorizationHeader.split(' ')[1];
    // console.log('accessToken >>>>', accessToken);
    if (!accessToken) {
      console.log('HERE-2 >>>>');
      return next(ApiError.UnautorizedError());
    }

    const userData = await tokenService.validateAccessToken(accessToken);
    console.log('userData >>>>', userData);
    if (!userData) {
      console.log('HERE-3 >>>>');
      return next(ApiError.UnautorizedError());
    }

    req.user = userData;
    next();
  } catch(err) {
    return next(ApiError.UnautorizedError());
  }
}