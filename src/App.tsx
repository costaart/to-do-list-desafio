// Import dos componentes criados

import { useState } from 'react'
import { CgAdd } from "react-icons/cg";
import { CiMedicalClipboard } from "react-icons/ci";
import { Header } from './components/Header'
import { Input } from './components/Input'

import styles from './App.module.css'
import { Main } from './components/Main';



function App() {
  const [count, setCount] = useState(0)


  return (
  <>
   <Header/>
   <Main>
   <div className={styles.searchSection}>
      <Input/> 
      <button>Criar <CgAdd /></button>
    </div>

    <section className={styles.toDoSection}>
      <div className={styles.toDoHeader}>
        <span>
          <h5>Tarefas criadas</h5> <span id={styles.qntdCreated}>5</span>
        </span>
        <span>
          Concluídas <span id={styles.qntdDone}>2 de 5</span>
        </span>
      </div>
      <hr/>
      <div className={styles.toDoBody}>
      <CiMedicalClipboard size={70} color={'var(--cinza-400)'}/>
      <p style={{
        fontWeight:'bold'}}>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>

      </div>
    </section>

  </Main>
  </>
  )
}

export default App
