import React from 'react'
import { connect } from 'react-redux'

 function SideMenu(props) {
    console.log(props.prop)
  return (
    <div>
        <button>SideMenu-{props.prop.prop}</button>
    </div>
  )
}

const mapStateToProps = ({reducer1:prop})=>{
    //console.log(prop)
    return {
        prop
    }
}

export default connect(mapStateToProps)(SideMenu)
