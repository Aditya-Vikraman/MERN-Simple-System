function DisplayHTML () {
  return (
    <>
      <h1 className="title">
        Display
      </h1>

      <h2 className="topic">
        Panel Type
      </h2>
      <p>
        Most common computer screens are of two types IPS LCD display and LED display. IPS panels are powered by a backlight, so they produce brighter images. The image quality of IPS panels is better compared to LED. However, IPS panel consume more power, generate heat and have lower contrast ratio.<br/>
        LED panels have high contrast ratio and refresh rates.
      </p>

      <h2 className="topic">
        Screen Size
      </h2>
      <p>
        For gaming laptops it is better to have a large screen of 16 inches (measured diagonaly) or higher. Else you can opt for a smaller size for portability.<br/>
        For desktop users, ideal screen size should be around 24 - 34 inches.
      </p>

      <h2 className="topic">
        Resolution
      </h2>
      <p>
        Screen resolution refers to the number of pixels and density. Higher the resolution, greater is the image quality and detail.<br/>
        Higher resolution screens are more expensive. An FHD screen should be ideal for gaming.<br/>
        Resolution &ne; Physical screen size<br/>
        On a smaller screen (like a 12-inch laptop), 720p looks relatively sharp due higher pixel density, but on a larger physical screen (like a 32-inch TV), the pixel density drops significantly, making individual pixels more visible.<br/> 
      </p>

      <table className="display-table">
        <tbody>
          <tr>
            <th>Resolution</th>
            <th>Pixel</th>
            <th>Screen Size (inch)</th>
          </tr>
          <tr>
            <th>720P (HD)</th>
            <td>1280 &times; 720</td>
            <td>11 &ndash; 16</td>
          </tr>
          <tr>
            <th>1080P (FHD)</th>
            <td>1920 &times; 1080</td>
            <td>22 &ndash; 27</td>
          </tr>
          <tr>
            <th>2K (QHD)</th>
            <td>2560 &times; 1440</td>
            <td>27 &ndash; 32</td>
          </tr>
          <tr>
            <th>4K (UHD)</th>
            <td>3840 &times; 2160</td>
            <td>27 +</td>
          </tr>
        </tbody>
      </table>

      <h2 className="topic">
        Refresh Rate
      </h2>
      <p>
        The refresh rate refers to how many times per second the display is able to draw a new image. This is measured in Hertz (Hz). For example, if your display has a refresh rate of 60 Hz, it is updating the image 60 times per second. The time between these updates is measured in milliseconds (ms), which should be around 1 - 0.5 ms for a good screen.<br/>
        For gaming it is ideal to have 144 Hz refresh rate.
      </p>
    </>
  )
};

export default DisplayHTML;