import Image from 'next/image';
import Link from 'next/link';

function OrderCard({
  orderImage,
  orderTitle,
  orderId,
  orderSize,
  orderDate,
  orderLinkUrl,
  orderStatus
}) {
  return (
    <div className="flex items-stretch justify-between w-full p-[1.125rem] border border-[#E0E0E0]">
      <div className="inline-flex items-center gap-6">
        <div className="w-[6.25rem] h-[6.25rem]">
          <Image src={orderImage} alt="order-image" className="object-cover" />
        </div>
        <div className="inline-flex flex-col gap-1">
          <h5 className="text-base font-bold text-[#1E1E1E]">{orderTitle}</h5>
          <p className="text-xs text-[#666666]">
            Order <span>{orderId}</span>
          </p>
          <p className="text-xs text-[#666666]">
            Size (UK): <span>{orderSize}</span>
          </p>
          {orderStatus === 'delivered' ? (
            <p className="inline-flex gap-2 font-bold text-sm text-[#1E1E1E]">
              <span>{orderDate}</span>
              <span className="text-[#D9D9D9]">|</span>
              <span> 2d </span>
            </p>
          ) : (
            <p className="inline-flex gap-2 font-bold text-sm text-[#1E1E1E]">
              <span>on-{orderDate}</span>
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <Link href={orderLinkUrl} className="text-xs text-[#1E1E1E] font-bold underline">
          See details
        </Link>
        {orderStatus === 'delivered' ? (
          <p className="mt-auto text-xs text-white font-bold py-[5px] px-[10px] bg-[#6DBD28]">
            Delivered
          </p>
        ) : (
          <p className="mt-auto text-xs text-white font-bold py-[5px] px-[10px] bg-[#61A5FA]">
            Pending
          </p>
        )}
      </div>
    </div>
  );
}

export default OrderCard;
