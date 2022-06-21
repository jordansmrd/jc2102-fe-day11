import Page from "../../components/Page"
import { useRouter } from "next/router";
function kuda2() {
    const router = useRouter()
    const url = "http://localhost:3001/" + router.pathname;

    return (
        <Page title="detail kuda" description="tempat ngumpul anak kuda" image="https://i.pinimg.com/550x/2e/a9/6e/2ea96e3342c7be456b9d0286672fff89.jpg"
     url={url} type="website">
<div>
    <h1>halo ini detail</h1>
</div>
</Page>

    )

}

export default kuda2