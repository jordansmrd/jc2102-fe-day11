import { useRouter } from "next/router"

function bandung() {
    const router = useRouter()
  return (
    <div>
      <h1>Hello this is {router.query.productId}</h1>
    </div>
  );
}

export default bandung;
