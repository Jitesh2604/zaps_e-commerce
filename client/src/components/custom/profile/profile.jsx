import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Profile() {
  const [giftCardCode, setGiftCardCode] = useState('')
  const [orderSearch, setOrderSearch] = useState('')

  const handleGiftCardSubmit = (e) => {
    e.preventDefault()
    // Handle gift card submission
    console.log('Gift card submitted:', giftCardCode)
  }

  const handleOrderSearch = (e) => {
    e.preventDefault()
    // Handle order search
    console.log('Searching for order:', orderSearch)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Hello, Jitesh Pal!</h1>
      <p className="text-gray-600 mb-8">You are logged in as jiteshpal2604@gmail.com</p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Your Primary Account Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Primary Shipping Address</h3>
              <p className="text-gray-600 mb-2">No address available</p>
              <Button variant="link" className="p-0">Add a new shipping address</Button>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Primary Payment Information</h3>
              <p className="text-gray-600 mb-2">No card set as primary</p>
              <Button variant="link" className="p-0">Add a new card</Button>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Name, Email & Password</h3>
              <p className="mb-1">Jitesh Pal</p>
              <p className="mb-1">jiteshpal2604@gmail.com</p>
              <p className="mb-2">********</p>
              <Button variant="link" className="p-0 block">Manage Account Info</Button>
              <Button variant="link" className="p-0 block mt-1">Manage Email Subscriptions</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <form onSubmit={handleGiftCardSubmit} className="flex-1 mb-4 md:mb-0">
            <label htmlFor="giftCard" className="block mb-2">Enter gift card code to redeem</label>
            <div className="flex">
              <Input
                id="giftCard"
                type="text"
                value={giftCardCode}
                onChange={(e) => setGiftCardCode(e.target.value)}
                className="mr-2"
              />
              <Button type="submit">Save to Your Account</Button>
            </div>
          </form>
          <div className="text-left md:text-right">
            <p className="text-sm text-gray-600">Your gift card balance</p>
            <p className="text-3xl font-bold">$0.00</p>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">Your Order History</h2>
      <form onSubmit={handleOrderSearch} className="mb-4">
        <div className="flex flex-col sm:flex-row">
          <Input
            type="text"
            placeholder="Search by Order Number, Brand, or Name"
            value={orderSearch}
            onChange={(e) => setOrderSearch(e.target.value)}
            className="mb-2 sm:mb-0 sm:mr-2"
          />
          <Button type="submit">Search Orders</Button>
        </div>
      </form>
      <p>Your order history is empty.</p>
    </div>
  )
}