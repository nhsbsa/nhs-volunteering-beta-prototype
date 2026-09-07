module.exports = (config) => (req, res, next) => {
  res.locals.serviceName = config.serviceName;
  res.locals.currentUrl = req.path;

  // Release folder the current page lives in, eg 'r22' or 'v26'.
  // Use it for links within the same release so they follow the folder
  // when it is copied forward: href="/{{ release }}/some-page"
  // Empty for pages outside a release folder, which should use plain paths.
  res.locals.release = (req.path.match(/^\/([rv]\d+)\//) || [])[1] || '';

  next();
};
