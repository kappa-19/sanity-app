import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
//@ts-ignore
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import StudioNavbar from "./components/StudioNavbar";
import Logo from "./components/Logo";
import { getDefaultDocumentNode } from "./lib/structure";

const projectId = "bino0dp2";
const dataset = "production";

export default defineConfig({
  basePath: "/studio", //rendering on website
  name: "course-app",
  title: "course-app",
  projectId,
  dataset,

  plugins: [
    deskTool({ defaultDocumentNode: getDefaultDocumentNode }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
