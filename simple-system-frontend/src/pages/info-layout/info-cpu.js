import intel_logo from '../../images/intel-logo.png';
import intel_processor_taxonomy from '../../images/intel-processor-taxonomy.png';
import intel_ultra_taxonomy from '../../images/intel-ultra-naming-scheme.JPG';
import amd_logo from '../../images/amd.png';
import amd_processor_taxonomy from '../../images/amd-processor-taxonomy.jpg';
import amd_mobile_taxonomy from '../../images/amd-new-taxonomy.jpg';

function CpuHTML () {
  return (
    <>
      <h1 className="title">
        Central Processing Unit (CPU)
      </h1>

      <div>
        For decades, Intel and AMD have made the most trusted CPUs on the market, but the thicket of model numbers, names, and generations can make it challenging to choose the best processor (CPU) for your Personal Computer (PC).
        
        <p>
          For <b>Intel</b>, the 12th to 14th gen processors supports DDR5 &amp; DDR4  and PCIe 5.0, where as the 11th gen supports only upto DDR4 and PCIe 4.0.
          . From 11th  gen onwards there is support for thunderbolt 4. These older processors have can have upto four tiers based on its performance the low tier i3, the mid tier i5, the upper tier i7 and the top tier i9.
          The higher generation represents the newer processor.
        </p>

        <p>
          For <b>AMD</b>, the 5th gen processors support DDR4 and from 7th gen onwards they only support DDR5. The 6th gen (mobile only) supports  only DDR5 (5200 MT/s) and PCIe 4.0. From 7th gen onward there is supports for PCIe 5.0. From 6th gen onward there is support for USB 4.0.
        </p>

        Below, we&#39;ll look at naming conventions, so when you see Intel Core™ i5-12450HX or AMD Ryzen 5700U, you&#39;ll know exactly what each part of the name means.
      </div>

      <section aria-label="intel">
        <div className="brand-photo-container">
          <img className="intel-logo-image" 
            src={intel_logo}
            alt="intel logo"
          />
        </div>

        <div className="processor-name-photo-container">
          <img className="processor-name-image" 
            src={intel_processor_taxonomy}
            alt="old processor naming scheme"
          />
        </div>

        <p>
          In Intel Core i7-13700K, first comes the Brand name (Intel Core), then the Brand Modifier (i7), then the Generation indicator (13), then the SKU Numeric digit (700), finaly the Product Line Suffix (K).
        </p>

        <h2 className="topic">
          Brand
        </h2>
        <p>
          The Intel naming scheme starts with the processorcs brand—the overall product line the processor was created for. The most common Intel processor names begin with Intel Core.
        </p>

        <h2 className="topic">
          Brand Modifier
        </h2>
        <p>
          Intel Core processor series include a brand modifier before the remaining parts of the model number. Today, the Intel Core processor series includes the brand modifiers i3, i5, i7, and i9. Higher brand modifier numbers offer a higher level of performance. For example, within a given processor family, an i9 will outperform an i7, which will outperform an i5, and i5 will out perform an i3.
        </p>

        <h2 className="topic">
          Generation Indicator
        </h2>
        <p>
          After the brand and brand modifier comes the processor&#39;s generation indicator. Intel Processor generations are identified in the processor number in most Intel Core processor brands, with the generation being listed after the dash. When a processor has four or five digits, the first one or two digits represent the generation. For example, a processor with the digits 9700 is a 9th Gen processor, while one labeled 12800 is a 12th Gen processor.
        </p>

        <h2 className="topic">
          SKU Numeric Digits
        </h2>
        <p>
          For the majority of Intel processors, the final three digits of the product number are the SKU. SKUs are generally assigned in the order in which processors in that generation and product line are developed. A higher SKU within otherwise-identical processor brands and generations will generally have more features.
        </p>

        <h2 className="topic">
          Product Line Suffix
        </h2>
        <p>
          The SKU suffix is another key indicator of the processor&#39;s capabilities. These remaining differences are indicated by a letter-based product line suffix. For example, within the Intel Core processor series, U indicates a processor that has been designed for power-efficient laptops or 2 in 1s. Meanwhile, XE indicates an “extreme edition” processor for desktops designed for maximum performance.
        </p>

        <table className="intel-suffix-table">
          <caption>
            Desktop
          </caption>
          <tbody>
            <tr>
              <th>K</th>
              <td>High performance, unlocked</td>
            </tr>
            <tr>
              <th>F</th>
              <td>Requires discrete graphics</td>
            </tr>
            <tr>
              <th>S</th>
              <td>Special edition</td>
            </tr>
            <tr>
              <th>T</th>
              <td>Power-optimized lifestyle</td>
            </tr>
            <tr>
              <th>X/XE</th>
              <td>Highest performance, unlocked</td>
            </tr>
          </tbody>
        </table>

        <table className="intel-suffix-table">
          <caption>
            Laptop
          </caption>
          <tbody>
            <tr>
              <th>HX</th>
              <td>High performance, all SKUs unlocked</td>
            </tr>
            <tr>
              <th>HK</th>
              <td>High performance, unlocked</td>
            </tr>
            <tr>
              <th>H</th>
              <td>High performance</td>
            </tr>
            <tr>
              <th>P</th>
              <td>Performance for thin &amp; light</td>
            </tr>
            <tr>
              <th>U</th>
              <td>Power efficient</td>
            </tr>
            <tr>
              <th>Y</th>
              <td>Extremely low-power efficient</td>
            </tr>
            <tr>
              <th>G1-G7</th>
              <td>Graphics level (processors with newer integrated graphics technology)</td>
            </tr>
          </tbody>
        </table>

        <table className="intel-suffix-table">
          <caption>
            Embedded
          </caption>
          <tbody>
            <tr>
              <th>E</th>
              <td>Embedded</td>
            </tr>
            <tr>
              <th>UE</th>
              <td>Power efficient</td>
            </tr>
            <tr>
              <th>HE</th>
              <td>High performance</td>
            </tr>
            <tr>
              <th>UL</th>
              <td>Power efficient, in LGA package</td>
            </tr>
            <tr>
              <th>HL</th>
              <td>High performance, in LGA package</td>
            </tr>
          </tbody>
        </table>

        <h2 className="topic">
          New Name Scheme for Intel
        </h2>

        <p>
          The Intel Core Ultra processor family includes the Intel Core Ultra 9 processor, Intel Core Ultra 7 processor, and Intel Core Ultra 5 processor, indicating a performance tier.
          <br/>
          Intel Core Ultra processors have a SKU number 1 or 2, representing the generation, respectively.
          <br/>
          Intel Core Ultra mobile processors have suffixes H, U, or V.
          <br/>
          Intel Core Ultra desktop processors have suffixes K, F, KF, or T.
        </p>

        <div className="processor-name-photo-container">
          <img className="intel-new-name-image" 
            src={intel_ultra_taxonomy}
            alt="new processor naming scheme"
          />
        </div>
      </section>

      <section aria-label="amd">
        <div className="brand-photo-container">
          <img className="amd-logo-image" 
            src={amd_logo}
            alt="amd logo"
          />
        </div>

        <div className="processor-name-photo-container">
          <img className="amd-name-image" 
            src={amd_processor_taxonomy}
            alt="amd processor naming scheme"
          />
        </div>

        <h2 className="topic">
          Brand and segment
        </h2>
        <p>
          In Ryzen 7 1700X, the “Ryzen 7” part denotes the level of the processor in AMD&#39;s hierarchy, which is kind of similar to Intel&#39;s (i3, i5, and i7). The “7” puts the chip around the top of the lineup, which is divided into four different levels  Ryzen 3, Ryzen 5, Ryzen 7, and Ryzen 9.
        </p> 

        <h2 className="topic">
          Generation
        </h2>
        <p>
          The “1” indicates the generation, which in this case is the first generation.
        </p>

        <h2 className="topic">
          Performance level
        </h2>
        <p>
          The following “7” situates the chip in a relative sense versus other first-generation Ryzen 7 CPUs. So, a 1800X will be more performant than a 1700X.
        </p>

        <h2 className="topic">
          Model Number 
        </h2>
        <p>
          The last two digits are simply differentiators, which almost always are “00” or a step-up multiple of 5 or 10 if the preceding number isn&#39;t enough characterization. AMD uses this method to differentiate its PRO lineup from its mainstream chips. An example being the Ryzen 7 PRO 5875U, where the “5” usually indicates an ultra-low-power mobile-class processor.
        </p>

        <h2 className="topic">
          Power suffix
        </h2>
        <p>
          Finally the letters tell you what power class the mobile chips belong to. For AMD Ryzen chips, U stands for ultra portable (15-28W), H is for high-power mobile (35-45W), and the HX denotes high-performance overclockable mobile chips (55W) with the highest power requirements.
          The H-class CPUs in the Ryzen lineup are meant for mainstream power notebooks, gaming laptops, and workstations, usually paired with discrete graphics. The U-class CPUs are meant for lightweight laptops, usually relying on on-chip graphics.
        </p>

        <h2 className="topic">
          New Name Scheme for AMD
        </h2>
        <p>
          The new name scheme will be used to demarcate its new Zen 4 based Ryzen 7000 series mobile processors from 2023.
        </p>

        <div className="processor-name-photo-container">
          <img className="amd-new-name-image" 
            src={amd_mobile_taxonomy}
            alt="new amd mobile processors naming scheme"
          />
        </div>
      </section>
    </>
  )
}

export default CpuHTML;