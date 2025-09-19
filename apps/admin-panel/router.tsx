import Authentication from "@/pages/authentication/index.js";
import { Listing } from "@/pages/listing/index.js";
import ListingDetail from "@/pages/listing/listingDetail/index.js";
import { TeamMembers } from "@/pages/teamMembers/index.js";
import { CONSTANTS } from "@repo/utilities";
import { lazy } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from "react-router";
import "./i18n.js";
import Media from "@/pages/media/index.js";
import Support from "@/pages/support/index.js";
import Billing from "@/pages/billing/index.js";
import Defaults from "@/pages/defaults/index.js";

const Error = lazy(() => import("./src/pages/error"));
const Layout = lazy(() => import("./src/layout"));

function ErrorBoundary() {
  const error = useRouteError();
  console.error("Route Error = ", error);
  return <Error />;
}

const Router = () => {
  const router = createBrowserRouter([
    {
      path: CONSTANTS.PATHS.ROOT,
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: CONSTANTS.PATHS.LISTING,
          element: <Listing />,
        },
        {
          path: CONSTANTS.PATHS.LISTING_DETAIL,
          element: <ListingDetail />,
        },
        {
          path: CONSTANTS.PATHS.MEDIA,
          element: <Media />,
        },
        {
          path: CONSTANTS.PATHS.DEFAULTS,
          element: <Defaults />,
        },
        {
          path: CONSTANTS.PATHS.TEAM_MEMBERS,
          element: <TeamMembers />,
        },
        {
          path: CONSTANTS.PATHS.BILLING,
          element: <Billing />,
        },
        {
          path: CONSTANTS.PATHS.SUPPORT,
          element: <Support />,
        },
        // {
        //   path: CONSTANTS.PATHS.INSPIRATION,
        //   element: <INSPIRATION />,
        // },
      ],
    },
    {
      path: CONSTANTS?.PATHS?.AUTHENTICATION,
      element: <Authentication />,
    },

    {
      path: "*",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
