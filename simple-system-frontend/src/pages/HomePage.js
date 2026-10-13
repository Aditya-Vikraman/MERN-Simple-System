import {useState, useEffect} from 'react';

import {Header} from '../components/Header.js';
import mail_icon from '../images/icons/mail-icon.png';
import mail_image from '../images/mail.png';

import '../styles/general.css';
import '../styles/homePage.css';

import {formatCurrency} from '../utils/money.js';

function HomePage () {
  const [overlay, setOverlay] = useState(() => "");
  const [search, setSearch] = useState (() => "");

  const [data, setData] = useState(() => []);
  const [loading, setLoading] = useState(() => true);
  const [error, setError] = useState(() => null);

  useEffect(() => {
    let ignore = false;

    async function startFetching () {
      try {
        setLoading(true)
        const response = await fetch('/api/v1/laptops');
  
        if (!response.ok) {
          const backendError = await response.text()
          throw new Error (`
          HTTP error! Status Code: ${response.status}
          Response: ${backendError}
          `)
        }
  
        const data = await response.json()
  
        if (!ignore) {
          setData(data.laptops)
          setError(null)
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message)
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    startFetching();

    return () => {
      ignore = true;
    }

  },[])
  
  // const laptopsData = [{
  //   _id: '1',
  //   name: 'Lenovo LOQ 15 IRX10',
  //   cpu: 'Intel Core i5-13450HX (10 Core, 4.6GHz Turbo)',
  //   ram: 'DDR5-16GB (4800MHz)',
  //   gpu: 'nvidia RTX 5060 (GDDR7-8GB)',
  //   storage: '512GB SSD (M.2, PCIe 4.0)',
  //   display: 'IPS, 15.6", FHD, 144Hz (Anti-Glare, 300 nit)',
  //   price: 113000,
  //   image: 'images/products/laptop/Lenovo-LOQ-15-IRX10.jpg',
  // },
  // {
  //   _id: '2',
  //   name: 'Asus Gaming V16 (V3607VM-RP057WS)',
  //   cpu: 'Intel Core 7 240H (10 Core, 5.2GHz Turbo)',
  //   ram: 'DDR5-16GB',
  //   gpu: 'nvidia RTX 5060 (GDDR7-8GB)',
  //   storage: '512GB SSD (M.2, PCIe 4.0 NVMe)',
  //   display: 'IPS, 16", FHD+, 144Hz (Anti-Glare, 300 nit)',
  //   price: 110000,
  //   image: 'images/products/laptop/Asus-V16-5060.jpg',
  // }]

  let laptopElements = [];

  if (data.length > 0) {
    let filteredLaptops = data;
  
    if (search !== "") {
      const regexp = /\s|,\s/g;
      const searchExp = search.replace(regexp, ",")
      const searchArray = searchExp.split(",");
    
      const newArray = filteredLaptops.filter(checkLaptops);
    
      function checkLaptops (laptop) {
        return searchArray.some((searchItem) => {
          return Object.keys(laptop).some(key => {
            return String(laptop[key]).toLowerCase().includes(`${searchItem.toLowerCase()}`)
          })
        });
      }
      
      filteredLaptops = newArray;
    }

    laptopElements = filteredLaptops.map((laptop) => {
      return (
        <Laptop 
          key = {laptop._id}
          name = {laptop.name}
          cpu = {laptop.cpu}
          ram = {laptop.ram}
          gpu = {laptop.gpu}
          storage = {laptop.storage}
          display = {laptop.display}
          price = {laptop.price}
          image = {laptop.image}
        />
      )
    })
  }

  function Laptop (props) {
    return (
      <div className="product-container">
        <div className="product-grid">
          <div className="product-image-container">
            <img className="product-image" 
              src={`/${props.image}`}
              alt="Laptop product"
              onClick={() => {setOverlay(`/${props.image}`)}}
            />
          </div>
          <div className="info-grid">
            <div className="laptop-name">
              {props.name}
            </div>
            <div>
              <p className="section">
                CPU
              </p>
              <p className="cpu">
                {props.cpu}
              </p>
            </div>
            <div>
              <p className="section">
                RAM
              </p>
              <p className="ram">
                {props.ram}
              </p>
            </div>
            <div>
              <p className="section">
                GPU
              </p>
              <p className="gpu">
                {props.gpu}
              </p>
            </div>
            <div>
              <p className="section">
                Storage
              </p>
              <p className="storage">
                {props.storage}
              </p>
            </div>
            <div>
              <p className="section">
                Display
              </p>
              <p className="display">
                {props.display}
              </p>
            </div>
            <p className="price">
              Price: &#x20B9; {formatCurrency(props.price)}
            </p>
          </div>
        </div>
      </div>
    )
  }

  function OverlayElement () {
    return (
      <div className="overlay">
        <img src={overlay} alt="laptop Enlarged"/>
        <p className="close-button"
          onClick={() => setOverlay("")}
        >
          X
        </p>
    </div>
    )
  } 
 
  return (
    <>
      <Header location={"homePage"} 
        handleSearch={(value) => setSearch(value)} 
      />

      <main className="homepage">
        <div className="products-grid">
          {loading && <p>Loading...</p>}
          {error && <p>Error occured while fetching data. Try again later.
            <br/>Error message: {error}</p>}
          {data && laptopElements}
        </div>

        <div className="image-box">
          {overlay !== "" && <OverlayElement/>}
        </div>
      </main>

      <div className="mail-pop">
        <div className="mail-icon-image-container">
          <img className="mail-icon-image" 
            src={mail_icon} 
            alt="mail icon"
          /> 
          <div className="mail-image-container">
            <img className="mail-image" 
              src={mail_image} 
              alt="mail"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;