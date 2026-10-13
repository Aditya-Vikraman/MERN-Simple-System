import { formatCurrency } from '../../utils/money';
import { Fragment } from 'react';
import withDataFetching from '../../components/withDataFetching';

const EnchancedComponent = withDataFetching(
  CoolerElements,
  '/api/v1/products/coolers'
)

function CoolerElements (props) {
  if (props.loading) return <div>Loading Product...</div>;
  if (props.error) return <div>Error: {props.error} </div>;
  if (!props.data) return <div>No products found</div>

  return (
    props.data.coolers.map((product) => {
      return (
        <Fragment key={product._id}>
          <div className="cooler-container">
            <p className={
                props.coolerId === product._id ? "selected-cooler" : "cooler-button"
              }
              onClick={() => {props.handleClick(product._id,product.price,product.image)}}
            >
              {product.manufacturer} {product.name} 
            </p>
            <p className="cooler-info">
              {product.info} 
              <br/> {product.tdp} TDP
              <br/> Price: &#x20B9; {formatCurrency(product.price)}
            </p>
          </div>
        </Fragment>
      )
    })
  )
}

export default function CoolerHTML (props) {
  // const coolerData = [
  //   {
  //     id: 'c1',
  //     manufacturer: 'Noctua ',
  //     name: 'NH-D15 G2',
  //     info: 'Dual tower, Two 140mm fan',
  //     tdp: '240W',
  //     price: 13700,
  //     image: 'images/products/cooler/Noctua-NH-D15-G2.jpg',
  //   },
  // ]

  // const coolerElements = coolerData.map((product) => {
  //   return (
  //     <Fragment key={product.id}>
  //       <div className="cooler-container">
  //         <p className={
  //             props.coolerId === product.id ? "selected-cooler" : "cooler-button"
  //           }
  //           onClick={() => {props.handleClick(product.id,product.price,product.image)}}
  //         >
  //           {product.manufacturer} {product.name} 
  //         </p>
  //         <p className="cooler-info">
  //           {product.info} 
  //           <br/> {product.tdp} TDP
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
        Cooler
      </p>
      <div className="options">
        <EnchancedComponent {...props}/>
      </div>
    </>
  )
}