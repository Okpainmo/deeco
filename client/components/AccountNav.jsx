import Image from 'next/image';
import ProfileIcon from '../assets/images/dpic-17.png';
import ProductImage from '../assets/images/dpic-16.png';
import Payoutimage from '../assets/images/dpic-15.png';
import PurchaseImage from '../assets/images/dpic-14.png';
import SalesImage from '../assets/images/dpic-13.png';

function AccountNav() {
  return (
    <nav className="w-full items-center shadow-xl bg-white rounded-md">
      <ul className="flex flex-col  text-xs">
        <li className="flex gap-6 items-center border-b hover:bg-slate-50 px-4 py-3">
          <Image src={ProfileIcon} alt="ProfileIcon" className="object-cover block h-4 w-4" />
          <a href="#">My profile</a>
        </li>
        <li className="flex gap-6 items-center py-3 px-4 hover:bg-slate-50">
          <Image src={ProductImage} alt="ProductImage" className="object-cover block h-4 w-4" />
          <a href="#">Products</a>
        </li>
        <li className="flex gap-6 items-center py-3 px-4 hover:bg-slate-50">
          <Image src={Payoutimage} alt="Payoutimage" className="object-cover block h-4 w-4" />
          <a href="#">Payout</a>
        </li>
        <li className="flex gap-6 items-center py-3 px-4 hover:bg-slate-50">
          <Image src={PurchaseImage} alt="PurchaseImage" className="object-cover block h-4 w-4" />
          <a href="#">My purchase</a>
        </li>
        <li className="flex gap-6 items-center py-3 px-4 hover:bg-slate-50 border-b">
          <Image src={SalesImage} alt="SalesImage" className="object-cover block h-4 w-4" />
          <a href="#">My sale</a>
        </li>
      </ul>
      <li className="text-xs flex gap-6 items-center justify-center py-2">
        <a href="#">Logout</a>
      </li>
    </nav>
  );
}
export default AccountNav;
