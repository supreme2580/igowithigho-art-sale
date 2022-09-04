import { Fragment, useEffect, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"
import Image from 'next/image'
import { TrashIcon } from '@heroicons/react/outline'

const CartModal = () => {
    const [open, setOpen] = useRecoilState(modalState)
    useEffect(() => {
        setOpen(open)
    }, [open])
    const cancelButtonRef = useRef(null)
    const increment = () => {
        document.getElementById("no").innerHTML = document.getElementById("no").value++
    }
    const decrease = () => {
        if (document.getElementById("no").value > 1) {
            document.getElementById("no").innerHTML = document.getElementById("no").value--
        }
    }
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
                        <Dialog.Panel className="relative p-5 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 max-w-[300px] sm:max-w-md space-y-2">
                            {
                                //cart item begin
                            }
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-center">
                              Cart
                            </Dialog.Title>
                                <div className="flex items-center justify-between w-full space-x-2.5">
                                    <div>
                                        <Image src="/cardImg.png" width={75} height={75} className="rounded-xl" />
                                    </div>
                                    <div className="flex flex-col flex-wrap items-start flex-1 space-y-1">
                                        <h1 className="max-w-[235px] break-words font-semibold">Picture of monalisa</h1>
                                        <div className="flex items-center justify-between w-full">
                                            <div>
                                                <div className="flex items-center border-2 max-w-auto rounded-xl border-green max-w-[100px]">
                                                    <button className="w-8 text-2xl font-semibold text-center" onClick={decrease}>-</button>
                                                    <input type="text" value="1" className="w-8 text-center text-black border-2 outline-none border-x-green border-y-white" id="no" readOnly />
                                                    <button className="w-8 text-2xl font-semibold text-center" onClick={increment}>+</button>
                                                </div>
                                            </div>
                                            <div>
                                                <button>
                                                    <TrashIcon className="w-8 h-8" />
                                                </button>
                                            </div>
                                        </div>
                                        <button className="text-lg font-semibold">= $100</button>
                                    </div>
                                </div>
                                {
                                    //cart item ends
                                }
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