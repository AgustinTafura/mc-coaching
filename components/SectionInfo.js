import { useRouter } from "next/router"

const SectionInfo = () => {
    const router = useRouter()
    const {asPath} = router
    const title = asPath.replace("/", '').replace("/", ' /').replace("-", " ").replace('servicios /', '')

    return (
        <section className="info02 cid-rSVC8dfBcs pb-3" id="info2-1s">
        <div className="container align-center">
            <div className="row justify-content-center">
                <div className="mbr-black col-md-12 col-lg-10">
                    <h3 className="mbr-section-title mbr-bold mbr-white pb-2 mbr-fonts-style display-22 text-capitalize">
                        {
                        title.includes('/') ? 
                            (
                                <a onClick={() => router.back()} style={{color: 'unset'}}>
                                    {title.replace(title.substring(title.lastIndexOf('/'), title.length), '')}
                                </a>
                                )  
                            : title
                        }
                    </h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionInfo