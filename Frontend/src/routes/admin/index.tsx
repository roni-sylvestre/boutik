import { createFileRoute } from '@tanstack/react-router'
import Dashboard from '../../pages/Admin/Dashboard/Dashboard'

export const Route = createFileRoute('/admin/')({
  component: Dashboard,
})

