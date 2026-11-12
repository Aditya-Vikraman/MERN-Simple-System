import nvidia_logo from '../../images/nvidia.png';
import amd_radeon_logo from '../../images/amd-radeon.png';

function GpuHTML () {
  return (
    <>
      <h1 className="title">
        Graphics Processing Unit (GPU)
      </h1>
      
      <div className="gpu-image-container">
        <img className="nvidia-logo" 
          src={nvidia_logo}
          alt="nvidia logo"
        />
        <img className="amd-radeon-logo" 
          src={amd_radeon_logo}
          alt="amd radeon logo"
        />
      </div>

      <p>
        AMD and Nvidia are the two biggest graphics card manufacturers. The most basic difference between AMD GPUs and Nvidia GPUs is that Nvidia chips tend to be more powerful, especially at the high-end, while AMD cards offer better value at lower price points and a more friendly user interface.
      </p>

      <p>
        Nvidia&#39;s Deep Learning Super Sampling (DLSS) technology, optimizes ray tracing — an AI-enabled rendering technique that can model light effects with breathtaking realism.<br/> 
        AMD uses a similar technique called FSR, but it&#39;s not yet able to deliver the light effects quite so convincingly. <br/>
        If you are fine with sacrificing ray tracing for increased framerate, then you&#39;ll want to go with an AMD card that costs significantly less than an Nvidia GPU with equivalent native performance.
      </p>

      <p>
        AMD GPUs tend to have more VRAM.
      </p>

      <p>
        When it comes to GPUs designed for laptops, Nvidia is the clear market leader thanks to its ability to produce thinner, higher-performance cards at competitive prices. For this reason, most laptops come equipped with an Nvidia GPU.
      </p>
    </>
  )
};

export default GpuHTML;