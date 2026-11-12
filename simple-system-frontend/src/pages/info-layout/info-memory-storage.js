function MemoryStorageHTML () {
  return (
    <>
      <h1 className="title">
        Memory &amp; Storage
      </h1>

      <h2 className="topic">
        Memory (RAM)
      </h2>
      <p>
        RAM is a computing acronym that stands for Random&ndash;Access memory. In essence, RAM is your pc&#39;s short&ndash;term memory. It&#39;s where the data is stored that your computer processor needs to run your applications and open your files.
      </p>
      <p>
        There are two configurations single&ndash;channel and dual&ndash;channel (DIMM &ndash; dual in&ndash;line memory module).<br/>
        Dual&ndash;channel configuration can provide a significant increase in memory bandwidth, which is the rate at which data can be transferred between the RAM and the processor. This can lead to faster system performance. So, higher bandwidth means faster data transfer rate.
      </p>
      <p>
        DDR4 SDRAM (Double Data Rate 4 Synchronous Dynamic Random&ndash;Access Memory) is the most commonly used RAM. But, the latest processors use DDR5.
      </p>

      <h2 className="topic">
        Storage
      </h2>
      <p>
        The most common type of storage devices are HDD (Hard&ndash;Disk Drive) and SDD (Solid&ndash;State Drive).
        These storage devices are essentialy your pc&#39;s long term memory.<br/>
        SSD are commonly used as they offer higher bandwidth.
      </p>
      <p>
        M.2 is a form factor for SSDs (solid-state drives) that&#39;s shaped like a stick of gum. These SSDs are generally faster but more expensive than traditional, 2.5&ndash;inch SSDs. 
      </p>
      <p>
        While 2.5&ndash;inch SSDs use the SATA bus, the M.2 uses PCIe (peripheral component interconnect express) bus. Additionally, some of the fastest and best SSDs use the NVMe (Non&ndash;Volatile Memory Express) interface, which was made for rapid storage devices. 
      </p>
      <p>
        Every PCIe connection features 1, 4, 8, 16 lanes for data transfer.  The bandwidth will increase linearly with the number of PCIe lanes.
      </p>
      <p>
        You can tell what size an M.2 SSD is by reading the four or five digit number in its name or on its printed&ndash;circuit board (PCB). The first two numbers are its width, while the others are its length.<br/>
        For example: M.2 Type&ndash;2280 (22mm is width &amp; 80mm is length)
      </p>
    </>
  )
};

export default MemoryStorageHTML;