import NavigationBar from "../components/Navbar";

 import './admin.css'
import SendSms from "../components/admin/SendSms";
import AllParents from "../components/admin/AllParents";
const Admin = () => {
 
  return (
    <div>
      <NavigationBar />
      <div className="d-sm-flex w-100 " style={{minHeight:'90vh'}}>
        <SendSms/>
        <div className="bg-secondary mt-5 mx-2" style={{ width: "1px" }}></div>
        <AllParents/>
       
      </div>
    </div>
  );
};

export default Admin;
