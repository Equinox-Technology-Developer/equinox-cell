import Navbar from '@/components/Navbar/page';
import Footer from '@/components/Footer/page';

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
