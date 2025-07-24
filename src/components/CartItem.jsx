
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">

        <div className="w-[25%]">
          <img src={item.image} />
        </div>

        <div classname="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1>{item.title}</h1>
          <br></br>
      
          <h1>{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          <div>
            <p className="text-green-600 font-semibold">${item.price}</p>

            <div 
            onClick={removeFromCart}>
                 <FcDeleteDatabase/>
            </div>
          </div>
          


        </div>

      </div>

    </div>
  );
};

export default CartItem;
