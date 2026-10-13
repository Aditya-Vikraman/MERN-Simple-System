import { useState } from 'react';

import {Header} from '../components/Header.js';

import ConnectivityHTML from './info-layout/info-connectivity.js';
import CpuHTML from './info-layout/info-cpu.js';
import DisplayHTML from './info-layout/info-display.js';
import GpuHTML from './info-layout/info-gpu.js';
import MemoryStorageHTML from './info-layout/info-memory-storage.js'

import cpu_icon from '../images/icons/cpu-icon.png';
import gpu_icon from '../images/icons/graphics-card-icon.png';
import monitor_icon from '../images/icons/monitor-icon.png';
import memory_icon from '../images/icons/memory-slot-icon.png';
import connect_icon from '../images/icons/connect-icon.png';

import '../styles/info-sidebar.css';
import '../styles/general.css';
import '../styles/infoPage.css';

function InfoPage () {
  const [view, setView] = useState(() => "")
  return (
    <>
      <Header location={"infoPage"}/>
  
      <nav className="info-sidebar">
        <div className={`sidebar-link ${view === 'cpu' && "selected"}`}
          onClick={() => setView("cpu")}
        >
          <img src={cpu_icon} alt="processor_icon"/>
          CPU
        </div>

        <div className={`sidebar-link ${view === 'gpu' && "selected"}`}
          onClick={() => setView("gpu")}
        >
          <img src={gpu_icon} alt="graphic card icon"/>
          GPU
        </div>

        <div className={`sidebar-link ${view === 'display' && "selected"}`}
          onClick={() => setView("display")}
        >
          <img src={monitor_icon} alt="display icon"/>
          Display
        </div>

        <div className={`sidebar-link ${view === 'memory' && "selected"}`}
          onClick={() => setView("memory")}
        >
          <img src={memory_icon} alt="memory and storage icon"/>
          Memory &amp; Storage
        </div>

        <div className={`sidebar-link ${view === 'connectivity' && "selected"}`}
          onClick={() => setView("connectivity")}
        >
          <img src={connect_icon} alt="connectivity icon"/>
          Connectivity
        </div>
      </nav>
    
      <main className="infopage js-content">
        {view === "cpu" && <CpuHTML/>}
        {view === "gpu" && <GpuHTML/>}
        {view === "display" && <DisplayHTML/>}
        {view === "memory" && <MemoryStorageHTML/>}
        {view === "connectivity" && <ConnectivityHTML/>}

        {view === "" && 
        <p>
          <b>
            &#8679; Click on any tab of the nav bar above for information about each components. 
          </b>

          <br/>

          This should give you the basic knowledge about various aspects of the hardware of a computer system, which you might find helpful when purchasing a new pc.
          
        </p>
        }
      </main>
    </>
  )
}

export default InfoPage;