import profilePic from '../dme.png'
import Image from 'next/image'
function kuda() {

    return (
<div>
    <h1>halo ini jason</h1>

    <Image
        src={profilePic}
        alt="Picture of the author"
      />
</div>

    )

}

export default kuda