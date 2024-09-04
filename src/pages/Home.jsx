import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import FormUser from "../components/FormUser";

export const Home = () => {
    return (
        <div>
            <Header />
            <h1>Page Home</h1>
            <FormUser />
            <Footer />
        </div>
    )
}