import { Toaster } from "react-hot-toast";

function ToasterNotif() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        success: {
          style: {
            border: "1px solid green",
            background: "#f0fff0",
            color: "green",
          },
          iconTheme: {
            primary: "green",
            secondary: "white",
          },
        },
        error: {
          style: {
            border: "1px solid red",
            background: "#ffe5e5",
            color: "red",
          },
          iconTheme: {
            primary: "red",
            secondary: "white",
          },
        },
      }}
    />
  );
}

export default ToasterNotif;
