import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, LogOut } from "lucide-react";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { AuthContext } from "@/context/authContext";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const { login, logout, user } = useContext(AuthContext);
  const [openCategory, setOpenCategory] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const navigate = useNavigate();

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    await logout();
  };

  // Handle category clicks
  const handleCategoryClick = (category) => {
    setOpenCategory(category);
  };

  // Close dialog
  const handleCloseDialog = () => {
    setOpenCategory(null);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to the search results page, passing the search query
      navigate("/searchPage", { state: { searchQuery: "" } });
    }
  };

  const categories = [
    { name: "New", subcategories: ["New Arrivals", "Trending", "Bestsellers"] },
    {
      name: "Women",
      subcategories: ["Clothing", "Shoes", "Accessories", "Beauty"],
    },
    {
      name: "Men",
      subcategories: ["Clothing", "Shoes", "Accessories", "Grooming"],
    },
    { name: "Kids", subcategories: ["Girls", "Boys", "Baby", "Toys"] },
    {
      name: "Collection",
      subcategories: ["Summer", "Winter", "Spring", "Fall"],
    },
    {
      name: "Brand",
      subcategories: ["Popular Brands", "Luxury", "Sustainable"],
    },
    {
      name: "Sale",
      subcategories: ["Clearance", "Last Chance", "Bundle Deals"],
    },
    {
      name: "Gifts",
      subcategories: ["For Her", "For Him", "For Kids", "Home"],
    },
  ];

  return (
    <header className="w-full border-b-2">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            width={150}
            height={115}
            className="h-[80px] w-auto"
          />
        </a>

        <div className="flex-1 mx-10">
          <form onSubmit={handleSearchSubmit} className="relative w-full max-w-[450px] mx-auto">
            <input
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search products and categories"
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User size={24} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {user ? (
                <>
                  <DropdownMenuItem>
                    <a href="/profile">Profile</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/orders">Orders</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      Sign In
                    </DropdownMenuItem>
                  </DialogTrigger>
                  <DialogContent className="bg-white">
                    <DialogHeader>
                      <DialogTitle>Sign In</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="email" className="text-right">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="col-span-3 px-3 py-2 border rounded"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="password" className="text-right">
                          Password
                        </label>
                        <input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="col-span-3 px-3 py-2 border rounded"
                        />
                      </div>
                    </div>
                    <Button onClick={handleLogin}>Sign In</Button>
                    <p className="text-sm text-gray-600 text-center">
                      Don't have an account?{" "}
                      <a
                        href="/signup"
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Sign up
                      </a>
                    </p>
                  </DialogContent>
                </Dialog>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" onClick={() => navigate("/cart")}>
            <ShoppingCart size={24} />
          </Button>
        </div>
      </div>

      <nav className="container mx-auto px-6 py-2">
        <ul className="flex space-x-6 font-bold">
          {categories.map((category) => (
            <li key={category.name}>
              <Dialog
                open={openCategory === category.name}
                onOpenChange={(isOpen) =>
                  isOpen
                    ? handleCategoryClick(category.name)
                    : handleCloseDialog()
                }
              >
                <DialogTrigger asChild>
                  <Button 
                    variant="link"
                    className="font-bold text-base hover:underline"
                  >
                    {category.name}
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white">
                  <DialogHeader>
                    <DialogTitle>{category.name}</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4">
                    {category.subcategories.map((subcategory) => (
                      <a
                        key={subcategory}
                        href="/category"
                        className="text-blue-600 hover:underline"
                        onClick={handleCloseDialog}
                      >
                        {subcategory}
                      </a>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
