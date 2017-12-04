module.exports = {
    dependence: {
        npm: {
            "eslint": "3.19.0",
            "babel-eslint": "7.2.1",
            "eslint-config-airbnb": "14.1.0",
            "eslint-plugin-import": "2.2.0",
            "eslint-plugin-lean-imports": "0.3.3",
            "eslint-plugin-react": "6.10.3",
            "stylelint": "7.12.0",
            "stylelint-config-standard": "16.0.0",
            "stylelint-processor-html": "1.0.0"
        }
    },
    plan: {
        default: ['.eslintrc_es6.json', '.stylelintrc.json']
    },
    initHooks: 'update_git_hooks.sh'
}