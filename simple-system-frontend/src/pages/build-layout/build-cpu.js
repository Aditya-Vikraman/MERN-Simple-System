import { Fragment } from "react";
import { formatCurrency } from "../../utils/money";
import withDataFetching from '../../components/withDataFetching';

const EnchancedComponent = withDataFetching(
  ProcessorElements,
  '/api/v1/products/processors'
)

function ProcessorElements (props) {
  if (props.loading) return <div>Loading Product...</div>;
  if (props.error) return <div>Error: {props.error} </div>;
  if (!props.data) return <div>No products found</div>

  return (
    props.data.processors.map((product) => {
      const styles = () => {
        if (props.socket !== "") {
          return {display: product.socket.includes(props.socket) ? 'block' : 'none'}
        } else {
          return {display: "block"}
        }
      }
      
      return (
        <Fragment key={product._id}>
          <div className="cpu-container"
            style={styles()}
          >
            <p className={
              props.cpuId === product._id ? "selected-cpu": "cpu-button"
              }
              onClick={() => {props.handleClick(product._id,product.price,product.image)}}
            >
              {product.brand} {product.name} {product.core} ({product.socket})
            </p>
            <p className="cpu-info">
              {product.info} 
              <br/> Power: {product.power}
              <br/> Price: &#x20B9; {formatCurrency(product.price)}
            </p>
          </div>
        </Fragment>
      )
    })

  )
}

export default function ProcessorHTML (props) {
  // const processorData = [
  //   {
  //     id: 'cpu1',
  //     brand: 'Intel ',
  //     name: 'Core Ultra 9 285K ',
  //     core: '24-Core 5.7GHz(Turbo) ',
  //     socket: 'LGA-1851',
  //     info: 'DDR5-6400 MT/s, 8P(3.7GHz) & 16E(3.2GHz) Core, 24-Thread ',
  //     power: '250W (Turbo)',
  //     price: 59000,
  //     image: 'images/products/cpu/Intel-Core-Ultra-9-logo.png',
  //   },
  //   {
  //     id: 'cpu2',
  //     brand: 'AMD ',
  //     name: 'Ryzen 9 9950X3D ',
  //     core: '16-Core 5.7GHz(Max Boost) ',
  //     socket: 'AM5',
  //     info: 'DDR5-5600 MT/s, (4.3GHz-Base Clock), 32-Thread ',
  //     power: '170W (Default)',
  //     price: 72200,
  //     image: 'images/products/cpu/amd-ryzen-9-logo.webp',
  //   },
  // ]

  // const processorElements = processorData.map((product) => {
  //   const styles = () => {
  //     if (props.socket !== "") {
  //       return {display: product.socket.includes(props.socket) ? 'block' : 'none'}
  //     } else {
  //       return {display: "block"}
  //     }
  //   }
    
  //   return (
  //     <Fragment key={product.id}>
  //       <div className="cpu-container js-cpu-container"
  //         style={styles()}
  //       >
  //         <p className={
  //           props.cpuId === product.id ? "selected-cpu": "cpu-button"
  //           }
  //           onClick={() => {props.handleClick(product.id,product.price,product.image)}}
  //         >
  //           {product.brand} {product.name} {product.core} ({product.socket})
  //         </p>
  //         <p className="cpu-info">
  //           {product.info} 
  //           <br/> Power: {product.power}
  //           <br/> Price: &#x20B9; {formatCurrency(product.price)}
  //         </p>
  //       </div>
  //     </Fragment>
  //   )
  // })

  return (
    <>
      <p className="sub-heading"
        ref={props.ref}
      >
        Processor (CPU)
      </p>
      <div className="options">
        <EnchancedComponent {...props}/>
      </div>
    </>
  )
}