import React from 'react'; 

class Header extends React.Component{
render (){
    let style = {width: this.props.headerWidth },
    header = []; 

    this.props.data.forEach((category , index) => {
        return header.push(<span className="header" style={style} key={index}>{category.category}</span>)
        
    });
    
    return (
        <div className='headers'>
        {header}
        </div>
    );
}
}

export default Header ; 