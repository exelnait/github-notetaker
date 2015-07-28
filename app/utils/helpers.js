var axios = require('axios');

function GithubAPI() {
    return {
        getRepos: function (username) {
            return axios.get('https://api.github.com/users/' + username + '/repos')
        },
        getUserInfo: function(username) {
            return axios.get('https://api.github.com/users/' + username)
        }
    }
}