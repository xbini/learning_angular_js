const service = function ($http) {
  this.loadRepos = () => $http.get("/api/repos");
  this.getRepoById =(id) => $http.get("/api/repos/"+id);
  // this.addRepo
  this.deleteRepo = (repo) => $http.delete("/api/repos",repo);

}

const repoService = [ "$http", service ]

export { repoService }
