import React, { useEffect, useId } from "react"
import { useCart } from "../components/CartContext"
import { Nav } from "../components/Nav"
import { BsTrash } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { Toaster, toast } from "react-hot-toast"
import { data } from "autoprefixer"

const API_URL = import.meta.env.VITE_API_URL

const Cart = () => {
  const navigate = useNavigate()

  const [cart, setCart] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [totalPrice, setTotalPrice] = React.useState(0)
  const [userId, setUserId] = React.useState()
  const [isPaymentLoading, setIsPaymentLoading] = React.useState(false)

  useEffect(() => {
    const cookie = document.cookie
      .split(";")
      .map((cookie) => cookie.split("="))
      .map((cookie) => ({ key: cookie[0].trim(), value: cookie[1] }))
    // console.log(cookie)

    const userId = cookie.find((cookie) => cookie.key === "userId")?.value
    setUserId(userId)

    if (userId) {
      const fetchCart = async () => {
        try {
          const response = await axios.get(`${API_URL}/cart/${userId}`)
          // console.log(response);

          const { data } = response
          console.log(data)
          setIsLoading(false)

          setCart(data[0]?.product)

          const totalPrice = data[0]?.product.reduce(
            (total, item) => total + item.price,
            0
          )
          setTotalPrice(totalPrice)
        } catch (error) {
          console.log("Error fetching cart detail")
          console.log(error)
          setIsLoading(false)
        }
      }

      fetchCart()
    }
  }, [])

  // console.log(cart)

  // const { state, dispatch } = useCart()
  // const { cart } = state
  // const totalPrice = cart.reduce(
  //   (total, item) => total + item.price * item.quantity,
  //   0
  // )

  const removeFromCart = async (itemId) => {
    // console.log(userId)
    // console.log(itemId)

    try {
      const response = await axios.delete(`${API_URL}/cart/remove`, {
        data: {
          customer: userId,
          productId: itemId,
        },
      })

      const { data } = response
      console.log(data)
      toast.success("Item removed from cart")

      // Remove that object from the cart

      const newCart = cart.filter((item) => item._id !== itemId)
      setCart(newCart)

      // setCart(data?.cart[0]?.product)
    } catch (error) {
      console.log("Error removing item from cart")
      console.log(error)
    }

    // dispatch({
    //   type: 'REMOVE_FROM_CART',
    //   payload: {
    //     id: itemId,
    //   },
    // });
  }
  const handlePayment = async () => {
    console.log("Payment")
    console.log(cart)

    const products = cart.map((item) => ({
      id: item._id,
      qty: 1,
      name: item.name,
      price: item.price,
      artisian: "65587cf31d012006fd40c58d",
    }))
    try {
      setIsPaymentLoading(true)
      const response = await axios.post(`${API_URL}/checkout`, {
        customer: userId,
        products: products,
      })

      const { data } = response
      console.log(data)

      // navigate to stripe url that is returned
      window.location.replace(data)
    } catch (error) {
      console.log("Error while checkout")
      console.log(error)
      setIsPaymentLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="container mx-auto text-xl">
        <h2 className="mb-4 text-center bg-accent rounded-bl-2xl rounded-br-2xl text-3xl text-black font-bold font-serif pt-2 pb-2">
          Your Cart
        </h2>
        <div className="flex justify-center">
          <div className="text-2xl font-semibold">Loading...</div>
        </div>
        <Nav />
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto text-xl">
        <h2 className="mb-4 text-center bg-accent rounded-bl-2xl rounded-br-2xl text-3xl text-black font-bold font-serif pt-2 pb-2">
          Your Cart
        </h2>
        <div className="flex justify-center">
          <div className="text-2xl font-semibold">
            Your cart is empty.{" "}
            <Link to="/home" className="text-accent">
              Go shopping
            </Link>
          </div>
        </div>
        <Nav />
      </div>
    )
  }

  return (
    <div className="container mx-auto text-xl">
      <Toaster />
      <h2 className="mb-4 text-center bg-accent rounded-bl-2xl rounded-br-2xl text-3xl text-black font-bold font-serif pt-2 pb-2">
        Your Cart
      </h2>

      <div className="flex flex-wrap p-3 gap-3">
        {cart.map((item, index) => (
          <div key={index} className="flex items-center mb-4  pb-4">
            <img
              src={item.images[0].url}
              alt={item.name}
              className="mr-4 w-24 h-24"
            />
            <div>
              <p className="font-semibold">{item.name}</p>
              {/* <p>Quantity: {item.quantity}</p> */}
              <p>Quantity: 1</p>
              {/* <p>Price: Rs.{item.price * item.quantity}</p> */}
              <p>Price: Rs.{item.price}</p>
              <button
                className="text-black hover:text-red-700 text-xl font-semibold pt-3"
                onClick={() => removeFromCart(item._id)}
              >
                <BsTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className=" p-3">
        <hr className=" my-4" />

        <div className="flex justify-end">
          <div className="text-xl font-semibold">
            Total Price: Rs. {totalPrice}
            {/* Total Price: Rs.{totalPrice} */}
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            className={`bg-accent text-white rounded-lg py-2 px-6 font-bold hover:bg-gray-900
            ${isPaymentLoading ? "opacity-50 cursor-not-allowed" : ""}
            `}
            onClick={handlePayment}
            disabled={isPaymentLoading}
          >
            {isPaymentLoading ? "Processing..." : "Proceed to Payment"}
          </button>
        </div>
      </div>
      <Nav />
    </div>
  )
}

export default Cart
