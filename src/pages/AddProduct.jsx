import { useState } from "react"

const UserInfo=()=>{
    return (
        <>
        <h1 className='text-center mt-5 mb-5 text-secondary fs-3'>Order a product here</h1>
        <form className="border mb-5">
            <legend className="text-dark-emphasis text-center">User Information</legend>
            <div className="w-50 ms-3 mb-3">
                <label htmlFor="id" className="form-label">ID</label>
            <input type="text" className="form-control" id="id" name="id"/>
            </div>
            <div className="w-50 ms-3 mb-3">
                <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="uname" name="uname"/>
            </div>
            <div className="w-50 ms-3 mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com"/>
            </div>
            <div className="w-50 ms-3 mb-3">
                <label htmlFor="name" className="form-label"> Company name</label>
            <input type="text" className="form-control" id="companyName" name="companyName"/>
            </div>
        </form>
        </>
    )
}

const AddressInfo=()=>{
    return (
        <>
        <form className="border mb-5">
        <legend className="text-center text-dark-emphasis mb-5 mt-3">Address Information</legend>
        <div className="w-50 ms-3 mb-3">
            <select name="country" className="form-select" id="country" defaultValue="Lebanon">
                <option value="lebanon">Lebanon</option>
                <option value="USA">USA</option>
                <option value="UAE">UAE</option>
                <option value="china">China</option>
                <option value="Japan">Japan</option>
            </select>
        </div>
        <div className="w-50 ms-3 mb-4">
            <select name="district" className="form-select" id="district" defaultValue="Aley">
                <option value="aley">Aley</option>
                <option value="beirut">Beirut</option>
                <option value="washington">Washington</option>
                <option value="new-york">New York</option>
                <option value="bejing">Bejing</option>
                <option value="tokyo">Tokyo</option>
            </select>
        </div>
            <div className="w-50 ms-3 mb-3">
            <label htmlFor="location" className="form-label">Street/Building location</label>
            <input type="text" className="form-control" id="location" name="location"/>
        </div>
        </form>
        </>
    )
}

const ProductInfo=()=>{
    const [showModal,setShowModal]=useState(false);
    const [error,setError]=useState("");
    const [info,setInfo]=useState({
        id:'',
        pname:'',
        qty:'',
        description:'',
        supplier:'',
    });
    const resetForm=()=>{
        setInfo({
            id:'',
        pname:'',
        qty:'',
        description:'',
        supplier:''
        })
    }
    const closeModal=()=>{
        setShowModal(false);
    }
    const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!info.id || !info.pname || !info.description || !info.supplier || !info.qty){
            setError("Please fill all fields");
            return;
        }
        if(Number(info.qty)<=0){
            setError("Quantity should be greater than 0");
            return;
        }
        
        setError("");
        setShowModal(true);
        resetForm();
    }
    return (
        <>
        <form className="border mb-5" onSubmit={handleSubmit}>
        <legend className="text-dark-emphasis text-center">Product Information</legend>
        <div className="w-50 ms-3 mb-3">
            <label htmlFor="id" className="form-label">Product ID</label>
            <input type="text" className="form-control" id="id" name="id" onChange={handleChange} value={info.id}/>
        </div>
        <div className="w-50 ms-3 mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="pname" name="pname" onChange={handleChange} value={info.pname}/>
        </div>
        <div className="ms-3 mb-3" style={{width:"10%"}}>
            <label htmlFor="qty" className="form-label">Quantity</label>
            <input type="number" className="form-control" name="qty" id="qty" onChange={handleChange} value={info.qty}/>
        </div>
        <div className="form-floating mb-3">
  <textarea className="form-control" placeholder="Describe the product"
  id="floatingTextarea2" style={{height:"10px",width:"40%"}} onChange={handleChange} name="description" value={info.description}></textarea>
  <label htmlFor="floatingTextarea2">Description</label>
</div>
        <div className="w-50 ms-3 mb-3">
            <label htmlFor="name" className="form-label">Supplier Name</label>
            <input type="text" className="form-control" name="supplier" id="name" onChange={handleChange} value={info.supplier}/>
        </div>
        <div className="w-50 ms-3 mb-3">
  <label htmlFor="image" className="form-label">
    Product Image
  </label>
  <input
    type="file"
    className="form-control"
    id="image"
    name="image"
  />
</div>
        <button className=" m-4 btn btn-primary bottom-0 end-0" type="submit">Submit</button>
        <p style={{color:"red"}}>{error}</p>
    </form>
    {showModal && (
  <div className="modal d-block" tabIndex="-1">
    <div className="modal-dialog">
      <div className="modal-content">

        <div className="modal-header">
          <h5 className="modal-title">Success</h5>
          <button
            type="button"
            className="btn-close"
            onClick={closeModal}
          />
        </div>

        <div className="modal-body">
          <p>Product added successfully!</p>
        </div>

        <div className="modal-footer">
          <button className="btn btn-primary" onClick={closeModal}>
            OK
          </button>
        </div>

      </div>
    </div>
  </div>
)}
    </>
    )
}

const AddProduct=()=>{
    return (
        <>
        <UserInfo/>
        <AddressInfo/>
        <ProductInfo/>
        </>
    )
}

export default AddProduct;