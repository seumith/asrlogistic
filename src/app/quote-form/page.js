import SecondaryBtn from "../components/buttons/secondary-btn";
import QouteForm from "../components/qoute/page";
const page = () => {
    return (
        <>
            <div className="w-[25rem] m-auto w-max-[25rem]">
                <QouteForm />
                <div>
                    <SecondaryBtn title="home" link="/" arrD="hidden" />
                </div>
            </div>
        </>
    )
}

export default page