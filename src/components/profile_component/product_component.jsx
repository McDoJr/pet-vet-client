import '../../components_css/profile_components_css/product_component.css';

//CARD BUTTONS 
import cart from '../../assets/icons/cart.svg';
import magnify from '../../assets/icons/magnify.svg';
import star from '../../assets/icons/star.svg'

//IMPORT JSON 
import product_landing from '../../json_render/product_landing.json';

export const ProductDisplay = () => {
    return(
        <>
            <div className="product-comp-wrp mx-auto">
                <div className="comp-header mx-auto">
                    <span className="prod-header span-block"> Recommended Products </span>
                    <span className="sub-prod-header span-block"> Check out our top-quality pet products </span>
                </div>
                <div className="prod-imgs-wrp">
                    <ProductImages/>
                </div>
            </div>        
        </>
    );

}

const ProductImages = () => {

    const product_map = product_landing.landing_products.map((product) =>
        <div className="con-wrap">
            <div className="crd-wrap">
                <div className="crd-header" key={product.key}>
                    <div className="prod-tag-con">
                    { product.tag_status === false ? <span className="prod-tag-2 span-block">  </span> : <span className="prod-tag span-block"> {product.product_tag} </span>}
                    </div>
                </div>
                <div className="img-container" key={product.key}>
                    <img className="prod-photo" src={ product.img_name } alt="" />
                </div>
                <div className="prod-details flx-col" key={product.key}>
                        <span className="prod-name mg-4-px span-block" > { product.product_name } </span>
                        <span className="prod-price mg-4-px "> { product.product_price } </span>
                        <div className="btns-lineup mg-4-px ">
                            <img className='cart-btn' src={ cart } alt="Cart Button" />
                            <img className='btn-stndrd btn-pdding' src={ star } alt="Star Button" />
                            <img className='btn-stndrd btn-pdding' src={ magnify } alt="Magnify Button"/>
                        </div>
                </div>
            </div>
        </div>
    );

    return(
            <div className="cont-prop">
                { product_map }
            </div>
    );
}