import './App.css';
import TodoList from './components/Main';

function App() {
  return (
    <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100 ">
        <div class="col">
          <div class="card"  style={{'border-radius':'.75rem', 'background-color': "#eff1f2"}}>
    <TodoList/>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}

export default App;
