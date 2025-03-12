import React, {useEffect} from 'react'

const CartPopup = ({open, setOpen}) => {
      useEffect(() => {
        if (open) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
        return () => (document.body.style.overflow = "auto"); 
      }, [open]);
      const closeModal = () => {
        setOpen(false)
      }
      
  return (
    <div className="z-[1050] fixed inset-0 bg-opacity-[20%] bg-black backdrop-blur-[1px] flex gap-[35px] justify-center items-end md:items-center">
    <div className="bg-white absolute h-full w-full md:w-[50vw] lg:w-[30vw] right-0 ">
        <div>
            <button onClick={closeModal}>Close</button>
        </div>
    </div>
  </div>
  )
}

export default CartPopup