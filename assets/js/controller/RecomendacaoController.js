function RecomendacaoController($scope, $http) { 

	setInterval(function() {
		$http
			.jsonp("http://localhost:3000/assets/js/json/produtos.json")
			.success(function(retorno) { 
				$scope.produtos = retorno.produtos;
			});
		}, 5000);
}