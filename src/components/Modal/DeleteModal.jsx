// import React from 'react'

export default function DeleteModal(props) {

    const { title, message } = props

    return (
        <>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <form method="dialog" className="flex gap-2">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Cancel</button>
                            <button type="submit" className="btn bg-red-500 text-white">Delete</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
