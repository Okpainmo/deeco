import Navbar from './Navbar';
import StickyNavbar from './StickyNavbar';

function NavGroup() {
  return (
    <div className="sticky top-0 left-0 right-0">
      <Navbar />
      <StickyNavbar />
    </div>
  );
}

export default NavGroup;
