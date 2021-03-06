import React, { useState } from "react";
import FormInput from './components/Form/FormInput';
import Data from "./components/Data/Data"


function App() {
  
  const [alunos, setAlunos] = useState("");

  const adicionarAluno = (alunos) => {
    setAlunos((prevAlunos) => {
      return [alunos, ...prevAlunos]
    });
  }
  
  console.log(alunos);
  
  return (
    <React.Fragment>
      <FormInput saveNovoAluno={adicionarAluno}/>
      <Data alunos={alunos}/>
    </React.Fragment>
  );
}

export default App;
