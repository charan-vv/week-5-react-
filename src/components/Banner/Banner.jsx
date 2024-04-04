import React from 'react';
import "./Banner.scss";
import myImage from '../../assets/image/Group.svg';
import Button from '../Button/Button';
import Cards from "../Cards/Cards";
import Cardimg from '../../assets/image/card.svg';
import myCard from '../../assets/image/card2.svg';
import myCardimg from '../../assets/image/card3.svg';
import Counter from '../Counter/Counter';

function Banner(){

return(
    <>
    <div className=" container banner mt-5">
        <div className="row ">
            <div className="col-4 align-self-end ">
                <h2>
                    Introduce Your Product Quickly & Effectively
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium 
                    ducimus labore nisi laboriosam voluptatum consequuntur corporis consequatur
                     eum adipisci. Tenetur earum consequatur iusto libero officiis fugit amet 
                     iste esse?
                </p>
                <div className='d-flex justify-content-between'>
                <Button text="Purchase Now" backgroundColor="blue" color="white" border="none" />
                <Button text="Buy Now" backgroundColor="pink" color="blue"border="none" />
                </div>
            </div>
            <div className="col-8 ">
            <img src={myImage} alt="My Image" width={450} height={370}/>
            </div>
            
        </div>
    </div>
    <div className="container mt-5">
        <div className="row">
        <div className="col-4">
            <Cards 
                src={Cardimg} width={370} height={196}
                title="Card 1"
                content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi animi ex vitae
                consequatur iusto, blanditiis vel illum nobis sed impedit nulla iste repudiandae vero,
                sequi officia exercitationem sapiente dicta? Porro."
                />
                <Counter 
                primarytext="Add" 
                secondarytext="Remove" />
                
            </div>
            <div className="col-4">
            <Cards
                src={myCardimg} width={370} height={196}
                title="Card 2"
                content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi animi ex vitae
                consequatur iusto, blanditiis vel illum nobis sed impedit nulla iste repudiandae vero,
                sequi officia exercitationem sapiente dicta? Porro."
                />
                 <Counter 
                primarytext="Add" 
                primarybackgroundColor="blue"
                primaryColor ="white" 
                secondarytext="Remove" 
                secondarybackgroundColor="blue"
                secondaryColor ="white" 
                 border="none"/>
            </div>
            <div className="col-4">
            <Cards
                src={myCard} width={370} height={196}
                title="Card 3"
                content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi animi ex vitae
                consequatur iusto, blanditiis vel illum nobis sed impedit nulla iste repudiandae vero,
                sequi officia exercitationem sapiente dicta? Porro."
                />
                 <Counter 
                primarytext="Add" 
                primarybackgroundColor="blue"
                primaryColor ="white" 
                secondarytext="Remove" 
                secondarybackgroundColor="blue"
                secondaryColor ="white" 
                 border="none"/>
            </div>
        </div>
    </div>
    </>
)
}

export default Banner;
