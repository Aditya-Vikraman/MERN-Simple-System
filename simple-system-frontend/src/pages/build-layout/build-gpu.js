import { formatCurrency } from '../../utils/money';
import { Fragment,useState  } from 'react';
import withDataFetching from '../../components/withDataFetching';

const EnchancedComponent = withDataFetching(
  GpuElements,
  '/api/v1/products/gpus'
)

function GpuElements (props) {
  if (props.loading) return <div>Loading Product...</div>;
  if (props.error) return <div>Error: {props.error} </div>;
  if (!props.data) return <div>No products found</div>

  return(
    props.data.gpus.map((product) => {
      const styles = () => {
        if (props.gpuComp !== "") {
          return {display: product.brand.includes(props.gpuComp) ? 'block' : 'none'}
        } else {
          return {display: "block"}
        }
      }
  
      return (
        <Fragment key={product._id}>
          <div className="gpu-container"
            style={styles()}
          >
            <p className={
                props.gpuId === product._id ? "selected-gpu" : "gpu-button"
              }
              onClick={() => {props.handleClick(product._id,product.price,product.image)}}
            >
              {product.manufacturer} {product.brand} {product.name}
            </p>
            <p className="gpu-info">
              {product.info}, {product.power}
              <br/> Recommended PSU: {product.psu}
              <br/> Price: &#x20B9; {formatCurrency(product.price)}
            </p>
          </div>
        </Fragment>
      )
    })
  )
}

export default function GpuHTML (props) {
  const [gpuComp, setGpuComp] = useState(() => "")
  // const gpuData = [
  //   {
  //     id: 'g1',
  //     manufacturer: 'Zotac ',
  //     brand: 'nvidia ',
  //     series: 'RTX 5000 ',
  //     name: 'GeForce RTX 5090 Solid',
  //     info: 'GDDR7-32GB, PCIe 5.0',
  //     power: '575W',
  //     psu: '1000W',
  //     price: 330000,
  //     image: 'images/products/gpu/Zotac-RTX-5090.jpg',
  //   },
  //   {
  //     id: 'g2',
  //     manufacturer: 'Gigabyte ',
  //     brand: 'AMD ',
  //     series: '9000 ',
  //     name: 'RX 9070 XT Gaming OC',
  //     info: 'GDDR6-16GB, PCIe 5.0 ',
  //     power: '330W',
  //     psu: '850W',
  //     price: 71400,
  //     image: 'images/products/gpu/Gigabyte-RX-9070-XT.jpg',
  //   },
  // ]

  // const gpuElements = gpuData.map((product) => {
  //   const styles = () => {
  //     if (gpuComp !== "") {
  //       return {display: product.brand.includes(gpuComp) ? 'block' : 'none'}
  //     } else {
  //       return {display: "block"}
  //     }
  //   }

  //   return (
  //     <Fragment key={product.id}>
  //       <div className="gpu-container"
  //         style={styles()}
  //       >
  //         <p className={
  //             props.gpuId === product.id ? "selected-gpu" : "gpu-button"
  //           }
  //           onClick={() => {props.handleClick(product.id,product.price,product.image)}}
  //         >
  //           {product.manufacturer} {product.brand} {product.name}
  //         </p>
  //         <p className="gpu-info">
  //           {product.info}, {product.power}
  //           <br/> Recommended PSU: {product.psu}
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
        Graphics Card (GPU)
      </p>
      <div className="selector">
        <div className="selector-option">
          <input className="gpu-selector-button" 
            type="radio" 
            name="gpu-selector" 
            value="nvidia"
            checked={gpuComp === "nvidia"}
            onChange={(event) => {setGpuComp(event.target.value)}}
          />
          <div><b>NVIDIA</b></div>
        </div>
        <div className="selector-option">
          <input className="gpu-selector-button" 
            type="radio" 
            name="gpu-selector" 
            value="AMD"
            checked={gpuComp === "AMD"}
            onChange={(event) => {setGpuComp(event.target.value)}}
          />
          <div><b>AMD</b></div>
        </div>
      </div>
    
      <div className="options js-gpu-options">
        <EnchancedComponent 
          {...props}
          gpuComp = {gpuComp}
        />
      </div>
    </>
  )
}