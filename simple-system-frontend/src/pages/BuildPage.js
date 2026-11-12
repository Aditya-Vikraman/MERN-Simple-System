import { ScrollRestoration } from 'react-router-dom';

import { Header } from '../components/Header.js';
import { formatCurrency } from '../utils/money.js';
import { useState, useRef, useEffect } from 'react';

import MotherboardHTML from './build-layout/build-motherboard.js';
import ProcessorHTML from './build-layout/build-cpu.js';
import GpuHTML from './build-layout/build-gpu.js';
import StorageHTML from './build-layout/build-storage.js';
import RamHTML from './build-layout/build-ram.js';
import PsuHTML from './build-layout/build-psu.js';
import CaseHTML from './build-layout/build-case.js';
import CoolerHTML from './build-layout/build-cooler.js';

import '../styles/general.css';
import '../styles/buildPage.css';

import motherboard_icon from '../images/icons/motherboard-icon.png';
import cpu_icon from '../images/icons/cpu-icon.png';
import gpu_icon from '../images/icons/graphics-card-icon.png';
import storage_icon from '../images/icons/storage-icon.png';
import ram_icon from '../images/icons/memory-slot-icon.png';
import psu_icon from '../images/icons/psu-icon.png';
import case_icon from '../images/icons/case-icon.png';
import cooler_icon from '../images/icons/cooler-icon.png';

