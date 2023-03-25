import React, { Component } from "react"
import ListMakanan from "../ListData/ListMakanan"

class MenuProduct extends Component {
    render() {
        return (
            <div>
                <h3>Daftar Makanan Yang Kami Sediakan</h3>
                <td><ListMakanan linkimg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/></td>
                <td><ListMakanan linkimg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/></td>
                <td><ListMakanan linkimg="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/></td>
                <td><ListMakanan linkimg="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg"/></td>
                <td><ListMakanan linkimg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/></td>
            </div>
        )
    }
}

export default MenuProduct