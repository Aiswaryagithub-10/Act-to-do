import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom";

function Landing() {
    const location = useLocation();
    const user = location.state?.user || "Guest";  
    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                {/* Welcome Message */}
                <h1>Welcome, {user}!</h1>
                
                {/* Header */}
                <Header />
                
                {/* Cards */}
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
                    <Card bgcolor={"#FD6663"} title={"October 25"} subtitle={"14:01:01"} />
                    <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />
                </div>
                
                {/* Todo Container */}
                <TodoContainer />
            </div>
        </div>
    );
}

export default Landing;
