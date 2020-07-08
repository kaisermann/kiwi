/* eslint-disable global-require */
exports.hasPackage = (pkg) => {
  try {
    return !!require(pkg);
  } catch (e) {
    return false;
  }
};
