import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.push("/product");
  };
  return (
    <>
      <h2>Home Page</h2>
      <Link href='/blog'>Blog</Link>
      <Link href='/about'>About</Link>
      <Link href='/product'>Products</Link>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}

export default Home;
