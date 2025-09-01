import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/proyectos/components/card')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/proyectos/components/card"!</div>
}
