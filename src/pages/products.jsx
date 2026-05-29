import Card from '../components/card'
import '../style/products.css'
import image1 from '../assets/asus-zenbook-14x-laptop-ponder-blue.jpg'
import image2 from '../assets/RZ09-05299ER4-R3U1-2.webp'
import image3 from '../assets/18-Area-51-AA18250-9.webp'
import image4 from '../assets/msi-laptop-katana-b14wgk-016us-i9-14900hx-32gb-ram-1tb-ssd-nvme-nvidia-rtx5070-156-2560-x-1440-165hz-win11-original.webp'
import image5 from '../assets/e64a02d7-b966-41ce-80e1-80271e6ea142-Recoveredxhz-jpg.avif'
import image6 from '../assets/bda1c42137da4db1847dbf264ff89f5c-Original.jpg'
import image7 from '../assets/tv-monitor-samsung-cu8000-monitor.jpg'
import image8 from '../assets/RedmiWatch5.webp'
import image9 from '../assets/luna-pro-smartwatch-179578.webp'
import image10 from '../assets/1-84.webp' 
export const cardObj=[
    {
        name:"Asus Zenbook",
        description:`A premium, ultraportable laptop line that combines sleek design with solid performance.
        Built for professionals, students, and creatives,its lightweight, feature distinctive spun-metal finishes, and have narrow screen bezels defines modern look.`,
        image:image1,
        path:'/ProductDetails1',
        id:'#PRD-101',
        quantity:45,
        supplier:'Macrotronics',
        date:'December 15, 2025'

    },
    {
        name:"Razor Blade 18",
        description:`The ultimate desktop replacement, reengineered for total domination.
        Massive screen, metal build, and uncompromising power — all packed into a surprisingly portable frame.`,
        image:image2,
        path:'/ProductDetails2',
        id:'#PRD-102',
        quantity:20,
        supplier:'Razor',
        date:'April 11, 2025'
    },
    {
        name:"Dell Alienware 18",
        description:`Legendary design meets monstrous performance. 
        Built from the ground up for hardcore gamers and power users who refuse to settle.`,
        image:image3,
        path:'/ProductDetails3',
        id:'#PRD-103',
        quantity:33,
        supplier:'Dell',
        date:'March 26, 2025'
    },
    {
        name:"MSI Katana",
        description:`Sharp looks, sharper performance.
        Engineered for gamers who want battle-ready gear without breaking the bank.`,
        image:image4,
        path:'/ProductDetails4',
        id:'#PRD-104',
        quantity:61,
        supplier:'MSI',
        date:'March 17, 2026'
    },
    {
        name:"Oppo Reno",
        description:`Style meets innovation.
        Designed for creators and trendsetters, the Oppo Reno series turns heads with its sleek, modern look and standout camera design.`,
        image:image5,
        path:'/ProductDetails5',
        id:'#PRD-105',
        quantity:23,
        supplier:'MojiTech',
        date:'December 12, 2025'
    },
    {
        name:"Redmi Note 15",
        description:`Big features, bigger value.
        Built for the everyday user who wants reliability without the flagship price tag.`,
        image:image6,
        path:'/ProductDetails6',
        id:'#PRD-106',
        quantity:30,
        supplier:'MiCare',
        date:'April 10, 2026'
    },
    {
        name:"Samsung 55 CU8000",
        description:`Designed to bring cinema home without the clutter.
        Smart features put all your favorite streaming apps right at your fingertips.`,
        image:image7,
        path:'/ProductDetails7',
        id:'#PRD-107',
        quantity:25,
        supplier:'Samsung',
        date:'September 23, 2025'
    },
    {
        name:"Redmi Watch 5",
        description:`Sleek, lightweight, and built for an active lifestyle.
        Track your steps, monitor your heart, and stay connected with notifications right on your wrist — all without breaking the bank.`,
        image:image8,
        path:'/ProductDetails8',
        id:'#PRD-108',
        quantity:42,
        supplier:'MiCare',
        date:'November 14, 2025'
    },
    {
        name:"Luna Pro Smartwatch",
        description:`Elegance that works as hard as you do.
        Stay connected, track your fitness, and look good doing it — all day, every day.`,
        image:image9,
        path:'/ProductDetails9',
        id:'#PRD-109',
        quantity:10,
        supplier:'The North Time',
        date:'June 9, 2025'
    },
    {
        name:"Tecno Spark 20 pro",
        description:`Capture the moment, stream your favorites, and stay connected
        — all with effortless ease. Fresh. Fast. Fabulous.`,
        image:image10,
        path:'/ProductDetails10',
        id:'#PRD-110',
        quantity:17,
        supplier:'MojiTech',
        date:'January 15, 2026'
    }
]

const Products=()=>{
    return (
        <>
        <div className='bg-secondary bg-gradient'>
        <h1 className='text-center mt-4 text-info'>Check out our products here</h1>
        <div className='row row-cols-1 row-cols-md-4 row-cols-sm-2 g-4 mt-4'>
            {cardObj.map((product,index)=>(
                <div className='col' key={index}>
                    <Card
                    name={product.name}
                    description={product.description}
                    image={product.image}
                    path={product.path}
                    />
                </div>
            ))}
        </div>
        </div>
        </>
    )
}
export default Products;
