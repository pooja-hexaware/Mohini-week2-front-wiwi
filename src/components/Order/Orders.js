import React,{ useState, useEffect } from 'react'
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'


class Orders extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  openBox = () => {
    this.setState({
      isOpen: true
    })
  }

  closeBox = () => {
    this.setState({
      isOpen: false
    })
  }




  render() {
    return (
      <div>
        <button onClick={this.openBox}>+ Add </button>

        {this.state.isOpen && (
          <>
            <ReactDialogBox
              closeBox={this.closeBox}
              modalWidth='60%'
              headerBackgroundColor='red'
              headerTextColor='white'
              headerHeight='65'
              closeButtonColor='white'
              bodyBackgroundColor='white'
              bodyTextColor='black'
              bodyHeight='200px'
              headerText='Oreders'
            >
              <div>
                <p>Loaded Veggies</p>
              <p>Total Amount</p>
             
              <button >Order </button>
              </div>
            </ReactDialogBox>
          </>
        )}
      </div>
    )
  }
}

export default Orders