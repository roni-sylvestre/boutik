import { createFileRoute } from '@tanstack/react-router'
import ChartPage from "../../pages/Admin/ChartPage/ChartPage"

export const Route = createFileRoute('/admin/charts')({
  component: ChartPage,
})

