import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <section className={"m-5 mt-10"}>
        <Outlet />
      </section>
    </>
  );
}

export default RootLayout;
