import { useAppSelector } from "@/redux/store";
import { shallowEqual } from "react-redux";
import { Outlet } from "react-router";
import ScrollToTop from "./scrollToTop/scrollToTop";
import { SideBar } from "./sideBar";
import "./style.css";
import TopBar from "./topBar";

// export const SIDEBAR_BREAKPOINT: number = 900;

const Layout = () => {
  // Hooks
  // const { width } = useWindowSize();
  // const dispatch = useDispatch<AppDispatch>();

  // Redux States
  const { sideBarMode } = useAppSelector(
    (state) => ({
      sideBarMode: state.sideBarMode.sideBarMode,
    }),
    shallowEqual
  );

  // const sideBarRef = useRef<HTMLDivElement | null>(null);

  // const [sideBarWidth, setSideBarWidth] = useState(0);

  // Functions
  // const openSideBar = () => {
  //   dispatch(openDrawer());
  // };

  // const toggleDrawer = () => {
  //   dispatch(closeDrawer());
  // };

  // UseEffects
  // useEffect(() => {
  //   const handleKeyDown = (event: any) => {
  //     if (event.key === "Escape") {
  //       dispatch(closeDrawer());
  //     }
  //   };

  //   if (isOpen) {
  //     document.body.classList.add("modal-open");
  //     document.addEventListener("keydown", handleKeyDown);
  //   } else {
  //     document.body.classList.remove("modal-open");
  //     document.removeEventListener("keydown", handleKeyDown);
  //   }

  //   return () => {
  //     document.body.classList.remove("modal-open");
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [isOpen]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (sideBarRef?.current) {
  //       setSideBarWidth(sideBarRef?.current?.offsetWidth);
  //     }
  //   };

  //   handleResize();

  //   window?.addEventListener("resize", handleResize);

  //   return () => {
  //     window?.removeEventListener("resize", handleResize);
  //   };
  // }, [sideBarRef]);

  // Components
  // const CustomLoading = () => {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100dvh",
  //       }}
  //     >
  //       <CustomLoading />
  //     </div>
  //   );
  // };

  // const currentPath =

  return (
    <div>
      <ScrollToTop />
      <SideBar />
      <div
        className={"layoutSubMainContainer"}
        style={{
          // width:
          //   (width ?? 0) < SIDEBAR_BREAKPOINT
          //     ? "100%"
          //     : sideBarMode === "expanded"
          //       ? "calc(100% - var(--side-bar-expanded-width))"
          //       : "calc(100% - var(--side-bar-collapsed-width))",

          width:
            sideBarMode === "expanded"
              ? "calc(100% - var(--side-bar-expanded-width))"
              : "calc(100% - var(--side-bar-collapsed-width))",
        }}
      >
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

// {true ? (
//         <div>
//           <div>
//             {width && width <= 900 ? (
//               <Drawer
//                 // open={isOpen}
//                 // onClose={toggleDrawer}
//                 direction="left"
//                 style={{
//                   backgroundColor: "transparent",
//                   boxShadow: "none",
//                   height: "100dvh",
//                   position: "fixed",
//                 }}
//                 size={sideBarWidth}
//               >
//                 {/* <SideBar reference={sideBarRef} /> */}
//               </Drawer>
//             ) : (
//               // <SideBar reference={sideBarRef} />
//             )}
//           </div>
//           <div>
//             <div className="layoutSubContainer">
//               {/* <TopBar onClick={openSideBar} /> */}
//               <div
//                 className="layoutSubMainContainer"
//                 data-aos="fade"
//                 data-aos-delay="400"
//               >
//                 <Suspense fallback={<CustomLoading />}>
//                   <ScrollToTop />
//                   <Outlet />
//                 </Suspense>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <Navigate to={"/login"} />
//       )}
