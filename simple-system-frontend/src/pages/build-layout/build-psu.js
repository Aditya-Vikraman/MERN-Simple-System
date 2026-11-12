import { formatCurrency } from '../../utils/money';
import { Fragment } from 'react';
import withDataFetching from '../../components/withDataFetching';

const EnchancedComponent = withDataFetching(
  PsuElements,
  '/api/v1/products/psus'
)

function PsuElements (props) {
  if (props.loading) return <div>Loading Product...</div>;
  if (props.error) return <div>Error: {props.error} </div>;
  if (!props.data) return <div>No products found</div>

  return (
    props.data.psus.map((product) => {
      return (
        <Fragment key={product._id}>
          <div className="psu-container">
            <p className={
              props.psuId === product._id ? "selected-psu" : "psu-button"
              }
              onClick={() => {props.handleClick(product._id,product.price,product.image)}}
            >
              {product.manufacturer} {product.name} {product.wattage} {product.efficiency} {product.modular}
            </p>
            <p className="psu-info">
              Price: &#x20B9; {formatCurrency(product.price)}
            </p>
          </div>
        </Fragment>
      )
    })
  )
}

export default function PsuHTML (props) {
  // const psuData = [
  //   {
  //     id: 'p1',
  //     manufacturer: 'Thermaltake ',
  //     name: 'Toughpower GF3 ',
  //     wattage: '1350W ',
  //     efficiency: '80+ Gold ',
  //     modular: 'Fully Modular',
  //     price: 20700,
  //     image: 'images/products/psu/Thermaltake-Toughpower-GF3-1350W.jpg',
  //   },
  // ]

  // const psuElements = psuData.map((product) => {
  //   return (
  //     <Fragment key={product.id}>
  //       <div className="psu-container">
  //         <p className={
  //           props.psuId === product.id ? "selected-psu" : "psu-button"
  //           }
  //           onClick={() => {props.handleClick(product.id,product.price,product.image)}}
  //         >
  //           {product.manufacturer} {product.name} {product.wattage} {product.efficiency} {product.modular}
  //         </p>
  //         <p className="psu-info">
  //           Price: &#x20B9; {formatCurrency(product.price)}
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
        Power Supply Unit (PSU)
      </h2>
      
      <div className="options">
        <EnchancedComponent {...props}/>
      </div>
    </>
  )
}