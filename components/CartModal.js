import { Fragment, useEffect, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"
import CardItem from "./CardItem"

const CartModal = () => {
    const [open, setOpen] = useRecoilState(modalState)
    useEffect(() => {
        setOpen(open)
    }, [open])
    const cancelButtonRef = useRef(null)
    return(
        <div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => setOpen(false)}>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                        <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative p-5 overflow-hidden text-left transition-all transform bg-white rounded-lg
                            shadow-xl sm:my-8 max-w-[300px] sm:max-w-md flex flex-col justify-center">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-center">
                                Cart
                                </Dialog.Title>
                                    {
                                        //cart item begin
                                    }
                                    <div className='space-y-2 overflow-y-scroll max-h-64 scrollbar-hide'>
                                        <CardItem id={"hahah"} amount={"100"} />
                                        <CardItem id={"hehehe"} amount={"100"} />
                                        <CardItem id={"hmmmn"} amount={"100"} />
                                        <CardItem id={"lababa"} amount={"100"} />
                                        <CardItem id={"lalala"} amount={"100"} />
                                    </div>
                                    {
                                        //cart item ends
                                    }
                                    <button className="px-6 py-2 mt-2 text-white rounded-full bg-green">Check out $100</button>
                                </Dialog.Panel>
                        </Transition.Child>
                    </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default CartModal