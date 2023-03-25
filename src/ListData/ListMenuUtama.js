import React, { Component } from "react"

class ListMenuUtama extends Component {
    render() {
        return (
            <>
                <h1>
                    <center>Selemat Datang Di Warung Nusantara</center>
                </h1>
                <center>
                    <img src={this.props.linkimg} alt="Masakan Nusantara" width={600} />
                </center>
            </>
        )
    }
}

export default ListMenuUtama