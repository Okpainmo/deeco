import Image from 'next/image';
import Link from 'next/link';

function ThemeCard({
  themeImage,
  themeName,
  themeAuthor,
  themePrice,
  themeType,
  themeDetails,
  themeDate,
  themeUrl
}) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 min-h-[10rem]">
      <div className="md:h-[15.625rem] w-full md:max-w-[27.75rem]">
        <Image src={themeImage} alt="theme_website" className="object-contain" />
      </div>
      <div className="md:grid grid-cols-2 w-full">
        <div className="text-[#666666]">
          <h5 className="font-bold text-xl text-[#333333]">{themeName}</h5>
          <p className="text-lg ">
            by {themeAuthor} in {themeType}
          </p>
          <ul className="text-base list-disc pl-4 py-4">
            {themeDetails?.map((list) => {
              return <li key={list.slice(0, 10)}>{list}</li>;
            })}
          </ul>
        </div>
        <div className="text-[#666666]">
          <p className="text-[#333333] font-semibold text-2xl">${themePrice}</p>
          <p className="text-base">Last updated: {themeDate}</p>
          <div className="mt-5 inline-flex items-center gap-[10px]">
            <Link
              href={themeUrl}
              className="p-[9px] text-center bg-[#EB4899] text-base text-white font-bold w-[9rem] "
            >
              Use theme
            </Link>
            <button type="button" className="p-[9px] bg-[#F0F0F0]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 7.83189L11.4804 7.33266C10.6782 6.56199 9.5943 6 8.4 6C5.96701 6 4 7.80688 4 10.0298C4 11.6564 4.69221 13.123 5.71896 14.4148L5.71897 14.4149C6.74559 15.7066 8.10651 16.8231 9.44364 17.7495L9.01653 18.366L9.44365 17.7495C9.95196 18.1017 10.4491 18.4143 10.89 18.6389C11.3299 18.8629 11.7154 19 12 19C12.2846 19 12.6701 18.8629 13.1099 18.6389L12 7.83189ZM12 7.83189L12.5196 7.33266C13.3218 6.56199 14.4057 6 15.6 6C18.033 6 20 7.80687 20 10.0298C20 11.6564 19.3078 13.123 18.2811 14.4148M12 7.83189L18.2811 14.4148M18.2811 14.4148C17.2544 15.7066 15.8935 16.8231 14.5564 17.7495M18.2811 14.4148L14.5564 17.7495M14.5564 17.7495C14.048 18.1017 13.5509 18.4143 13.11 18.6389L14.5564 17.7495ZM14.5564 17.7495L14.9835 18.366L14.5564 17.7495Z"
                  stroke="#0A0A0A"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeCard;
