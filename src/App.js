import Todo from "./components/Todo";
import Add from "./components/Add";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  //fetch from local storage
  function fetchOrCreateArrayFromLocalStorage(key) {
    try {
      const arrayAsString = localStorage.getItem(key);
      if (arrayAsString === null) {
        console.log(`No array found in local storage with key "${key}", creating the key.`);
        const emptyArray = [];
        localStorage.setItem(key, JSON.stringify(emptyArray));
        return emptyArray;
      }
      const parsedArray = JSON.parse(arrayAsString);
      if (Array.isArray(parsedArray)) {
        console.log(`Array fetched from local storage with key "${key}"`);
        return parsedArray;
      } else {
        console.log(`Invalid array found in local storage with key "${key}"`);
        return [];
      }
    } catch (error) {
      console.error('Error fetching array from local storage:', error);
      return [];
    }
  }
  
  
  // Add NOte
  const [Data, setData] = useState([
  ]);
  useEffect(()=>{
    setData(fetchOrCreateArrayFromLocalStorage('dataArray'));
  },[])
  
  
  const addNewData = (title, label, desc) => {
    const obj = {
      key: Data.length + 1,
      label: label,
      title: title,
      desc: desc,
    };
    setData((prevData) => [obj,...prevData]);
    saveArrayToLocalStorage("dataArray",[obj,...Data]);
    
  };
  const deleteObjectById = (idToDelete) => {
    const updatedData = Data.filter((item) => item.key !== idToDelete);
    setData(updatedData);
    saveArrayToLocalStorage("dataArray",updatedData);
  };
  // local storage
  function saveArrayToLocalStorage(key, array) {
    try {
      const arrayAsString = JSON.stringify(array);
      localStorage.setItem(key, arrayAsString);
      console.log(`Array saved to local storage with key "${key}"`);
    } catch (error) {
      console.error('Error saving array to local storage:', error);
    }
  }
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<Todo deleteData={deleteObjectById} Data={Data}/>} />
          <Route path="/add" element={<Add addData={addNewData} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
