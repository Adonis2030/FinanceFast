import "../../index.css";
import Input from "../../components/common/Input";
import Clients from "../../components/Clients";
import Image from "../../assets/images/iPhone-13-Pro-Front 1.png";
import Image2 from "../../assets/images/iPhone 13 Pro 1.png";
import Cash from "../../assets/images/cash.png";
import Coin from "../../assets/images/coin.png";
import Turkish from "../../assets/images/Frame 90.png";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="max-md:px-6">
        <p className="text-[#1a1a1a] text-center font-grifter text-5xl font-bold leading-[54px] max-md:text-32 max-md:leading-10">
          Simplify Your International <br /> Transactions with{" "}
          <mark>One Platform</mark>
        </p>
        <div className="mt-4" />
        {/* --------------------------- */}
        <p className="text-[#3a3a3a] text-center font-satoshiVariable text-lg font-normal leading-normal max-md:text-16">
          Say Goodbye to the Hassles of Traditional Money Transfers. FinanceFast
          allows <br /> you effortlessly transfer money anywhere in the world
          with confidence and ease.
        </p>
        <div className="mt-10" />
        {/* --------------------------- */}
        <Input />
      </div>
      <div className="mt-36 mb-1" />
      {/* --------------------------- */}
      <Clients />
      <div className="container mx-auto mt-28">
        <div className="w-full">
          <p
            className="text-center font-satoshiVariable font-bold leading-normal uppercase text-sm text-gradient"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #6364FF 64.58%, #563ACC 100%)",
            }}
          >
            Cross-Border Transactions
          </p>
          <p className="text-[#1A1A1A] py-4 text-center font-grifter font-bold  text-40 leading-10">
            Say Goodbye to International <br /> Payment Hassles
          </p>
          <p className="text-[#3A3A3A] text-center font-satoshiVariable font-normal text-base leading-7">
            Start your journey to hassle free Cross-Border Payments by
            downloading the <br /> FastFinance app from your iOS of Android
            store.
          </p>
        </div>
        {/* --------------------------- */}
        <div className="flex w-full pt-22 gap-2 max-md:flex-col">
          <div className="w-1/2 px-2 my-5 mr-8 pt-5 gap-5 flex flex-col border-r border-gray-300 max-md:w-full max-md:border-r-0 max-md:border-b max-md:pb-10">
            <div className="text-[#3a3a3a] font-satoshiVariable text-16 font-normal leading-normal">
              Expensive high fees and unfavorable exchange rates
            </div>
            <div className="text-[#3a3a3a] font-satoshiVariable text-16 font-normal leading-normal">
              transfer delays and inconvenience
            </div>
            <div className="text-[#3a3a3a] font-satoshiVariable text-16 font-normal leading-normal">
              Fraud and loss of funds
            </div>
            <div className="text-[#3a3a3a] font-satoshiVariable text-16 font-normal leading-normal">
              traditional in-person transactions
            </div>
            <div className="text-[#3a3a3a] font-satoshiVariable text-16 font-normal leading-normal">
              Lack of transparency
            </div>
            <div className="text-[#3a3a3a] font-satoshiVariable text-16 font-normal leading-normal">
              divmited payment methods
            </div>
            <div className="text-[#3a3a3a] font-satoshiVariable text-16 font-normal leading-normal">
              Complex verification processes
            </div>
            <div className="text-[#3a3a3a] font-satoshiVariable text-16 font-normal leading-normal">
              Long payment wait times
            </div>
            <div className="text-[#3a3a3a] font-satoshiVariable text-16 font-normal leading-normal">
              Hiddden costs
            </div>
            <div className="text-[#3a3a3a] font-satoshiVariable text-16 font-normal leading-normal">
              Currency exchange rates
            </div>
          </div>
          <div className="w-1/2 py-5 max-xl:w-full">
            <div className="bg-[#EAE7FFB2] rounded-3xl">
              <img
                src={Image}
                alt="mobile_1"
                className="w-full h-full pt-12 pb-10 px-36"
              />
              <p className="text-[#1a1a1a] pl-8 font-grifter text-32 font-bold leading-normal">
                Global accounts in minutes
              </p>
              <p className="text-[#3a3a3a] pl-8 font-satoshiVariable text-16 font-normal leading-normal pr-28 pb-8">
                FinanceFast solves problems by proving low fees, fast transfers,
                secure transactions, and a user-friendly platform.
              </p>
            </div>
          </div>
        </div>
        {/* --------------------------- */}
        <div className="w-full py-22">
          <p
            className="text-center font-satoshiVariable font-bold leading-normal uppercase text-sm text-gradient"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #6364FF 64.58%, #563ACC 100%)",
            }}
          >
            Real-Time Exchange Rate
          </p>
          <p className="text-[#1A1A1A] py-4 text-center font-grifter font-bold  text-40 leading-10">
            Effortlessly Convert <br /> Currency
          </p>
          <p className="text-[#3A3A3A] text-center font-satoshiVariable font-normal text-base leading-7">
            Convert your currency from Pounds to Naira to Dollars. Convert{" "}
            <br /> Currency Anytime, Anywhere with FinanceFast's Seamless and
            Efficient Service.
          </p>
        </div>
        {/* ---------------------------- */}
        <div className="flex w-full gap-2 max-xl:flex-col">
          <div className="w-3/6 max-xl:w-2/3 max-xl:m-auto py-5 mr-28 max-lg:w-full">
            <div className="bg-[#F1DDFFB2] rounded-3xl">
              <div className="flex justify-center relative m-auto max-w-max">
                <img
                  src={Coin}
                  alt="cash"
                  className="absolute -left-24 bottom-8 z-0"
                />
                <img
                  src={Image2}
                  alt="mobile_1"
                  className="w-auto h-auto pt-12 pb-8 z-10"
                />
                <img
                  src={Cash}
                  alt="coin"
                  className="absolute -right-14 top-20 z-20"
                />
              </div>
              <p className="text-[#1a1a1a] pl-8 font-grifter text-32 font-bold leading-normal">
                Zero Hidden Fees
              </p>
              <p className="text-[#3a3a3a] pl-8 font-satoshiVariable text-16 font-normal leading-normal pr-28 pb-8">
                Get the Best Exchange Rates with FinanceFast: Convert Currency{" "}
                <br /> Hassle-Free, Instantly and Without Fees.
              </p>
            </div>
          </div>
          <div className="w-2/5 my-5 pl-28 gap-12 flex flex-col border-l border-gray-300 max-xl:items-center max-xl:pl-0 max-xl:w-2/3 max-xl:m-auto max-xl:border-t max-xl:border-l-0 max-xl:pt-10 max-lg:w-full">
            {Array.from({ length: 5 }, (_, index) => {
              return (
                <div className="flex gap-6" key={`currncy_${index}`}>
                  <div>
                    <img src={Turkish} alt="icon" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#1a1a1a] font-grifter text-xl font-bold leading-normal pb-2">
                      Turkish Lira
                    </p>
                    <p className="text-[#3a3a3a] font-satoshiVariable text-base font-normal leading-normal">
                      ₦ 340 to ₺1 + ₦2,500 hidden conversion fee
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* -------------------------------- */}
        <div className="w-full pt-36 pb-20">
          <p
            className="text-center font-satoshiVariable font-bold leading-normal uppercase text-sm text-gradient"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #6364FF 64.58%, #563ACC 100%)",
            }}
          >
            Testimonials
          </p>
          <p className="text-[#1A1A1A] py-4 text-center font-grifter font-bold  text-40 leading-10">
            What Our Customers are Saying
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
