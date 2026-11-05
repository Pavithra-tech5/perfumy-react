

import perfume1 from '../assets/images/perfume1.jpg';
import perfume2 from '../assets/images/perfume2.jpeg';
import perfume3 from '../assets/images/perfume3.jpeg';

//prodcut component
function Product() {
  return (
    <div class="product">
      <div class="box">
        <img src={perfume1} alt="perfume1"></img>
        <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, illo.ipsum dolor sit amet
          consectetur, adipisicing elit. Expedita, ipsa?</p>
      </div>

      <div class="box">
        <img src={perfume2} alt="perfume2"></img>
        <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, illo.ipsum dolor sit amet
          consectetur, adipisicing elit. Expedita, ipsa?</p>
      </div>

      <div class="box">
        <img src={perfume3} alt="perfume3"></img>
        <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, illo.ipsum dolor sit amet
          consectetur, adipisicing elit. Expedita, ipsa?</p>
      </div>
    </div>);
}

export default Product