import { forwardRef, useRef } from "react";

const Modal = ({ closeModal, updateData, handleSubmit }, ref) => {
  const formRef = useRef(null);

  return (
    <dialog ref={ref} className="w-[98%] max-w-[500px] rounded-md">
      <div className="text-right mb-4">
        <button
          onClick={() => {
            closeModal();
            formRef.current.reset();
          }}
        >
          Close
        </button>
      </div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input
          className="w-full mb-2 p-2 focus:outline-none border border-gray-500 rounded-md"
          type="text"
          placeholder="title"
          name="title"
          defaultValue={updateData?.title}
        />
        <input
          className="w-full mb-2 p-2 focus:outline-none border border-gray-500 rounded-md"
          type="number"
          placeholder="price"
          name="price"
          defaultValue={updateData?.price}
        />
        <button className="text-white px-2 py-1 bg-blue-500 focus:right-2 rounded-md">
          Submit
        </button>
      </form>
    </dialog>
  );
};

export default forwardRef(Modal);
