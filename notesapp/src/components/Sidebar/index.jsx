import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const getStyles = ({ isActive }) => {
    const styles = "flex align-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full";
    return isActive? `bg-indigo-800 text-white ${styles}`: `hover:bg-indigo-800 hover:text-white	  ${styles}`;
  };

  return (
    <aside className="flex flex-col gap-3 border-r-2 w-[150px] p-3 h-screen">
      <NavLink className={getStyles} to="/">
        <span className="material-symbols-outlined">home</span>
        <span>Home</span>
      </NavLink>
      <NavLink className={getStyles} to="/archive">
        <span className="material-symbols-outlined">archive</span>
        <span>Archive</span>
      </NavLink>
      <NavLink className={getStyles} to="/important">
        <span className="material-symbols-outlined">label_important</span>
        <span>Important</span>
      </NavLink>
      <NavLink className={getStyles} to="/bin">
        <span className="material-symbols-outlined">delete</span>
        <span>Bin</span>
      </NavLink>
    </aside>
  );
};
