import React, {useState} from 'react';
import Products from '../Products/Products';
import {productsData} from '../../data';
import './Filters.css';

const Filters = () => {

    const [products, setProducts] = useState(productsData.productDetails);
    const [sizeFilters, setSizeFilters] = useState([]);

    const clearFilters = () =>{
        setProducts(productsData.productDetails);
        document.getElementById("s").checked = false;
        document.getElementById("m").checked = false;
        document.getElementById("l").checked = false;
        document.getElementById("xl").checked = false;
        document.getElementById("fortCollins").checked = false;
        document.getElementById("freeze").checked = false;
        document.getElementById("amorMente").checked = false;
        document.getElementById("slimShine").checked = false;
        document.getElementById("tripr").checked = false;
        document.getElementById("men").checked = false;
        document.getElementById("women").checked = false;
        document.getElementById("children").checked = false;
        document.getElementById("priceLowToHigh").checked = false;
        document.getElementById("priceHighToLow").checked = false;
    }

    const applyFilters = async(e) =>{
        await setProducts(productsData.productDetails);
        e.preventDefault();
        let arr = [];
        if(document.getElementById("s").checked){
           arr =  arr.concat(products.filter((product)=>{
                return product.size === "S";
            }))
        }
        if(document.getElementById("m").checked){
            arr = arr.concat(products.filter((product)=>{
                return product.size === "M";
            }))
        }
        if(document.getElementById("l").checked){
            arr = arr.concat(products.filter((product)=>{
                return product.size === "L";
            }))
        }
        if(document.getElementById("xl").checked){
            arr = arr.concat(products.filter((product)=>{
                return product.size === "XL";
            }))
        }
        if(document.getElementById("fortCollins").checked){
           arr =  arr.concat(products.filter((product)=>{
                return product.productTitle.includes("Collins");
            }))
        }
        if(document.getElementById("freeze").checked){
           arr =  arr.concat(products.filter((product)=>{
                return product.productTitle.includes("Freeze");
            }))
        }
        if(document.getElementById("amorMente").checked){
           arr =  arr.concat(products.filter((product)=>{
                return product.productTitle.includes("AmorMente");
            }))
        }
        if(document.getElementById("slimShine").checked){
           arr =  arr.concat(products.filter((product)=>{
                return product.productTitle.includes("SLIMSHINE");
            }))
        }
        if(document.getElementById("tripr").checked){
           arr =  arr.concat(products.filter((product)=>{
                return product.productTitle.includes("TRIPR");
            }))
        }
        if(document.getElementById("men").checked){
           arr =  arr.concat(products.filter((product)=>{
                return product.idealFor.includes("men");
            }))
        }
        if(document.getElementById("women").checked){
           arr =  arr.concat(products.filter((product)=>{
                return product.idealFor.includes("women");
            }))
        }
        if(document.getElementById("children").checked){
           arr =  arr.concat(products.filter((product)=>{
                return product.idealFor.includes("children");
            }))
        }
        if(document.getElementById("priceLowToHigh").checked){
           if(arr.length !== 0){
            arr.sort(function(a,b){
                  return a - b;
                  });
           } 
           else{
               arr = products.sort(function(a,b){
                   return a -  b;
                   });
           }
        }

        if(document.getElementById("priceHighToLow").checked){
           if(arr.length !== 0){
            arr.sort(function(a,b){
                  return b - a;
                  });
           } 
           else{
               arr = products.sort(function(a,b){
                   return b -  a;
                   });
           }
        }

        setProducts([... new Set(arr)])
        
    }

    return (
        <div>
        <div className="filtersSection">
            <h1 className="sectionHeader">Filters</h1>
            <hr />

            <form onSubmit={applyFilters}>

            {/* Price Filter */}
            <div>
            <p className="priceSectionHeading">Price</p>
            <div>
            <input className="inputField" type="radio" name="price" id="priceLowToHigh" value="priceLowToHigh" />
            <label className="priceSectionFieldLabel" htmlFor="priceLowToHigh">Low to High</label>
            </div>
            <div>
            <input className="inputField"  type="radio" name="price" id="priceHighToLow" value="priceHighToLow"/>
            <label className="priceSectionFieldLabel" htmlFor="priceHighToLow">High to Low</label>
            </div>
            </div>

            {/* Size Filter */}
            <div>
            <p className="sizeSectionHeading">Size</p>
            <div>
            <input className="inputField" type="checkbox" name="size1" id="s" value="s"/>
            <label className="sizeSectionFieldLabel" htmlFor="s">S</label>
            </div>
            <div>
            <input className="inputField"  type="checkbox" name="size2" id="m" value="m"/>
            <label className="sizeSectionFieldLabel" htmlFor="m">M</label>
            </div>
             <div>
            <input className="inputField" type="checkbox" name="size3" id="l" value="l"/>
            <label className="sizeSectionFieldLabel" htmlFor="l">L</label>
            </div>
             <div>
            <input className="inputField" type="checkbox" name="size4" id="xl" value="xl"/>
            <label className="sizeSectionFieldLabel" htmlFor="xl">XL</label>
            </div>
            </div>

            {/* Brand Filter */}
            <div>
            <p className="brandSectionHeading">Brand</p>
            <div>
            <input className="inputField"  type="checkbox" name="brand1" id="fortCollins" value="fortCollins"/>
            <label className="sizeSectionFieldLabel" htmlFor="fortCollins">Fort Collins</label>
            </div>
            <div>
            <input className="inputField"  type="checkbox" name="brand2" id="freeze" value="freeze"/>
            <label className="sizeSectionFieldLabel" htmlFor="freeze">Freeze</label>
            </div>
             <div>
            <input className="inputField"  type="checkbox" name="brand3" id="amorMente" value="amorMente"/>
            <label className="sizeSectionFieldLabel" htmlFor="amorMente">AmorMente</label>
            </div>
             <div>
            <input className="inputField"  type="checkbox" name="brand4" id="slimShine" value="slimShine"/>
            <label className="sizeSectionFieldLabel" htmlFor="slimShine">Slim Shine</label>
            </div>
             <div>
            <input className="inputField"  type="checkbox" name="brand5" id="tripr" value="tripr"/>
            <label className="sizeSectionFieldLabel" htmlFor="tripr">Tripr</label>
            </div>
            </div>

            {/* Ideal for Filter */}
            <div>
            <p className="idealForSectionHeading">Ideal For</p>
            <div>
            <input className="inputField"  type="checkbox" name="for1" id="men" value="men"/>
            <label className="sizeSectionFieldLabel" htmlFor="men">Men</label>
            </div>
            <div>
            <input className="inputField"  type="checkbox" name="for2" id="women" value="women"/>
            <label className="sizeSectionFieldLabel" htmlFor="women">Women</label>
            </div>
             <div>
            <input className="inputField"  type="checkbox" name="for3" id="children" value="children"/>
            <label className="sizeSectionFieldLabel" htmlFor="children">Children</label>
            </div>
            </div>

        <div>
        <button className="clearFiltersButton">Apply Filters</button>
        </div>
    

        </form>

        <button className="clearFiltersButton" onClick={clearFilters}>Clear Filters</button>

        </div>
        <Products products={products}/>
        </div>
    )
}

export default Filters
