
const catalogo = [
  {
    id: 1,
    titulo: "The Matrix",
    tipo: "filme",
    ano: 1999,
    generos: ["ação", "ficção"],
    nota: 9.5,
    assistido: true
  },
  {
    id: 2,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["drama", "crime"],
    nota: 9.7,
    assistido: true
  },
  {
    id: 3,
    titulo: "Interestelar",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção"],
    nota: 8.9,
    assistido: false
  },
  {
    id: 4,
    titulo: "Stranger Things",
    tipo: "serie",
    ano: 2016,
    generos: ["ficção", "terror"],
    nota: 8.7,
    assistido: true
  },
  {
    id: 5,
    titulo: "Clube da Luta",
    tipo: "filme",
    ano: 1999,
    generos: ["drama"],
    nota: 8.8,
    assistido: false
  },
  {
    id: 6,
    titulo: "The Office",
    tipo: "serie",
    ano: 2005,
    generos: ["comédia"],
    nota: 8.9,
    assistido: true
  }
];

console.log("CATÁLOGO COMPLETO:", catalogo);


console.log("Primeiro título:", catalogo[0].titulo);

console.log("Ano do último item:", catalogo[catalogo.length - 1].
ano);

if (catalogo[2].generos.length > 1) {
  console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
  console.log("O terceiro item possui apenas 1 gênero.");
}



console.log("LISTAGEM:");
catalogo.forEach(item => {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});


const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("Títulos em caixa alta:", titulosEmCaixaAlta);


const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log("Quantidade não assistidos:", naoAssistidos.length);


const notaAlta = catalogo.find(item => item.nota >= 9);

if (notaAlta) {
  console.log(`Item com nota >= 9: ${notaAlta.titulo} (${notaAlta.nota})`);
} else {
  console.log("Nenhum item com nota >= 9 encontrado.");
}


const somaNotas = catalogo.reduce((acc, item) => acc + item.nota, 0);
const mediaGeral = somaNotas / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);
const somaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0);
const mediaAssistidos = somaAssistidos / assistidos.length;

console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média assistidos:", mediaAssistidos.toFixed(2));


const existeAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length > 0);

console.log("Existe item antes de 2000?", existeAntigo);
console.log("Todos têm pelo menos 1 gênero?", todosTemGenero);

const output = document.getElementById("output");


const filmes = catalogo.filter(item => item.tipo === "filme").length;
const series = catalogo.filter(item => item.tipo === "serie").length;


const ranking = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);

output.innerHTML = `
  <h2>Resumo do Catálogo</h2>
  <p><strong>Total de itens:</strong> ${catalogo.length}</p>
  <p><strong>Filmes:</strong> ${filmes}</p>
  <p><strong>Séries:</strong> ${series}</p>
  <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>
  <p><strong>Média geral:</strong> ${mediaGeral.toFixed(2)}</p>

  <h3>Top 3 melhores avaliados:</h3>
  <ul>
    ${ranking.map(item => `<li>${item.titulo} - ${item.nota}</li>`).join("")}
  </ul>
`;