function DisplayHTML () {
  return (
    <>
      <p className="topic">
        Panel Type
      </p>
      <p>
        Most common computer screens are of two types IPS LCD display and LED display. IPS panels are powered by a backlight, so they produce brighter images. The image quality of IPS panels is better compared to LED. However, IPS panel consume more power, generate heat and have lower contrast ratio.<br/>
        LED panels have high contrast ratio and refresh rates.
      </p>
      <p className="topic">
        Screen Size
      </p>
      <p>
        For gaming laptops it is better to have a large screen of 16 inches (measured diagonaly) or higher. Else you can opt for a smaller size for portability.<br/>
        For desktop users, ideal screen size should be around 24 - 34 inches.
      </p>
      <p className="topic">
        Resolution
      </p>
      <p>
        Screen resolution refers to the number of pixels and density. Higher the resolution, greater is the image quality and detail.<br/>
        Higher resolution screens are more expensive. An FHD screen should be ideal for gaming.<br/>
        720P = 1280 	&times; 720 - HD <br/>
        1080P = 1920 	&times; 1080 - FHD <br/>
        2K = 2560 	&times; 1440 - QHD <br/>
        4K = 3840 	&times; 2160 - 4K<br/>
      </p>
      <p className="topic">
        Refresh Rate
      </p>
      <p>
        The refresh rate refers to how many times per second the display is able to draw a new image. This is measured in Hertz (Hz). For example, if your display has a refresh rate of 60 Hz, it is updating the image 60 times per second. The time between these updates is measured in milliseconds (ms), which should be around 1 - 0.5 ms for a good screen.<br/>
      For gaming it is ideal to have 144 Hz refresh rate.
      </p>
    </>
  )
};

export default DisplayHTML;