import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Star } from "lucide-react";
import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import fashionBanner from "../../../assets/fashionBanner.png";
import shoes1 from "../../../assets/nikeShoe1.png";
import shoes2 from "../../../assets/shoes2.png";
import shoes3 from "../../../assets/shoes3.png";
import shoes4 from "../../../assets/shoes4.png";
import shoes5 from "../../../assets/shoes6.png";
import shoes7 from "../../../assets/shoes7.png";
import shoes8 from "../../../assets/shoes8.png";
import shoes9 from "../../../assets/shoes9.png";
import workout1 from "../../../assets/workout1.png";
import workout2 from "../../../assets/workout2.png";
import nature from "../../../assets/nature1.png";
import girlfashion1 from "../../../assets/girlfashion1.png";
import girlfashion2 from "../../../assets/girlfashion2.png";
import girlfashion3 from "../../../assets/girlfashion3.png";
import girlsPants1 from "../../../assets/girlPants1.png";
import zapposLogo from "../../../assets/zappos.png";
import primeLogo from "../../../assets/prime.png";
import vipLogo from "../../../assets/vip.png";

const Main = () => {
  const [products, setProducts] = useState([]);
  // const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const getData = async() => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/product`);
      console.log(response.data);
      setProducts(response.data);
      
    } catch (err) {
      console.log(err.message);
    }
  };
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="flex-1 w-full mt-[50px]">
      <div className="container w-full ">
        {/* {big dec sale} */}
        <div className="border border-black-500 w-[112.5%] p-[50px] bg-teal-700">
          <h1 className="text-[30px] font-bold">The Big December Sale</h1>
          <h3 className="text-[20px] font-bold mb-3">
            Its an autumn come true. Explore HUGE deals up to 80% off!
          </h3>
          <Link href="/category" className="text-[15px] mb-3 underline hover:text-blue-900">
            Shop the sale
          </Link>
        </div>

        {/* {poster} */}
        <div className="fasionPosert w-[112.5%] border border-black-700 text-center mt-[50px] mb-[50px]">
          <img src={fashionBanner} className="w-full h-[900px]" />
          <div className="w-[100%] bg-amber-100 mt-[-2px] p-[20px]">
            <h3 className="text-[20px] font-bold mb-3">Head-To-Toe Fall</h3>
            <br />
            <Link href="/category" className="underline hover:text-blue-900 font-bold">
              shop Women Fall Favorites
            </Link>
          </div>
        </div>

        {/* {trending} */}
        <section className="mb-12 w-[112.5%]">
          <h2 className="text-2xl font-bold mb-4 text-start px-10">
            Trending Now
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-10 text-center h-[350px]">
            <div className="bg-white rounded-lg  overflow-hidden h-[350px]">
              <img
                src={shoes1}
                alt="nikeShoe"
                className="shadow-md mb-[20px] h-[300px]"
              />
              <Link href="/category" className="underline hover:text-blue-900 font-bold">
                Just-In Brooks
              </Link>
            </div>

            <div className="bg-white rounded-lg  overflow-hidden h-[350px]">
              <img
                src={shoes2}
                alt="nikeShoe"
                className="shadow-md mb-[20px] h-[300px]"
              />
              <Link href="/category" className="underline hover:text-blue-900 font-bold">
                Running Shoes
              </Link>
            </div>

            <div className="bg-white rounded-lg overflow-hidden h-[350px]">
              <img
                src={shoes3}
                alt="nikeShoe"
                className="shadow-md mb-[20px] h-[300px]"
              />
              <Link href="/category" className="underline hover:text-blue-900 font-bold">
                Ankle Booties
              </Link>
            </div>

            <div className="bg-white rounded-lg overflow-hidden h-[350px]">
              <img
                src={shoes4}
                alt="nikeShoe"
                className="shadow-md mb-[20px] h-[300px]"
              />
              <Link href="/category" className="underline hover:text-blue-900 font-bold">
                Kid's Boots
              </Link>
            </div>

            <div className="bg-white rounded-lg overflow-hidden h-[350px]">
              <img
                src={shoes5}
                alt="nikeShoe"
                className="shadow-md mb-[20px] h-[300px]"
              />
              <Link href="/category" className="underline hover:text-blue-900 font-bold">
                Flats
              </Link>
            </div>
          </div>
        </section>

        {/* {that autumn} */}
        <section className="mb-12 w-[112.5%]">
          <h2 className="text-2xl font-bold mb-4 text-start px-5">
            That Autumn Felling
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 text-center ">
            <div className="bg-white rounded-lg  overflow-hidden h-[500px]">
              <img
                src={shoes7}
                alt="nikeShoe"
                className="shadow-md mb-[20px] h-[450px]"
              />
              <p>
                Waterproof picks made for <br /> what fall in store
              </p>
              <Link href="/category" className="underline hover:text-blue-900 font-bold">
                Shop Hunter
              </Link>
            </div>
            <div className="bg-white rounded-lg  overflow-hidden h-[500px]">
              <img
                src={shoes8}
                alt="nikeShoe"
                className="shadow-md mb-[20px] h-[450px]"
              />
              <p>Sport laid-back, classic kiks form br to bonfire</p>
              <Link href="/category" className="underline hover:text-blue-900 font-bold">
                Shop Lifestyle Sneakers
              </Link>
            </div>
            <div className="bg-white rounded-lg overflow-hidden h-[500px]">
              <img
                src={shoes9}
                alt="nikeShoe"
                className="shadow-md mb-[20px] h-[450px]"
              />
              <p>these lace-up beautys will complete erery outfit</p>
              <Link href="/category" className="underline hover:text-blue-900 font-bold">
                Shop Lace-Up Boots
              </Link>
            </div>
          </div>
        </section>

        {/* {prime member suprise} */}
        <div className=" bg-orange-50  w-[112.5%] p-[50px] items-center">
          <h1 className="text-[30px] font-bold">Prime Member Supride</h1>
          <h3 className="text-[20px] mb-3">
            Join VIP and like your Zappos VIP account and prime member for BIG
            rewards on <br /> 10/8 & 10/9
          </h3>
          <div className="flex w-[250px] items-center justify-evenly m-auto">
            <Link href="" className="underline hover:text-blue-700">
              Link Your Prime
            </Link>
            <a href="" className="underline hover:text-blue-700">
              Join VIP
            </a>
          </div>
        </div>

        {/* {on:workOut} */}
        <section className="mt-12 mb-12 w-[112.5%] h-[400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-5 text-center h-[100%]">
            <div className="bg-white rounded-lg  overflow-hidden text-center pt-[30%] h-[100%]">
              <p className="font-bold text-4xl mb-[10px]">
                On: Work Out <br />
                AnyWhere
              </p>
              <p>
                Train indore or run outside in <br /> ultra-comfortable snakers.
              </p>
              <Link href="/category" className="underline hover:text-blue-900 font-bold">
                Shop On
              </Link>
            </div>
            <div className="bg-white rounded-lg  overflow-hidden">
              <img
                src={workout1}
                alt="nikeShoe"
                className="shadow-md mb-[20px] h-[400px] w-[100%]"
              />
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={workout2}
                alt="nikeShoe"
                className="shadow-md mb-[20px] h-[400px] w-[100%]"
              />
            </div>
          </div>
        </section>

        {/* {img with text} */}
        <div className="mt-12 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 w-[112.5%]">
          {/* Column 1: Image with text overlay */}
          <div className="relative h-[400px]">
            <img
              src={nature}
              alt="Product"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
              <p className="text-white text-2xl font-bold">
                New <br /> Aeeivals
              </p>
              <Link href="/category" className="text-white underline font-bold">
                Find More Fresh Picks
              </Link>
            </div>
          </div>
          
          {products.slice(0, 3).map((item) => {
            return ( // Add return statement here
              <div onClick={()=>navigate("/category")} key={item._id} className="text-start justify-start">
                <img
                    src={item.imageUrl}
                  alt="Product"
                  className="w-full h-[400px] object-cover"
                />
                <div className="flex items-start justify-start mt-[10px]">
                  <RadioGroup className="flex space-x-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="red" id="red" className="bg-red-500" />
                      <Label htmlFor="red">Red</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="blue" id="blue" className="bg-blue-500" />
                      <Label htmlFor="blue">Blue</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="green" id="green" className="bg-green-500" />
                      <Label htmlFor="green">Green</Label>
                    </div>
                  </RadioGroup>
                </div>
                <h2 className="text-xl font-bold my-[10px]">
                  {item.brand}
                </h2>
                <p className="text-gray-600 my-[10px]">{item.description}</p>
                <p className="text-sm text-gray-500 my-[10px]">item.</p>
                <p className="text-3xl font-bold">{item.price}</p>
                <div className="flex items-center">
                  <p className="mr-2">Rating:</p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= 4
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* {Whant insprition?} */}
        <section className="mt-12 mb-12 w-[112.5%]">
          <h2 className="text-2xl font-bold mb-4 text-start px-5">
            Whant insprition? Visit the style room for styling tips and feshion
            trends.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 text-center h-[500px]">
            <div className="bg-white rounded-lg  overflow-hidden h-[500px]">
              <img
                src={girlfashion1}
                alt="nikeShoe"
                className="shadow-md mb-[20px] h-[450px]"
              />
              <p>
                Folowy dresses with sporty <br /> kiks? Its a yes! Unexpected{" "}
                <br />
                pairing are all the rage.
              </p>
              <Link href="/category" className="underline hover:text-blue-900 font-bold">
                Shop ASICS
              </Link>
            </div>
            <div className="bg-white rounded-lg  overflow-hidden h-[500px]">
              <img
                src={girlfashion2}
                alt="nikeShoe"
                className="shadow-md mb-[20px] h-[450px]"
              />
              <p>
                What happens whan go-to <br />
                pieces find their prefect <br />
                partners? Style magic.
              </p>
              <Link href="/category" className="underline hover:text-blue-900 font-bold">
                Shop Favorite Pairings
              </Link>
            </div>
            <div className="bg-white rounded-lg overflow-hidden h-[500px]">
              <img
                src={girlfashion3}
                alt="nikeShoe"
                className="shadow-md mb-[20px] h-[450px]"
              />
              <p>
                Introduce effortless fall <br />
                appeal into your wardrobe <br />
                with our top picks.
              </p>
              <a href="/category" className="underline hover:text-blue-900 font-bold">
                Shop Sam Edelman
              </a>
            </div>
          </div>
        </section>

        {/* {zappos 25th birthday} */}
        <section className="mt-12 mb-12 w-[112.5%]">
          <h2 className="text-2xl font-bold mb-4 text-start px-5">
            Zappos 25th Birthday Exclusive
          </h2>
          <div onClick={()=>navigate("/category")} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 text-center">
            {products.slice(4, 8).map((item) => {
              return (
                <div key={item._id} className="text-start justify-start">
              <img
                src={item.imageUrl}
                alt="Product"
                className="w-full h-[400px] object-cover"
              />
              <div className="flex items-start justify-start mt-[10px]">
                <RadioGroup className="flex space-x-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="red"
                      id="red"
                      className="bg-red-500"
                    />
                    <Label htmlFor="red">Red</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="blue"
                      id="blue"
                      className="bg-blue-500"
                    />
                    <Label htmlFor="blue">Blue</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="green"
                      id="green"
                      className="bg-green-500"
                    />
                    <Label htmlFor="green">Green</Label>
                  </div>
                </RadioGroup>
              </div>
              <h2 className="text-xl font-bold my-[10px]">
                {item.brand}
              </h2>
              <p className="text-gray-600 my-[10px]">{item.description}</p>
              {/* <p className="text-sm text-gray-500 my-[10px]">Unisex</p> */}
              <p className="text-3xl font-bold">{item.price}</p>
              <div className="flex items-center">
                <p className="mr-2">Rating:</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= 4
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
              )
            })}
          </div>
        </section>

        {/* {img with text} */}
        <div className="mt-12 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 w-[112.5%]">
          {/* Column 1: Image with text overlay */}
          <div className="relative h-[400px]">
            <img
              src={girlsPants1}
              alt="Product"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
              <p className="text-white text-xl font-bold">Featured Product</p>
            </div>
          </div>
          {/* Column 2: Product Cart */}
          {products.slice(9, 12).map((item) => {
            return (
              <div key={item._id} className="text-start justify-start">
            <img
              src={item.imageUrl}
              alt="Product"
              className="w-full h-[400px] object-cover"
            />
            <div className="flex items-start justify-start mt-[10px]">
              <RadioGroup className="flex space-x-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="red" id="red" className="bg-red-500" />
                  <Label htmlFor="red">Red</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="blue"
                    id="blue"
                    className="bg-blue-500"
                  />
                  <Label htmlFor="blue">Blue</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="green"
                    id="green"
                    className="bg-green-500"
                  />
                  <Label htmlFor="green">Green</Label>
                </div>
              </RadioGroup>
            </div>
            <h2 className="text-xl font-bold my-[10px]">{item.name}</h2>
            <p className="text-gray-600 my-[10px]">
              {item.description}
            </p>
            <p className="text-sm text-gray-500 my-[10px]">
              {item.category.name}
            </p>
            <p className="text-3xl font-bold">{item.price}</p>
            <div className="flex items-center">
              <p className="mr-2">Rating:</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= 4
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
            )
          })}
        </div>

        <div className="border p-[10px] m-[10px] w-[100.5%] bg-neutral-200">
          <p className="text-start font-bold text-2xl mb-4 px-5">
            Ways to Shop & Save!
          </p>
          <div className="flex gap-6 justify-arounded px-5">
            <div className="border border-black text-start p-[10px] rounded-[20px]">
              <div className="flex justify-evenly">
                <p className="text-start font-bold">
                  Jion VIP: 10x VIP points on 10/8 $10/9 by jioning and linking
                  prime account.
                </p>
                <img src={vipLogo} className="h-[100px] w-[150px]" />
              </div>
              <Link href="" className="text-start underline hover:text-blue-500">
                Join VIP
              </Link>
            </div>
            <div className="border border-black text-start p-[10px] rounded-[20px]">
              <div className="flex justify-evenly">
                <p className="text-start font-bold">
                  Link YOur Prime: 10x VIP points on 10/8 & 10/9.
                </p>
                <img src={primeLogo} className="h-[100px] w-[150px]" />
              </div>
              <Link href="" className="text-start underline hover:text-blue-500">
                Link Your Prie
              </Link>
            </div>
            <div className="border border-black text-start p-[10px] rounded-[20px]">
              <div className="flex justify-evenly">
                <p className="text-start font-bold">
                  Download App: Get 10% off $100+. Exclusions apply.
                </p>
                <img src={zapposLogo} className="h-[100px] w-[150px]" />
              </div>
              <Link href="" className="text-start underline hover:text-blue-500">
                Download the App
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
