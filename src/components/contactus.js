import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

class ContactUs extends React.Component {
  constructor(props) {
    super(props)
    this.gotoWa = this.gotoWa.bind(this);
  }

  gotoWa() {
    window.open("https://api.whatsapp.com/send?phone=6282220131088&text=Assalamualaikum%2C%20Saya%20ingin%20bertanya%20mengenai%20Baladz", "_blank");
  }

  render() {
    return (
      <div onClick={this.gotoWa} className="contactUs">Hubungi Kami <img width="25px" style={{ verticalAlign: "bottom" }} src="assets/wa-min.png"></img></div>
    )
  }
}

export default ContactUs