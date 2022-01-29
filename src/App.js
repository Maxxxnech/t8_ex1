import React, {useState} from 'react';
import './App.css';
import CitiesList from './components/CitiesList';
import City from './components/City';

const citiesList = [
  { name: "Москва", description: "Столица России" },
  {
    name: "Санкт-Петербург",
    description: "Второй по численности город России",
  },
];

function App() {
  // Массив городов с описанием
  const [cities, setCities] = useState(citiesList);
  // Индекс выбранного города в массиве городов
  const [currentIndex, setCutrrentIndex] = useState(0);
  
  // Обработка ввода в текстовое поле (меняет описание элемента массива)
  function onChange(value) {
    const newCities = cities.map((city, i) =>
      i === currentIndex ? { ...city, description: value } : city
    );
    setCities(newCities);
  }

  // Обработка клика на элементе (переключает индекс)
  function handleClick(index){
    setCutrrentIndex(index);
  }

  return (
    <div className="App">
       <header>
         <h1>t8, задание 1: подъем состояния</h1>
       </header>
       <City onChange={onChange} city={cities[currentIndex]} />
       <CitiesList cities={cities} handleClick={handleClick}/>
    </div>
  );
}

export default App;
