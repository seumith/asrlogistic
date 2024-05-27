import SecondaryBtn from "../components/buttons/secondary-btn";
import QouteForm from "../components/quote/page";
const page = () => {
    return (
        <>
            <div className="w-[95%] m-auto md:w-[55rem]">
                <QouteForm />
                <div>
                    <SecondaryBtn title="home" link="/" arrD="hidden" />
                </div>
            </div>
        </>
    )
}

export default page