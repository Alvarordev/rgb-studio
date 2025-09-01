import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RouteComponent = () => {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRoute({
  component: RouteComponent,
  errorComponent: ({ error }) => {
    return (
      <div className="error-container">
        <h1>¡Ups! Algo salió mal</h1>
        <p>{error?.message || 'Error desconocido'}</p>
        <button onClick={() => window.location.href = '/'}>
          Volver al inicio
        </button>
      </div>
    )
  },
});
