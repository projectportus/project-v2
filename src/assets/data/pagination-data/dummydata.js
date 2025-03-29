import dr1 from '@/assets/images/products-list/dr1.svg';
import dr2 from '@/assets/images/products-list/dr2.svg';
import dr3 from '@/assets/images/products-list/dr3.svg';
import dr4 from '@/assets/images/products-list/dr4.svg';

const productsdata = [
 {
     title:"Syltherine",
     desc: "Stylish cafe chair",
     price: "Rp 2.500.000",
     image: dr1,
     offer: '-30%',
     badgeStatus: true,
     discount:true
   },
   {
     title:"Leviosa",
     desc: "Stylish cafe chair",
     price: "Rp 2.500.000",
     image: dr2,
     badgeStatus: false,
     discount:false
   },
   {
     title:"Lolito",
     desc: "Luxury big sofa",
     price: "Rp 7.000.000",
     image: dr3,
     offer: '-50%',
     badgeStatus: true,
     discount:true
   },
   {
     title:"Respira",
     desc: "Outdoor bar table and stool",
     price: "Rp 500.000",
     image: dr4,
     offer: 'New',
     badgeStatus: true,
     discount:false
   },
]

const productsdataExtended = Array.from({ length: 40 }, () => productsdata).flat();


export default productsdataExtended;

