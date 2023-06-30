import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import FeaturesPage from './components/FeaturesPage';
import PricingPage from './components/PricingPage';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <div className='app'>
      <Router>
        {/* NavBar to be displayed on every page */}
        <NavBar />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </Router>
    </div>
  );
}


// const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');

//   const addTodo = () => {
//     if (newTodo.trim() !== '') {
//       setTodos(prevTodos => [...prevTodos, newTodo]);
//       setNewTodo('');
//     }
//   };

//   const removeTodo = (index) => {
//     setTodos(prevTodos => {
//       const updatedTodos = [...prevTodos];
//       updatedTodos.splice(index, 1);
//       return updatedTodos;
//     });
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>

//       <input
//         type="text"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//       />
//       <button onClick={addTodo}>Add Todo</button>

//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => removeTodo(index)}>x</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );