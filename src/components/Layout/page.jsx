import Navbar from '@/components/Navbar/page';
import Topbar from '@/components/Topbar/page';
import Footer from '@/components/Footer/page';

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <Topbar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
