const service = function ($http) {
  this.loadRepos = () => $http.get("/api/repos")
}

const homeService = [ "$http", service ]

export { homeService }
