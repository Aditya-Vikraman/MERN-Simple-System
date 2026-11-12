import { formatCurrency } from '../../utils/money';
import { Fragment,useState  } from 'react';
import withDataFetching from '../../components/withDataFetching';

const EnchancedComponent = withDataFetching(
  RamElements,
  '/api/v1/products/rams'
)

function RamElements (props) {
  if (props.loading) return <div>Loading Product...</div>;
  if (props.error) return <div>Error: {props.error} </div>;
  if (!props.data) return <div>No products found</div>

  return (
    props.data.rams.map((product) => {
      const styles = () => {
        if (props.type !== "") {
          return {display: product.type.includes(props.type) ? 'block' : 'none'}
        } else {
          return {display: "block"}
        }
      }
  
      return (
        <Fragment key={product._id}>
          <div className="ram-container"
            style={styles()}
          >
            <p className={
                props.ramId === product._id ? "selected-ram" : "ram-button"
              }
              onClick={() => {props.handleClick(product._id,product.price,product.image)}}
            >
              {product.name} {product.space} {product.type}
            </p>
            <p className="ram-info">
              {product.info} <br/> Price: &#x20B9; {formatCurrency(product.price)}
            </p>
          </div>
        </Fragment>
      )
    })
  )
}

export default function RamHTML (props) {
  const [type,setType] = useState(() => "");

  // const ramData = [
  //   {
  //     id: 'r1',
  //     name: 'Kingston Fury Beast ',
  //     space: '64GB ',
  //     type: 'DDR5 6000MHz CL30',
  //     info: '2 x 32GB',
  //     price: 16900,
  //     image: 'images/products/ram/Kingston-Fury-Beast.jpg',
  //   },
  //   {
  //     id: 'r2',
  //     name: 'Corsair Vengeance LPX ',
  //     space: '64GB ',
  //     type: 'DDR4 3200MHz CL16',
  //     info: '2 x 32GB',
  //     price: 11700,
  //     image: 'images/products/ram/corsair-Vengeance-64GB-DDR4.jpg',
  //   },
  // ]

  // const ramElements = ramData.map((product) => {
  //   const styles = () => {
  //     if (type !== "") {
  //       return {display: product.type.includes(type) ? 'block' : 'none'}
  //     } else {
  //       return {display: "block"}
  //     }
  //   }

  //   return (
  //     <Fragment key={product.id}>
  //       <div className="ram-container"
  //         style={styles()}
  //       >
  //         <p className={
  //             props.ramId === product.id ? "selected-ram" : "ram-button"
  //           }
  //           onClick={() => {props.handleClick(product.id,product.price,product.image)}}
  //         >
  //           {product.name} {product.space} {product.type}
  //         </p>
  //         <p className="ram-info">
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
        Memory (RAM)
      </h2>

      <fieldset className="selector">
        <legend>Select Memory Type</legend>
        <div className="selector-option">
          <input className="ram-selector-button" 
            type="radio" 
            name="ram-selector" 
            value="DDR5"
            checked={type === "DDR5"}
            onChange={(event) => {setType(event.target.value)}}
            id="DDR5"
          />
          <label htmlFor="DDR5"><b>DDR5</b></label>
        </div>
        <div className="selector-option">
          <input className="gpu-selector-button" 
            type="radio" 
            name="ram-selector" 
            value="DDR4"
            checked={type === "DDR4"}
            onChange={(event) => {setType(event.target.value)}}
            id="DDR4"
          />
          <label htmlFor="DDR4"><b>DDR4</b></label>
        </div>
      </fieldset>

      <div className="options">
        <EnchancedComponent
          {...props}
          type = {type}
        />
      </div>
    </>
  )
}