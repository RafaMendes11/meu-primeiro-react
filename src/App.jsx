import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  ToDoList,
  Input,
  Button,
  ListItem,
  Trash,
  Check,
} from "./styles.js";

// Retorna JavaScript
function App() {
  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const changeButton = (e) => {
    setInputTask(e.target.value);
  };

  const clickButton = (e) => {
    if (inputTask) {
      setList([...list, { id: uuidv4(), task: inputTask, finished: false }]);
    }
  };

  const finishTask = (id) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );

    setList(newList);
  };

  const deleteTask = (id) => {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  };

  // Retorna código HTML
  return (
    <Container>
      <ToDoList>
        <Input
          onChange={changeButton}
          placeholder="O que tenho para fazer..."
        />
        <Button onClick={clickButton}>Adicionar</Button>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem key={item.id} isFinished={item.finished}>
                <Check onClick={() => finishTask(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deleteTask(item.id)} />
              </ListItem>
            ))
          ) : (
            <h4>Não há itens na lista</h4>
          )}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
