// Placeholder for future node APIs (createPages, etc.)
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        fs: false
      }
    }
  });
};