const service = function ($http) {
  this.loadRepos = () => $http.get("/api/repos");
  this.getRepoById = (id) => $http.get(`/api/repos/${id}`);
  this.addRepo = () =>$http.post('/api/repos');
  this.deleteRepo = (id) => $http.delete(`/api/repos/${id}`);
}

const repoService = ["$http", service]

export {repoService}
