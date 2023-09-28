import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { connect } from 'react-redux'

function TopHeader(props) {
  return (
    <div>
        <button onClick={props.changeProp}>TopHeader</button>
        {console.log(props.prop)}
    </div>
  )
}

const mapStateToProps = ({reducer1:prop})=>{
    //console.log(prop)
    return {
        prop
    }
}

const mapDispatchToProps = {
    changeProp(){
        return{
            type:"change_prop",
            payload:2
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TopHeader)