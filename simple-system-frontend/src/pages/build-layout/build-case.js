import { formatCurrency } from '../../utils/money';
import { Fragment } from 'react';
import withDataFetching from '../../components/withDataFetching';

const EnchancedComponent = withDataFetching(
  CaseElements,
  '/api/v1/products/cases'
)

function CaseElements (props) {
  if (props.loading) return <div>Loading Product...</div>;
  if (props.error) return <div>Error: {props.error} </div>;
  if (!props.data) return <div>No products found</div>

  return (
    props.data.cases.map((product) => {
      return (
        <Fragment key={product._id}>
          <div className="case-container">
            <p className={
                props.caseId === product._id ? "selected-case" : "case-button"
              }
              onClick={() => {props.handleClick(product._id,product.price,product.image)}}
            >
              {product.name} {product.type}
            </p>
            <p className="case-info">
              Price: &#x20B9; {formatCurrency(product.price)}
            </p>
          </div>
        </Fragment>
      )
    })

  )
} 

export default function CaseHTML (props) {
  // const caseData =[
  //   {
  //     id: 'c1',
  //     name: 'Fractal Design North XL TG Dark ',
  //     type: 'E-ATX Mid Tower',
  //     price: 20000,
  //     image: 'images/products/case/Fractal-Design-North-XL-TG-Dark.jpg',
  //   },
  // ]

  // const caseElements = caseData.map((product) => {
  //   return (
  //     <Fragment key={product.id}>
  //       <div className="case-container">
  //         <p className={
  //             props.caseId === product.id ? "selected-case" : "case-button"
  //           }
  //           onClick={() => {props.handleClick(product.id,product.price,product.image)}}
  //         >
  //           {product.name} {product.type}
  //         </p>
  //         <p className="case-info">
  //           Price: &#x20B9; {formatCurrency(product.price)}
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
        Case
      </p>
      <div className="options">
        <EnchancedComponent {...props}/>
      </div>
    </>
  )
}