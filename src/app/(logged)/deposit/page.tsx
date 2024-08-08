import DepositForm from "./DepositForm";
import { submit } from "./action";

export default function Page() {
  return <DepositForm onSubmit={submit} />;
}
