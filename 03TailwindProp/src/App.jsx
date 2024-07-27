import './App.css'
import Card from './components/Card'

function App() {
//<Card id={product.id} thumbnail={product.thumbnail} title={product.title} description={product.description} price={product.price} />
  const productList = fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => (data.products.map((product) => {
      console.log(product);
      return product
    }
  )))

  return ( 
    <>
      <h1 classame="bg-purple-800">TailWind Test</h1>
      <Card {productList.map(product-> product)}/>
      {
        
      }
    </>
  )
}

export default App
