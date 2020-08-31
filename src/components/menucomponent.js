import React, {Component} from 'react';
import {Card, CardImgOverlay, CardImg, CardBody, CardText, CardTitle, CardHeader} from 'reactstrap';



class Menu extends Component{
    constructor(props){
        super(props);
        
       
}


    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 mt-5 m-1">
                <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
                      <CardImg width="100%" object src={dish.image} alt={dish.name} />
                  
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                    
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        console.log('render invoked');

        return (
          <div className="container">
            <div className="row">
                  {menu}

            </div>
        
            </div>
        );
    }
}



export default Menu;