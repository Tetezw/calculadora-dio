import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row } from "./styles";

const App = () => {
  const [numeroAtual, setNumeroAtual] = useState("0");
  const [primeiroNumero, setPrimeiroNumero] = useState("0");
  const [operacao, setOperacao] = useState("");

  const lidandoAdicionarNumero = (numero) => {
    setNumeroAtual(
      (anterior) => `${anterior === "0" ? "" : anterior}${numero}`
    );
  };

  const limparNumeros = () => {
    setNumeroAtual("0");
    setPrimeiroNumero("0");
    setOperacao("");
  };

  const lidandoSomaNumeros = () => {
    if (primeiroNumero === "0") {
      setPrimeiroNumero(String(numeroAtual));
      setNumeroAtual("0");
      setOperacao("+");
    } else {
      const soma = Number(primeiroNumero) + Number(numeroAtual);
      setNumeroAtual(String(soma));
      setOperacao("");
    }
  };

  const lidandoIgual = () => {
    if (primeiroNumero !== "0" && operacao !== "" && numeroAtual !== "0") {
      switch (operacao) {
        case "+":
          lidandoSomaNumeros();
          break;
        case "-":
          lidandoSubtracaoNumeros();
          break;
        case "/":
          lidandoDivisaoNumeros();
          break;
        case "x":
          lidandoMultiplicacaoNumeros();
          break;
        default:
          break;
      }
    }
  };

  const lidandoSubtracaoNumeros = () => {
    if (primeiroNumero === "0") {
      setPrimeiroNumero(String(numeroAtual));
      setNumeroAtual("0");
      setOperacao("-");
    } else {
      const subtracao = Number(primeiroNumero) - Number(numeroAtual);
      setNumeroAtual(String(subtracao));
      setOperacao("");
    }
  };

  const lidandoDivisaoNumeros = () => {
    if (primeiroNumero === "0") {
      setPrimeiroNumero(String(numeroAtual));
      setNumeroAtual("0");
      setOperacao("/");
    } else {
      const subtracao = Number(primeiroNumero) / Number(numeroAtual);
      setNumeroAtual(String(subtracao));
      setOperacao("");
    }
  };

  const lidandoMultiplicacaoNumeros = () => {
    if (primeiroNumero === "0") {
      setPrimeiroNumero(String(numeroAtual));
      setNumeroAtual("0");
      setOperacao("x");
    } else {
      const subtracao = Number(primeiroNumero) * Number(numeroAtual);
      setNumeroAtual(String(subtracao));
      setOperacao("");
    }
  };

  return (
    <Container>
      <Content>
        <Input value={numeroAtual} />
        <Row>
          <Button label="x" onClick={lidandoMultiplicacaoNumeros} />
          <Button label="/" onClick={lidandoDivisaoNumeros} />
          <Button label="c" onClick={limparNumeros} />
          <Button label="on" />
        </Row>
        <Row>
          <Button label="7" onClick={() => lidandoAdicionarNumero("7")} />
          <Button label="8" onClick={() => lidandoAdicionarNumero("8")} />
          <Button label="9" onClick={() => lidandoAdicionarNumero("9")} />
          <Button label="-" onClick={lidandoSubtracaoNumeros} />
        </Row>
        <Row>
          <Button label="4" onClick={() => lidandoAdicionarNumero("4")} />
          <Button label="5" onClick={() => lidandoAdicionarNumero("5")} />
          <Button label="6" onClick={() => lidandoAdicionarNumero("6")} />
          <Button label="+" onClick={lidandoSomaNumeros} />
        </Row>
        <Row>
          <Button label="1" onClick={() => lidandoAdicionarNumero("1")} />
          <Button label="2" onClick={() => lidandoAdicionarNumero("2")} />
          <Button label="3" onClick={() => lidandoAdicionarNumero("3")} />
          <Button label="=" onClick={lidandoIgual} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
