/* eslint-disable global-require */
exports.hasPackage = (pkg) => {
  try {
    // eslint-disable-next-line node/global-require
    return !!require(pkg);
  } catch (e) {
    return false;
  }
};
