import React from "react"

class ContactUs extends React.Component {
  constructor(props) {
    super(props)
    this.gotoWa = this.gotoWa.bind(this);
  }

  gotoWa() {
    var message = encodeURI(this.props.message);
    window.open("https://api.whatsapp.com/send?phone=" + this.props.hp + "&text=" + message, "_blank");
  }

  render() {
    return (
      <div onClick={this.gotoWa} className="contactUs">Hubungi Kami <img alt="wa" width="25px" style={{ verticalAlign: "bottom" }} src="assets/wa-min.png"></img></div>
    )
  }
}

export default ContactUs