import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [increase, setincrease] = useState(0);
  const [deduct, setdeduct] = useState(0);

  useEffect(() => {
    console.log("her zaman çalışır");
  });

  useEffect(() => {
    console.log("Component ilk render edildiğinde çalışır");
  }, []);

  useEffect(() => {
    console.log("Component ilk render edildiğinde ve FIRSTNAME değiştiğinde çalışır");
  }, [firstName]);

  useEffect(() => {
    console.log("Component ilk render edildiğinde ve FIRSTNAME değiştiğinde çalışır")
  }, [lastName]);

  useEffect(() => {
    console.log("Component ilk render edildiğinde ve increase veya deduct değerine çalıştığında çalışır.")
  }, [increase, deduct]);

  return (
    <div>
      <div><button onClick={() => setFirstName("Emirkan")}>Adı Değiştir</button></div>
      <div><button onClick={() => setLastName("Ülker")}>Soyismi Değiştir</button></div>
      <div><button onClick={() => setincrease(1000)}>1000 yap</button></div>
      <div><button onClick={() => setdeduct(-1000)}>-1000 yap</button></div>
    </div>
  )
}

export default App
