function ConnectivityHTML () {
  return (
    <>
      <p className="topic">
        Wi&ndash;Fi &amp; Bluetooth
      </p>
      <p>
        Laptop motherboards come with a built&ndash;in Wi&ndash;Fi card which also conatins bluetooth.<br/>
        Desktop motherboards do not all come with built&ndash;in Wi&ndash;Fi card. But, most manufacturers provide Wi&ndash;Fi variants of certain motherboards at an extra cost.<br/>
        Desktop motherboards always have at least one built&ndash;in Ethernet port for connecting to your network or modem. Some high&ndash;end motherboards may also have a 10G Ethernet card for cutting&ndash;edge network speeds.<br/>
        The latest Wi&ndash;Fi 6 Wireless cards have a max transfer speed of 2.4 Gbps, and a 10G card can achieve 10 Gbps transfer speeds.<br/>
        If your motherboard does not feature Bluetooth or a Wi&ndash;Fi card, you can easily install one by getting a simple PCIe Wi&ndash;Fi expansion card.
      </p>

      <p className="topic">
        USB 4.0 &amp; Thunderbolt 4
      </p>
      <p>
        A USB port are most common type of connectors provided on a motherboard.<br/>
        The latest is the USB 4.0 Type&ndash;c, where c refers to the form factor (oval). USB 3.3 is also type&ndash;c.
        The newer versions offer higher data  transfer rates.<br/>
        USB 3.2 = 1 &ndash; 2.4 GB/s<br/>
        USB 4.0 = 2.4 &ndash; 4.8 GB/s<br/>
        The thunderbolt 4 port is same as that of USB 4.0,  but it does a bunch more: It can carry a video signal using the DisplayPort protocol, charge connected devices, and allow for data transfers at speeds beyond what simple USB can manage.<br/>
        Thunderbolt 4 = 4.8 GB/s
      </p>

      <p className="topic">
        HDMI and Display Port
      </p>
      <p>
        DisplayPort 1.4 is generally better than HDMI 2.0, HDMI 2.1 technically beats DisplayPort 1.4, and DisplayPort 2.1 trumps HDMI 2.1.<br/> 
        The problem is, you'll need support for the desired standard from both your graphics card and your display for things to work right.<br/>
        DisplayPort 1.2 or higher, as well as HDMI 2.0 or higher should work fine. The only caveat is that sometimes HDMI connections on a monitor will default to a limited RGB (Red Green Blue) color range, but you can correct that in the AMD or Nvidia display options.<br/>
        Although displays with HDMI port are more readily available.
      </p>
    </>
  )
};

export default ConnectivityHTML;