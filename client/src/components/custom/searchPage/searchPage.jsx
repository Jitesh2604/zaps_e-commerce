import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";

const SearchPage = () => {
    const location = useLocation();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const { searchQuery } = location.state || { searchQuery: ""};
  const navigate = useNavigate();

  console.log(searchQuery);
  const getDataFromCategory = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}/product/search/${searchQuery}`
      );
      setData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getDataFromCategory();
  }, []);

  console.log(data);

  const handleSingleProduct = (product) => {
    navigate("/singleProduct", { state: { product } });
  }

  return (
    <main className=" container mx-auto px-0 py-8 flex">
      {/* Sidebar */}
      <aside className= "w-64 ml-[-70px]">
        <h2 className="font-semibold mb-4" >Filters</h2>
        {/* Color Filters */}
        <div className="space-y-4">
          <h3 className="font-semibold">Color</h3>
          {["Multi", "Navy", "Pink", "Beige"].map((color) => (
            <div key={color} className="flex items-center space-x-2 px-[10px]">
              <Checkbox id={`color-${color}`} />
              <label htmlFor={`color-${color}`} className="text-sm font-medium">
                {color}
              </label>
            </div>
          ))}
        </div>

        {/* Gender Filters */}
        <div className="space-y-4 mt-6">
          <h3 className="font-semibold">Gender</h3>
          {["Women", "Men", "Girls", "Boys"].map((gender) => (
            <div key={gender} className="flex items-center space-x-2 px-[10px]">
              <Checkbox id={`gender-${gender}`} />
              <label
                htmlFor={`gender-${gender}`}
                className="text-sm font-medium"
              >
                {gender}
              </label>
            </div>
          ))}
        </div>

        {/* Product Type Filters */}
        <div className="space-y-4 mt-6 px-[10px]" >
          <h3 className="font-semibold">Product Type</h3>
          <Input
            type="search"
            placeholder="Search Product Type"
            className="mb-2"
          />
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {["Clothing", "Shoes", "Accessories", "Bags"].map((type) => (
              <div key={type} className="flex items-center space-x-2 px-[10px]">
                <Checkbox id={`type-${type}`} />
                <label htmlFor={`type-${type}`} className="text-sm font-medium">
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>
      </aside>
      {/* Product Grid */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Category Name</h1>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New Arrivals</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <div key={product._id} className="border cursor-pointer rounded-lg overflow-hidden" onClick={() => handleSingleProduct(product)}>
              <div className="relative">
                <img
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">${product.price}</p>
                {product.brand && (
                  <p className="text-xs text-red-500 mt-1">
                    {product.brand} left in stock
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
