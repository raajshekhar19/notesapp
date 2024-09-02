import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div>
          <input placeholder="Enter the Title" />
          <textarea placeholder="Enter the Text" />
        </div>
      </main>
    </>
  );
};
