import { formatCurrency } from '../../utils/money';
import { Fragment,useState } from 'react';
import withDataFetching from '../../components/withDataFetching';

const EnchancedComponent = withDataFetching(
  StorageElements,
  '/api/v1/products/storages'
)

function StorageElements (props) {
  if (props.loading) return <div>Loading Product...</div>;
  if (props.error) return <div>Error: {props.error} </div>;
  if (!props.data) return <div>No products found</div>

  return (
    props.data.storages.map((product) => {
      const styles = () => {
        if (props.capacity !== "") {
          return {display: product.space.includes(props.capacity) ? 'block' : 'none'}
        } else {
          return {display: "block"}
        }
      }
      
      return (
        <Fragment key={product._id}>
          <div className="storage-container"
            style={styles()}
          >
            <p className={
                props.storageId === product._id ? "selected-storage": "storage-button"
              }
              onClick={() => {props.handleClick(product._id,product.price,product.image)}}
            >
              {product.name} {product.space} {product.formFactor} {product.interface}
            </p>
            <p className="storage-info">
              Price: &#x20B9; {formatCurrency(product.price)}
            </p>
          </div>
        </Fragment>
      )
    })
  )
}

export default function StorageHTML (props) {
  const [capacity, setCapacity] = useState(() => "");

  // const storageData = [
  //   {
  //     id: 's1',
  //     name: 'Samsung 990 Pro SSD ',
  //     space: '4-TB ',
  //     formFactor: 'M.2 ',
  //     interface: 'PCIe 4.0 x4 NVMe',
  //     price: 35500,
  //     image: 'images/products/storage/Samsung-990-Pro-4-TB.jpg'
  //   },
  //   {
  //     id: 's2',
  //     name: 'Samsung 990 Pro SSD ',
  //     space: '2-TB ',
  //     formFactor: 'M.2 ',
  //     interface: 'PCIe 4.0 x4 NVMe',
  //     price: 17200,
  //     image: 'images/products/storage/Samsung-990-Pro-2-TB.jpg'
  //   },
  //   {
  //     id: 's3',
  //     name: 'Samsung 990 Pro SSD ',
  //     space: '1-TB ',
  //     formFactor: 'M.2 ',
  //     interface: 'PCIe 4.0 x4 NVMe',
  //     price: 10400,
  //     image: 'images/products/storage/Samsung-990-Pro-1-TB.jpg'
  //   },
  // ]

  // const storageElements = storageData.map((product) => {
  //   const styles = () => {
  //     if (capacity !== "") {
  //       return {display: product.space.includes(capacity) ? 'block' : 'none'}
  //     } else {
  //       return {display: "block"}
  //     }
  //   }
    
  //   return (
  //     <Fragment key={product.id}>
  //       <div className="storage-container"
  //         style={styles()}
  //       >
  //         <p className={
  //             props.storageId === product.id ? "selected-storage": "storage-button"
  //           }
  //           onClick={() => {props.handleClick(product.id,product.price,product.image)}}
  //         >
  //           {product.name} {product.space} {product.formFactor} {product.interface}
  //         </p>
  //         <p className="storage-info">
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
        Storage
      </h2>

      <fieldset className="selector">
      <legend>Select Storage Size</legend>
        <div className="selector-option">
          <input className="storage-size-selector-button" 
            type="radio" 
            name="storage-size-selector" 
            value="4-TB"
            checked={capacity === "4-TB"}
            onChange={(event) => {setCapacity(event.target.value)}}
            id="4-TB"
          />
          <label htmlFor="4-TB"><b>4-TB</b></label>
        </div>
        <div className="selector-option">
          <input className="storage-size-selector-button" 
            type="radio" 
            name="storage-size-selector" 
            value="2-TB"
            checked={capacity === "2-TB"}
            onChange={(event) => {setCapacity(event.target.value)}}
            id="2-TB"
          />
          <label htmlFor="2-TB"><b>2-TB</b></label>
        </div>
        <div className="selector-option">
          <input className="storage-size-selector-button" 
            type="radio" 
            name="storage-size-selector" 
            value="1-TB"
            checked={capacity === "1-TB"}
            onChange={(event) => {setCapacity(event.target.value)}}
            id="1-TB"
          />
          <label htmlFor="1-TB"><b>1-TB</b></label>
        </div>
      </fieldset>

      <div className="options">
        <EnchancedComponent 
          {...props}
          capacity = {capacity}
        />
      </div>
    </>
  )
}