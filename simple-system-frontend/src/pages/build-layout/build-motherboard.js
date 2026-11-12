import { formatCurrency } from '../../utils/money';
import { Fragment } from 'react';
import withDataFetching from '../../components/withDataFetching';

const EnchancedComponent = withDataFetching(
  MotherboardElements,
  '/api/v1/products/motherboards'
)

function MotherboardElements (props) {
  if (props.loading) return <div>Loading Product...</div>;
  if (props.error) return <div>Error: {props.error} </div>;
  if (!props.data) return <div>No products found</div>

  return (
    props.data.motherboards.map((product) => {
      const styles = () => {
        if (props.socket !== "") {
          return {display: product.socket.includes(props.socket) ? 'block' : 'none'}
        } else {
          return {display: "block"}
        }
      }
  
      return (
        <Fragment key={product._id}>
          <div className="motherboard-container" 
            style={styles()}
          >
            <p className={
                props.motherboardId === product._id? "selected-motherboard": "motherboard-button"
              }
              onClick={() => {props.handleClick(product._id,product.price,product.image)}}
            >
              {product.name} ({product.socket} Socket) ({product.size})
            </p>
            <p className="motherboard-info">
              {product.info} <br/> Price: &#x20B9; {formatCurrency(product.price)}
            </p> 
          </div>
        </Fragment>
      )
    })
  )
}

export default function MotherboardHTML (props) {
  // const motherboardData = [
  //   {
  //     id: 'm1',
  //     name: 'ASRock Z890 Pro RS WiFi ',
  //     info: 'DDR5-4xDIMM-256GB-9000MHz/ PCIe 5.0 x16/ PCIe 5.0 M.2/ WiFi 6E/ 2.5 GbE LAN/ 2x Thunderbolt 4 ',
  //     size: 'ATX',
  //     socket: 'LGA-1851 ',
  //     price: 27000,
  //     image: 'images/products/motherboard/ASRock-Z890-Pro-RS-WiFi.jpg',
  //   },
  //   { 
  //     id: 'm2',
  //     name: 'Gigabyte X870E Aorus Elite (WiFi) ',
  //     info: 'DDR5-4xDIMM-256GB-8200MHz/ PCIe 5.0 x16/ PCIe 5.0 M.2/ WiFi 7/ 2.5 GbE LAN/2x USB4 ',
  //     size: 'ATX',
  //     socket: 'AM5 ',
  //     price: 31500,
  //     image: 'images/products/motherboard/Gigabyte-X870E-Aorus-Elite-WiFi.jpg',
  //   }, 
  // ]

  // const motherboardElements = motherboardData.map((product) => {
  //   const styles = () => {
  //     if (props.socket !== "") {
  //       return {display: product.socket.includes(props.socket) ? 'block' : 'none'}
  //     } else {
  //       return {display: "block"}
  //     }
  //   }

  //   return (
  //     <Fragment key={product.id}>
  //       <div className="motherboard-container" 
  //         style={styles()}
  //       >
  //         <p className={
  //             props.motherboardId === product.id? "selected-motherboard": "motherboard-button"
  //           }
  //           onClick={() => {props.handleClick(product.id,product.price,product.image)}}
  //         >
  //           {product.name} ({product.socket} Socket) ({product.size})
  //         </p>
  //         <p className="motherboard-info">
  //           {product.info} <br/> Price: &#x20B9; {formatCurrency(product.price)}
  //         </p> 
  //       </div>
  //     </Fragment>
  //   )
  // })

  return (
    <>
      <h2 className="sub-heading"
        ref={props.ref}
      >
        Motherboard
      </h2>

      <fieldset className="selector">
        <legend>Select Socket</legend>
        <div className="selector-option">
          <input className="socket-selector-button" 
            type="radio" 
            name="socket-selector" 
            value="LGA-1851"
            checked={props.socket === "LGA-1851"}
            onChange={(event) => props.handleChange(event.target.value)}
            id="LGA-1851"
          />
          <label htmlFor="LGA-1851"><b>Intel Core Ultra<br/> LGA 1851</b></label>
        </div>
        <div className="selector-option">
          <input className="socket-selector-button" 
            type="radio" 
            name="socket-selector" 
            value="LGA-1700"
            checked={props.socket === "LGA-1700"}
            onChange={(event) => props.handleChange(event.target.value)}
            id="LGA-1700"
          />
          <label htmlFor="LGA-1700"><b>Intel (12th, 13th, 14th gen)<br/> LGA 1700</b></label>
        </div>
        <div className="selector-option">
          <input className="socket-selector-button" 
            type="radio" 
            name="socket-selector" 
            value="AM5"
            checked={props.socket === "AM5"}
            onChange={(event) => props.handleChange(event.target.value)}
            id="AM5"
          />
          <label htmlFor="AM5"><b>AMD (7th, 8th, 9th gen)<br/> AM5</b></label>
        </div>
        <div className="selector-option">
          <input className="socket-selector-button" 
            type="radio" 
            name="socket-selector" 
            value="AM4"
            checked={props.socket === "AM4"}
            onChange={(event) => props.handleChange(event.target.value)}
            id="AM4"
          />
          <label htmlFor="AM4"><b>AMD (5th gen)<br/> AM4</b></label>
        </div> 
      </fieldset>
      
      <div className="options">
        {/* {motherboardElements} */}
        <EnchancedComponent {...props}/>
      </div>
    </>
  )
}