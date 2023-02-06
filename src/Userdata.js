import {useState,} from "react";

function Userdata() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phonenumber, setphonenumber] = useState('')
    function handleform(e) {
        e.preventDefault()
        const formdata = { name, email, phonenumber }
        fetch('api/reg', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formdata)
        }).then((res) => { return res.json() }).then((data) => {
            console.log(data)
           
        })
    }

    return ( 
        <>
        <section>
        <div className="container">
            <div className="row">
                <div className="col-md-12"><h2 className="text-center text-primary">Userdata</h2></div>

            </div>

        </div>



        <div className="container">
            <div className="row">
                <div className="col-md-12">   

                    <form onSubmit={(e)=>{handleform(e)}}>
                        <label>name</label>
                        <input type="text" className="form-control"
                        value={name}
                        onChange={(e)=>{setname(e.target.value)}}
                        />
                        <label>email</label>
                        <input type="text" className="form-control"
                        value={email}
                        onChange={(e)=>{setemail(e.target.value)}}
                        />
                         <label>phone Number</label>
                        <input type="text" className="form-control" 
                        value={phonenumber}
                        onChange={(e)=>{setphonenumber(e.target.value)}} />
                        
                        <button className="form-control btn btn-danger mt-2">Submit</button>
                    </form>

                </div>

        </div>

    </div>
    </section>


        </>
     );
}

export default Userdata;