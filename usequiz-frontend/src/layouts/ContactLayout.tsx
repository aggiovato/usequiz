import { Outlet } from "react-router-dom";

const ContactLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] h-full min-h-screen">
      <div className="p-6 md:p-12">
        <Outlet />
      </div>

      <div className="bg-dark-teal text-white p-6 md:p-12 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl text-amber-glow font-bold mb-4">
            Contact info
          </h1>
          <p className="text-sm mb-2">Name: John Doe</p>
          <p className="text-sm mb-2">Email: johndoe@example.com</p>
          <p className="text-sm mb-2">Phone: +1 234 567 890</p>
        </div>
        <div className="text-xs text-gray-300 mt-8">
          <p>This information is included automatically when sending a form.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactLayout;
