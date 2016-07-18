// Lista de produtos
function ProdutoController($scope) { 
	"use strict";

  var produtos = [];

  var produto1 = {
    id : 1, 
    codigo: "31002", 
    nome : "Areia Higiênica Biodegradável Hello Kitty Roxa - Kit de 5 unidades com 10kg", 
    imagem: "https://cdn.awsli.com.br/64x64/175/175058/produto/10220431/c489de350f.jpg", 
    estoque: "Disponível",
    preco : 99.50, 
    quantidade : 1
  };

  var produto2 = {
    id : 2, 
    codigo: "30002", 
    nome : "Areia Higiênica Biodegradável Hello Kitty Rosa - Kit de 5 unidades com 10kg", 
    imagem: "https://cdn.awsli.com.br/64x64/175/175058/produto/10220345/489d31065a.jpg", 
    estoque: "Disponível",
    preco : 99.50, 
    quantidade : 1
  };

  var produto3 = {
    id : 3, 
    codigo: "30005", 
    nome : "Areia Higiênica Hello Kitty Azul - Kit de 5 unidades com 10kg", 
    imagem: "https://cdn.awsli.com.br/64x64/175/175058/produto/10220567/85d2359c5a.jpg", 
    estoque: "Disponível",
    preco : 49.50, 
    quantidade : 1
  };

  produtos.push(produto1);
  produtos.push(produto2);
  produtos.push(produto3);

	$scope.produtos = produtos;

}
