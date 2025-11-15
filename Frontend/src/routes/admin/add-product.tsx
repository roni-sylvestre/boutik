import { createFileRoute } from "@tanstack/react-router";
import AddProduct from "../../pages/Admin/AddProduct/AddProduct";

export const Route = createFileRoute("/admin/add-product")({
  component: AddProduct,
});