function BuildPage () {
  const [selectedComponents, setSelectedComponents] = useState(() => 
    ({
      motherboard: "",
      motherboardPrice: 0,
      motherboardImage: "", 
      cpu: "",
      cpuPrice: 0,
      cpuImage: "",
      gpu: "",
      gpuPrice: 0,
      gpuImage: "",
      storage: "",
      storagePrice: 0,
      storageImage: "",
      ram: "",
      ramPrice: 0,
      ramImage: "",
      psu: "",
      psuPrice: 0,
      psuImage: "",
      case: "",
      casePrice: 0,
      caseImage: "",
      cooler: "",
      coolerPrice: 0,
      coolerImage: "",
    })
  )
  const [overlay, setOverlay] = useState(() => ({item: "", path: ""}))
  const [socket, setSocket] = useState(() => "");

  const totalCost = selectedComponents.motherboardPrice + selectedComponents.cpuPrice + selectedComponents.gpuPrice + selectedComponents.storagePrice + selectedComponents.ramPrice + selectedComponents.psuPrice + selectedComponents.casePrice + selectedComponents.coolerPrice

  const focusRef = useRef(null)

  function OverlayElement () {
    let selected;
    if (overlay.item === "motherboard") {
      selectedComponents.motherboardImage !== "" ?
        selected = true :
        selected = false
    }
    if (overlay.item === "processor") {
      selectedComponents.cpuImage !== "" ?
        selected = true :
        selected = false
    }
    if (overlay.item === "grapics card") {
      selectedComponents.gpuImage !== "" ?
        selected = true :
        selected = false
    }
    if (overlay.item === "storage") {
      selectedComponents.storageImage !== "" ?
        selected = true :
        selected = false
    }
    if (overlay.item === "memory") {
      selectedComponents.ramImage !== "" ?
        selected = true :
        selected = false
    }
    if (overlay.item === "power supply") {
      selectedComponents.psuImage !== "" ?
        selected = true :
        selected = false
    }
    if (overlay.item === "case") {
      selectedComponents.caseImage !== "" ?
        selected = true :
        selected = false
    }
    if (overlay.item === "cooler") {
      selectedComponents.coolerImage !== "" ?
        selected = true :
        selected = false
    }

    useEffect(() => {
      // if (focusRef.current) {
      //   focusRef.current.focus()
      // }
      focusRef.current?.focus()
    },[])

    return (
      <div className="overlay overlay-build">
        <img src={overlay.path} alt={selected? `selected ${overlay.item} Enlarged` : `default ${overlay.item} icon`}/>
        {!selected && <p>Please select a {overlay.item}</p>}
        <button className="close-button"
          aria-label="close overlay image"
          onClick={() => setOverlay({item: "", path: ""})}
          ref={focusRef}
        >
          X
        </button>
    </div>
    )
  } 

  const scrollRefs = useRef({})

  function autoScroll (key) {
    if(scrollRefs.current[key]) {
      scrollRefs.current[key].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  return (
    <>
      <ScrollRestoration />

      <Header location={"buildPage"}/>

      <div className="build-sidebar">
        <div className="sidebar-button"
          onClick={() => {
            setOverlay({item: "motherboard", path:selectedComponents.motherboardImage || motherboard_icon})
            autoScroll('motherboard')
          }}
        >
          <img src={selectedComponents.motherboardImage || motherboard_icon} 
            alt={selectedComponents.motherboardImage === '' ? 'default motherboard icon': 'selected motherboard'}
          />
          <p>Please select a motherboard</p>
        </div>
        <div className="sidebar-button"
          onClick={() => {
            setOverlay({item: "processor", path:selectedComponents.cpuImage || cpu_icon})
            autoScroll('cpu')
          }}
        >
          <img src={selectedComponents.cpuImage || cpu_icon} 
            alt={selectedComponents.cpuImage === '' ? 'default processor icon': 'selected processor'}
          />
          <p>Please select a processor</p>
        </div>
        <div className="sidebar-button"
          onClick={() => {
            setOverlay({item:"grapics card", path:selectedComponents.gpuImage || gpu_icon})
            autoScroll('gpu')
          }}
        >
          <img src={selectedComponents.gpuImage || gpu_icon} 
            alt={selectedComponents.gpuImage === '' ? 'default graphics card icon': 'selected graphics card'}
          />
          <p>Please select a graphics card</p>
        </div>
        <div className="sidebar-button"
          onClick={() => {
            setOverlay({item:"storage", path:selectedComponents.storageImage || storage_icon})
            autoScroll('storage')
          }}
        >
          <img src={selectedComponents.storageImage || storage_icon} 
            alt={selectedComponents.storageImage === '' ? 'default storage icon': 'selected storage'}
          />
          <p>Please select a storage</p>
        </div>
        <div className="sidebar-button"
          onClick={() => {
            setOverlay({item:"memory", path:selectedComponents.ramImage || ram_icon})
            autoScroll('ram')
          }}
        >
          <img src={selectedComponents.ramImage || ram_icon} 
            alt={selectedComponents.ramImage === '' ? 'default memory icon': 'selected memory'}
          />
          <p>Please select a memory</p>
        </div>
        <div className="sidebar-button"
          onClick={() => {
            setOverlay({item:"power supply", path:selectedComponents.psuImage || psu_icon})
            autoScroll('psu')
          }}
        >
          <img src={selectedComponents.psuImage || psu_icon} 
            alt={selectedComponents.psuImage === '' ? 'default power supply icon': 'selected power supply'}
          />
          <p>Please select a power supply</p>
        </div>
        <div className="sidebar-button"
          onClick={() => {
            setOverlay({item:"case", path:selectedComponents.caseImage || case_icon})
            autoScroll('case')
          }}
        >
          <img src={selectedComponents.caseImage || case_icon} 
            alt={selectedComponents.caseImage === '' ? 'default case icon': 'selected case'}
          />
          <p>Please select a case</p>
        </div>
        <div className="sidebar-button"
          onClick={() => {
            setOverlay({item:"cooler", path:selectedComponents.coolerImage || cooler_icon})
            autoScroll('cooler')
          }}
        >
          <img src={selectedComponents.coolerImage || cooler_icon} 
            alt={selectedComponents.coolerImage === '' ? 'default cooler icon': 'selected cooler'}
          />
          <p>Please select a cooler</p>
        </div>
      </div>

      <main className="buildpage">
        <div className="build-grid">
          <section aria-label="components list" className="section-1">
            <h1>
              Select your components below to get an estimated price
            </h1>

            <MotherboardHTML 
              ref={(el) => (scrollRefs.current['motherboard'] = el)}
              motherboardId = {selectedComponents.motherboard}
              socket = {socket}
              handleChange = {(value) => {setSocket(value)}}
              handleClick={(id,price,image) => setSelectedComponents(preState => {
                return {
                  ...preState,
                  motherboard: id,
                  motherboardPrice: price,
                  motherboardImage: image
                }
              })}
            />

            <ProcessorHTML 
              ref={(el) => (scrollRefs.current['cpu'] = el)}
              cpuId = {selectedComponents.cpu}
              socket = {socket}
              handleClick={(id,price,image) => setSelectedComponents(preState => {
                return {
                  ...preState,
                  cpu: id,
                  cpuPrice: price,
                  cpuImage: image
                }
              })}
            />

            <GpuHTML 
              ref={(el) => (scrollRefs.current['gpu'] = el)}
              gpuId = {selectedComponents.gpu}
              handleClick={(id,price,image) => setSelectedComponents(preState => {
                return {
                  ...preState,
                  gpu: id,
                  gpuPrice: price,
                  gpuImage: image
                }
              })}
            />

            <StorageHTML 
              ref={(el) => (scrollRefs.current['storage'] = el)}
              storageId = {selectedComponents.storage}
              handleClick={(id,price,image) => setSelectedComponents(preState => {
                return {
                  ...preState,
                  storage: id,
                  storagePrice: price,
                  storageImage: image
                }
              })}
            />

            <RamHTML 
              ref={(el) => (scrollRefs.current['ram'] = el)}
              ramId = {selectedComponents.ram}
              handleClick={(id,price,image) => setSelectedComponents(preState => {
                return {
                  ...preState,
                  ram: id,
                  ramPrice: price,
                  ramImage: image
                }
              })}
            />

            <PsuHTML 
              ref={(el) => (scrollRefs.current['psu'] = el)}
              psuId = {selectedComponents.psu}
              handleClick={(id,price,image) => setSelectedComponents(preState => {
                return {
                  ...preState,
                  psu: id,
                  psuPrice: price,
                  psuImage: image
                }
              })}
            />

            <CaseHTML 
              ref={(el) => (scrollRefs.current['case'] = el)}
              caseId = {selectedComponents.case}
              handleClick={(id,price,image) => setSelectedComponents(preState => {
                return {
                  ...preState,
                  case: id,
                  casePrice: price,
                  caseImage: image
                }
              })}
            />

            <CoolerHTML
              ref={(el) => (scrollRefs.current['cooler'] = el)}
              coolerId = {selectedComponents.cooler}
              handleClick={(id,price,image) => setSelectedComponents(preState => {
                return {
                  ...preState,
                  cooler: id,
                  coolerPrice: price,
                  coolerImage: image
                }
              })}
            />
          </section>

          <section aria-labelledby="label" className="section-2">
            <h2 id="label" className="cost-title">
              Cost Summary
            </h2>
            <div className="js-section-2">
              <div className="cost-element">
                <p>
                  Motherboard :
                </p>
                <p className="cost">
                  &#x20B9; {formatCurrency(selectedComponents.motherboardPrice)}
                </p>
              </div>

              <div className="cost-element">
                <p>
                  Processor :
                </p>
                <p className="cost">
                  &#x20B9; {formatCurrency(selectedComponents.cpuPrice)}
                </p>
              </div>

              <div className="cost-element">
                <p>
                  Graphics Card :
                </p>
                <p className="cost"> 
                  &#x20B9; {formatCurrency(selectedComponents.gpuPrice)}
                </p>
              </div>

              <div className="cost-element">
                <p>
                  Storage : 
                </p>
                <p className="cost">
                  &#x20B9; {formatCurrency(selectedComponents.storagePrice)}
                </p>
              </div>

              <div className="cost-element">
                <p>
                  Memory :
                </p>
                <p className="cost">
                  &#x20B9; {formatCurrency(selectedComponents.ramPrice)}
                </p>
              </div>
              
              <div className="cost-element">
                <p> 
                  Power Supply :
                </p>
                <p className="cost">
                  &#x20B9; {formatCurrency(selectedComponents.psuPrice)}
                </p>
              </div>

              <div className="cost-element">
                <p>
                  Case :
                </p>
                <p className="cost">
                  &#x20B9; {formatCurrency(selectedComponents.casePrice)}
                </p>
              </div>

              <div className="cost-element">
                <p>
                  Cooler :
                </p>
                <p className="cost">
                  &#x20B9; {formatCurrency(selectedComponents.coolerPrice)}
                </p>
              </div>

              <div className="cost-bar">
                <p>
                  Total :
                </p>
                <p className="cost">
                  &#x20B9; {formatCurrency(totalCost)}
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="image-box js-image-box">
          {overlay.path !== "" && <OverlayElement/>}
        </div>
      </main>
    </>
  )
}

export default BuildPage