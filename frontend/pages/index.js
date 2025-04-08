import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to the E-commerce Site</h1>
        <p>Browse our products and shop as a guest!</p>
      </main>
      <Footer />
    </div>
  );
}