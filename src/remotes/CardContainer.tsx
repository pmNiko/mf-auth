import { Suspense, lazy } from "react";
import { WithErrorBoundary } from "../components/WithErrorBoundary";

const CardContainer = lazy(() => import("mfe-shell/CardContainer"));

interface Props {
  children?: JSX.Element | JSX.Element[];
  [x: string]: any;
}

export default ({ children, ...rest }: Props) => (
  <Suspense fallback={<>Cargando...</>}>
    <WithErrorBoundary>
      <CardContainer {...rest}>{children}</CardContainer>
    </WithErrorBoundary>
  </Suspense>
);
