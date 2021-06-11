const REPO_URL = 'https://github.com/kaisermann/kiwi'

function getDocUrl(ruleName) {
  return `${REPO_URL}/blob/main/packages/eslint-plugin/docs/rules/${ruleName}.md`
}

module.exports = {
  getDocUrl,
}
