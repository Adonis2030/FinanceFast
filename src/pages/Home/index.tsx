import "./index.css";
import Button from "../../components/common/Button";

const HomePage: React.FC = () => {
  return (
    <>
      <p className="title-txt">
        Simplify Your International <br /> Transactions with{" "}
        <mark>One Platform</mark>
      </p>
      <div className="mt-4" />
      <p className="description-txt">
        Say Goodbye to the Hassles of Traditional Money Transfers. FinanceFast
        allows <br /> you effortlessly transfer money anywhere in the world with
        confidence and ease.
      </p>
      <div className="mt-10" />
      <Button>Download Now</Button>
    </>
  );
};

export default HomePage;
