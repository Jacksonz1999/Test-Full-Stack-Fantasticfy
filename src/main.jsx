
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ProductPage from "./Pages/ProductPage/ProductPage.jsx"
import CollectionPage from "./Pages/CollectionPage/CollectionPage.jsx"
import NotFound from "./Pages/NotFound/NotFound.jsx"
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/" element={<CollectionPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)
