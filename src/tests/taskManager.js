import { describe, it, expect, beforeEach } from "vitest";

// Cada uma dessas é uma unidade testável:
validateTitle(title);
createTask(title);
addTask(tasks, title);
toggleTask(task);
removeTask(tasks, taskId);
filterTasks(tasks, status);
countTasks(tasks);
countCompleted(tasks);
countPending(tasks);

// ✅ PURA — mesma entrada, mesma saída, sem efeitos colaterais
function toggleTask(task) {
  return { ...task, completed: !task.completed };
}

// ❌ IMPURA — modifica o objeto original (efeito colateral)
function toggleTask(task) {
  task.completed = !task.completed; // MUTAÇÃO!
  return task;
}

const task = { id: 1, title: "Estudar", completed: false };

// Cria um NOVO objeto com todas as propriedades de task,
// mas com completed invertido:
const toggled = { ...task, completed: !task.completed };

// toggled = { id: 1, title: 'Estudar', completed: true }  ← NOVO objeto
// task    = { id: 1, title: 'Estudar', completed: false }  ← original intacto

const tasks = [tarefa1, tarefa2];
const newTask = { id: 3, title: "Nova", completed: false };

// Cria um NOVO array com todos os elementos de tasks + newTask:
const updated = [...tasks, newTask];

// updated = [tarefa1, tarefa2, newTask]  ← NOVO array
// tasks   = [tarefa1, tarefa2]           ← original intacto

// ❌ push MODIFICA o array original:
tasks.push(newTask);
// tasks = [tarefa1, tarefa2, newTask]  ← original MODIFICADO! 💥

// ❌ atribuição direta MODIFICA o objeto original:
task.completed = true;
// task = { id: 1, title: 'Estudar', completed: true }  ← original MODIFICADO! 💥

// ❌ COM efeito colateral — modifica o objeto original
function toggleTask(task) {
  task.completed = !task.completed; // modifica o objeto que foi passado!
  return task; // retorna o MESMO objeto
}

const task = { id: 1, title: "Estudar", completed: false };
const result = toggleTask(task);
// task.completed   === true   ← o original FOI modificado! 😱
// result === task             ← são o MESMO objeto na memória

// ✅ SEM efeito colateral — cria um objeto novo
function toggleTask(task) {
  return { ...task, completed: !task.completed }; // retorna um NOVO objeto
}

const task = { id: 1, title: "Estudar", completed: false };
const result = toggleTask(task);
// task.completed   === false  ← o original está intacto ✅
// result.completed === true   ← o novo objeto tem o valor atualizado
// result !== task             ← são objetos DIFERENTES na memória

// Função tradicional
tasks.filter(function (task) {
  return task.completed === true;
});

// Arrow function (faz a mesma coisa, mais curto)
tasks.filter((task) => task.completed === true);

it("deve marcar uma tarefa pendente como concluída", () => {
  // ARRANGE — preparar os dados
  const task = createTask("Estudar");

  // ACT — executar a ação
  const result = toggleTask(task);

  // ASSERT — verificar o resultado
  expect(result.completed).toBe(true);
});

describe("validateTitle", () => {
  it("deve retornar true para título válido", () => {
    /* ... */
  });
  it("deve retornar false para string vazia", () => {
    /* ... */
  });
  it("deve retornar false para null", () => {
    /* ... */
  });
});
