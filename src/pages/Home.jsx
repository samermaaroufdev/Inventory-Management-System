import '../style/home.css'

const Section1=()=>{
    return (
        <>
        <section className='sec1'>
        <h1>Inventory Management Solutions</h1>
    <p>
        Welcome to your professional control hub.
        This system is specifically built for administrators to oversee operations, monitor stock levels, and maintain data integrity.
    </p>
        </section>
        </>
    )
}

const Section2=()=>{
    return (
        <>
        <section className='sec2'>
        <div>
        <h3>Product Catalog</h3>
        <p>Access comprehensive lists of all items, categorized for easy navigation.</p>
    </div>
    <div>
        <h3>Stock Control</h3>
        <p>Manage quantities, update prices, and track inventory movements in real-time.</p>
    </div>
    <div>
        <h3>Managerial Insights</h3>
        <p>Generate summaries and view critical alerts about out-of-stock items.</p>
    </div>
        </section>
        </>
    )
}

const Home=()=>{
    return (
        <div>
            <Section1/>
            <Section2/>
        </div>
    )
}

export default Home;