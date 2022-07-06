const service = function ($http) {
  this.loadRepos = () => $http.get("/api/repos")
}

const repoService = [ "$http", service ]

export { repoService }
