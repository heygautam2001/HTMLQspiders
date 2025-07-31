import men1 from "./Men1.avif";
import men2 from "./Men2.avif";
import men3 from "./Men3.avif";
import men4 from "./Men5.avif";
import men5 from "./Men4.avif";

import bride1 from "./Bride1.avif"
import bride2 from "./Bride2.avif"
import bride3 from "./Bride3.avif"
import bride4 from "./Bride4.avif"
import bride5 from "./Bride5.avif"

import kid1 from "./kid1.avif"
import kid2 from "./kid2.avif"
import kid3 from "./kid3.avif"
import kid4 from "./kid4.avif"
import kid5 from "./kid5.avif"

import watch1 from "./watch1.avif"
import watch2 from "./watch2.avif"
import watch3 from "./watch3.avif"
import watch4 from "./watch4.avif"
import watch5 from "./watch5.avif"

import footwear1 from "./footwear1.avif"
import footwear2 from "./footwear2.avif"
import footwear3 from "./footwear3.avif"
import footwear4 from "./footwear4.avif"
import footwear5 from "./footwear5.avif"




const asset_data = {
  meeshotask : {
  mens_data : [
    {title:"smart Tshirt" , image : men1 , price : 250 , ratings:4.0},
    {title:"smart Tshirt" , image : men2 , price : 299 , ratings:4.2},
    {title:"smart Tshirt" , image : men3 , price : 399 , ratings:4.3},
    {title:"smart Tshirt" , image : men4 , price : 499 , ratings:4.4},
    {title:"smart Tshirt" , image : men5 , price : 599 , ratings:4.5},
  ],
  womens_data:[
    {title:"women lehnga" , image : bride1 , price : 999 , ratings:4.0},
    {title:"women lehnga" , image : bride2 , price : 1199 , ratings:4.2},
    {title:"women lehnga" , image : bride3 , price : 1299 , ratings:4.3},
    {title:"women lehnga" , image : bride4 , price : 1399 , ratings:4.4},
    {title:"women lehnga" , image : bride5 , price : 1499 , ratings:4.5},
  ],
  kids_data:[
    {title:"kid set" , image : kid1 , price : 99 , ratings:4.0},
    {title:"kid set" , image : kid2 , price : 199 , ratings:4.2},
    {title:"kid set" , image : kid3 , price : 299 , ratings:4.3},
    {title:"kid set" , image : kid4 , price : 399 , ratings:4.4},
    {title:"kid set" , image : kid5 , price : 499 , ratings:4.5},

  ],
  watch_data:[
    {title:"watches" , image : watch1 , price : 999 , ratings:4.0},
    {title:"watches" , image : watch2 , price : 199 , ratings:4.2},
    {title:"watches" , image : watch3 , price : 549 , ratings:4.3},
    {title:"watches" , image : watch4 , price : 249 , ratings:4.4},
    {title:"watches" , image : watch5 , price : 650 , ratings:4.5},
  ],
  footwear:[
    {title:"footwear sliper/shoes" , image : footwear1 , price : 999 , ratings:4.0},
    {title:"footwear sliper/shoes" , image : footwear2 , price : 199 , ratings:4.2},
    {title:"footwear sliper/shoes" , image : footwear3 , price : 549 , ratings:4.3},
    {title:"footwear sliper/shoes" , image : footwear4 , price : 249 , ratings:4.4},
    {title:"footwear sliper/shoes" , image : footwear5 , price : 650 , ratings:4.5},
  ]
} , 
fake_store_api:{},
json_placeholder_data:{
  users:[], // https://jsonplaceholder.typicode.com/users
  todos:[],
},
};

export default asset_data;
