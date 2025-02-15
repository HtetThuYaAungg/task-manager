import { toast } from "react-toastify";

const Notification = (
  message: string,
  type: "info" | "success" | "warn" | "error"
) => {
  if (!toast[type]) {
    console.log(`Invalid toast type: ${type}`);
    return;
  }
  return toast[type](message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export default Notification;
