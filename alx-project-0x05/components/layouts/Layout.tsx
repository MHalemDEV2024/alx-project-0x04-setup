import { LayoutProps } from '../../interface';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {/* Add padding top here to avoid content hiding behind fixed header */}
      <main className="pt-24">  
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
