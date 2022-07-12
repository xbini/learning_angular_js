const service = function ($http) {
  this.loadRepos = () => $http.get("/api/repos")
//  fixme: 可以尝试把repo相关的http request放到这里，在controller里只需要加入repoService依赖就可以进行调用，进一步简化controller逻辑
//  fixme: 另外，可以尝试在controller里加上loading效果，优化交互
}

const repoService = [ "$http", service ]

export { repoService }
