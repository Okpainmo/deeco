function Notification({ children, toast }) {
  return (
    <div
      className={`${
        toast.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg pointer-events-auto p-6`}
    >
      {children}
    </div>
  );
}

export default Notification;
