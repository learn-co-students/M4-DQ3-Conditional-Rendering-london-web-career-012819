import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    selected: 'profile'
  }

  changeDisplay = display => {
    this.setState({
      selected: display
    })
  }

  render() {

    let details 

    switch (this.state.selected){
      case "profile":
        details = <Profile />
        break;
      case "photo":
        details = <Photos />
        break;
      case "cocktail":
        details = <Cocktails />
        break;
      case "pokemon":
        details = <Pokemon />
        break;
      default:
        details = null
    }
    
    return (
      <div>
        <MenuBar changeDisplay={this.changeDisplay} selected={this.state.selected} />
        {details}
      </div>
    )
  }

}

export default MainBox
