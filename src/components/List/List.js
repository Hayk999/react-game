import React from 'react'

function List(props) {
    const { data } = props

    return <div className={'flex-container'}>
          {
              data.map((item, index) =>
                <div 
                    style={item.success ? { backgroundColor: 'green' } : { backgroundColor: 'red'}} 
                    key = {index}>
                    <span>{item.city}</span>
                    <br/>
                    <span>{item.inputValue}</span>
                    <br/>
                    <span>was {item.currectValue}</span>
                </div>
            )
          }
    </div>
}

export default List