{/* <div class="button">
  <button>Calcular média</button>
</div> */}

const button = document.querySelector("button");
const nFinal = document.querySelector(".nfinal");

function calcula() {
  const nota1 = parseInt(document.querySelector(".nota1").value);
  const nota2 = parseInt(document.querySelector(".nota2").value);
  const nota3 = parseInt(document.querySelector(".nota3").value);
  const nota4 = parseInt(document.querySelector(".nota4").value);

  notaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

  if (notaFinal >= 6) {
    resposta = "<p>Parabéns, você foi aprovado!</p>";
  }
  else {
    resposta = "<p>Você foi reprovado!</p>";
  }

  document.querySelector(".nfinal").insertAdjacentHTML("afterbegin", resposta);
  console.log("CLICOU!");
}

document.querySelector("button").addEventListener("click", calcula);