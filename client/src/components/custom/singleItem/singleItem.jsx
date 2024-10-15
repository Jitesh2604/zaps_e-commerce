import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Heart, Share2, Star, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { X, Check } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"  
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const SingleProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || { cart: []};
  const [selectedGender, setSelectedGender] = useState("Women");
  const [selectedSize, setSelectedSize] = useState("13");
  const [cart, setCart] = useState([]);
  const [openSide, setOpenSide] = useState(false);
  

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setOpenSide(true);
  };

  
  // console.log(product);

  const handelViewBag = () => {
    navigate("/cart", { state: { cart, subtotal: calculateSubtotal(), product } })
  }

  const handelToggel = () => {
    setOpenSide(false);
  }
  const calculateSubtotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleQuantityChange = (itemId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === itemId ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm mb-4">
        <a to="#" className="text-blue-600 hover:underline">
          Back
        </a>{" "}
        |
        <a to="#" className="text-blue-600 hover:underline">
          Shoes
        </a>{" "}
        /
        <a to="#" className="text-blue-600 hover:underline">
          Sneakers & Athletic Shoes
        </a>{" "}
        /<span className="font-bold">{product.brand}</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <Card>
            <CardContent className="p-4">
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt="Under Armour Lockdown 6 Basketball Shoe"
                  className="w-full h-auto"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-4 right-4 rounded-full"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-1/3">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold">{product.brand}</h2>
              <h1 className="text-3xl font-bold mb-2">
              {product.name}
              </h1>
              {/* <p className="text-gray-600">Unisex</p> */}
            </div>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          <div className="mb-4">
            <span className="text-3xl font-bold">${product.price}</span>
            <p className="text-sm text-gray-600">
              or 4 interest-free payments of $17.49 with
              <img
                src={product.imageUrl}
                alt="Afterpay"
                className="inline-block h-5 ml-1"
              />
              <Info className="inline h-4 w-4 ml-1 text-gray-400" />
            </p>
          </div>

          <div className="flex items-center mb-4">
            {[1, 2, 3, 4].map((star) => (
              <Star
                key={star}
                className="h-5 w-5 text-yellow-400 fill-current"
              />
            ))}
            <Star className="h-5 w-5 text-gray-300" />
            <span className="ml-2 text-blue-600">(10)</span>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Color: Black/White/White</h3>
            <div className="border p-2 inline-block">
              <img
                src="/placeholder.svg?height=60&width=60"
                alt="Black/White/White"
                className="w-15 h-15"
              />
            </div>
          </div>

          <p className="text-sm mb-4">This fits true to size.</p>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Gender:</h3>
            <RadioGroup
              value={selectedGender}
              onValueChange={setSelectedGender}
              className="flex gap-4"
            >
              <div className="flex items-center">
                <RadioGroupItem
                  value="Women"
                  id="women"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="women"
                  className="flex items-center justify-center px-4 py-2 border rounded-md peer-checked:bg-black peer-checked:text-white cursor-pointer"
                >
                  Women
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="Men" id="men" className="peer sr-only" />
                <Label
                  htmlFor="men"
                  className="flex items-center justify-center px-4 py-2 border rounded-md peer-checked:bg-black peer-checked:text-white cursor-pointer"
                >
                  Men
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Women's Sizes:</h3>
            <RadioGroup
              value={selectedSize}
              onValueChange={setSelectedSize}
              className="flex flex-wrap gap-2"
            >
              {["13", "14"].map((size) => (
                <div key={size} className="flex items-center">
                  <RadioGroupItem
                    value={size}
                    id={`size-${size}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`size-${size}`}
                    className="flex items-center justify-center w-12 h-12 border rounded-md peer-checked:bg-black peer-checked:text-white cursor-pointer"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Button variant="link" className="text-blue-600 p-0 h-auto mb-4">
            Can't Find Your Size? Notify us.
          </Button>

          <Button
            onClick={() => handleAddToCart(product)}
            className="w-full bg-black text-white hover:bg-gray-800"
          >
            Add to Bag
          </Button>
          {openSide && (
        <Card className="w-80  mt-[15px] shadow-lg max-h-[auto] overflow-y:">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Check className="text-green-500 mr-2" />
                <span className="text-xl font-semibold">Added To Bag</span>
              </div>
              <Button variant="ghost" size="icon" onClick={handelToggel}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-col space-y-4">
                <div  className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden">
                    <img
                      src={product.imageUrl || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-600">Qty: {product.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${product.price * product.quantity}</p>
                    <Select
                      defaultValue={product.quantity}
                      onValueChange={(value) => handleQuantityChange(product._id, value)}
                    >
                      <SelectTrigger className="w-16">
                        <SelectValue placeholder="Qty" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((qty) => (
                          <SelectItem key={qty} value={qty}>
                            {qty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
            </div>
          </CardContent>
          {/* <CardFooter className ="mt-[50px] ">
            <div className="flex justify-between">
              <span className="font-semibold">Subtotal</span>
              <span className="font-semibold">${calculateSubtotal()}</span>
            </div>
          </CardFooter> */}
          <CardFooter className="flex flex-col items-stretch p-4 pt-0">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">{`Bag Subtotal ${cart.length} Item`}</span>
          <span className="font-semibold">${calculateSubtotal()}</span>
        </div>
        <Button className="w-full mb-2" onClick={handelViewBag}>View Bag</Button>
        <Button variant="default" className="w-full bg-black text-white hover:bg-gray-800">
          Proceed to Checkout
        </Button>
      </CardFooter>
        </Card>
      )}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
