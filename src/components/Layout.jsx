import Footer from "./Footer";
import Header from "./Header";

function Layout({childern})
{
    return(
      <div>
        <Header/>
        <main style={{ padding: "20px" }}>{childern}</main>
        <Footer/>
      </div>
    )
}

export default Layout;