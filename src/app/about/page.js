"use client"
import SecondaryBtn from "../components/buttons/secondary-btn"
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import Image from "next/image"
import "./about.css"
import { FaRegCircleCheck } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
const Aboutus = () => {
  return (
    <section className="about-section pl-2 md:pl-0">
      <h1 className="text-[2.2rem] mt-[3rem] md:mt-0 lg:text-center">About us</h1>
      <hr className="w-[12rem] border-2 border-primary-blue lg:m-auto"/>
      <div className="flex items-center flex-col lg:flex-row lg:gap-[3rem]">
      <div>
      <h2 className=" leading-8 md:leading-normal text-[1.4rem] md:text-2xl mt-8 text-sub-heading font-semibold">We at ASR packers and movers in Delhi</h2>
      <p className="text-paragraph mt-4">ASR Packers and Movers in Delhi is one of the Most Reliable, Trusted and Affordable leading Moving service provider in Delhi. We are Experts in Packing and Moving, Loading and Unloading, Local Shifting, House Shifting, Office Shifting, Vehicle shifting (Car, bike etc.), insurance services, warehouse and storages services in Delhi to all over India. Are you Searching for Packers and Movers in Delhi? if yes, then ASR Packers and Movers in Delhi is here for you. To fulfil all of your Shifting requirements such as house shifting services, office Shifting Services Delhi, we are providing our best quality services. We help our Cutsomers to stay free From all types of hassles included in the packing and relocation process. We make this happen with the help of our well-experienced professionals team who is well trained in each effective technique used to move any house-hold or office item From one place to another place safely and on-time. ASR Packers and Movers is the most respected and recommended Movers in ASR with network in all over India.</p>
      </div>
      <Image src={"/loadingUnloading.jpg"} alt="image" className="mt-6 lg:mt-0 object-cover w-[95%] lg:w-[full] h-[330px] rounded-md" width={500} height={300}/>
      </div>
      <div className="table-container flex flex-col lg:flex-row">
      <div>
      <h2 className=" leading-8 md:leading-normal text-[1.4rem] md:text-2xl mt-8 text-sub-heading font-semibold">What we offer ?</h2>
      <Table className="mt-6 w-[95%]" aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Service</TableColumn>
        <TableColumn></TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Loading and Unloading service</TableCell>
          <TableCell><FaRegCircleCheck className="tick" /></TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Household goods shifting</TableCell>
          <TableCell><FaRegCircleCheck className="tick" /></TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Car transportation service</TableCell>
          <TableCell><FaRegCircleCheck className="tick" /></TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Industrial goods shifting</TableCell>
          <TableCell><FaRegCircleCheck className="tick" /></TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell>Office shifting service</TableCell>
          <TableCell><FaRegCircleCheck className="tick" /></TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>Warehouse and storage service</TableCell>
          <TableCell><FaRegCircleCheck className="tick" /></TableCell>
        </TableRow>
        <TableRow key="7">
          <TableCell>Goods insurance service</TableCell>
          <TableCell><FaRegCircleCheck className="tick" /></TableCell>
        </TableRow>
      </TableBody>
    </Table>
      </div>
      <div>
      <h2 className=" leading-8 md:leading-normal text-[1.4rem] md:text-2xl mt-8 text-sub-heading font-semibold">Our mission</h2>
      <Table className="mt-6 w-[95%]" aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Mission</TableColumn>
        <TableColumn></TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Deliver Environmentally Responsible Client Services</TableCell>
          <TableCell><FaRegCircleCheck className="tick" /></TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Provide Employees with an Attractive Working Environment</TableCell>
          <TableCell><FaRegCircleCheck className="tick" /></TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Be an Active community Partner</TableCell>
          <TableCell><FaRegCircleCheck className="tick" /></TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Maintain High Ethical Standards</TableCell>
          <TableCell><FaRegCircleCheck className="tick" /></TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell>Drive Continuous Improvement</TableCell>
          <TableCell><FaRegCircleCheck className="tick" /></TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>Freight Security</TableCell>
          <TableCell><FaRegCircleCheck className="tick" /></TableCell>
        </TableRow>
        <TableRow key="7">
          <TableCell>Air & Ocean Cargo Insurance</TableCell>
          <TableCell><FaRegCircleCheck className="tick" /></TableCell>
        </TableRow>
        <TableRow key="8">
          <TableCell>Our highly efficient custASRs brokerage</TableCell>
          <TableCell><FaRegCircleCheck className="tick" /></TableCell>
        </TableRow>
        <TableRow key="9">
          <TableCell>Clearance and compliance service</TableCell>
          <TableCell><FaRegCircleCheck className="tick" /></TableCell>
        </TableRow>
        <TableRow key="10">
          <TableCell>We ensure complete security</TableCell>
          <TableCell><FaRegCircleCheck className="tick" /></TableCell>
        </TableRow>
      </TableBody>
    </Table>
      </div>
      </div>
      <h2 className=" leading-8 md:leading-normal text-[1.4rem] md:text-2xl mt-8 text-sub-heading font-semibold">ASR Packers and Movers in Delhi: Your Trusted Partner for Seamless Relocations -</h2>
      <p className="text-paragraph mt-4">ASR Logistics Packers and Movers in Delhi is a leading moving service provider, renowned for its reliability, trustworthiness, and affordability. Our expertise lies in packing and moving, loading and unloading, local shifting, house shifting, office shifting, vehicle shifting (including cars and bikes), insurance services, and warehouse and storage services in Delhi, catering to clients across India.</p>
      <h2 className=" leading-8 md:leading-normal text-[1.4rem] md:text-2xl mt-8 text-sub-heading font-semibold">Searching for Packers and Movers in Delhi? -</h2>
      <p className="text-paragraph mt-4">If you are seeking a dependable partner for your shifting requirements, ASR Logistics Packers and Movers in Delhi is here to assist you. We offer top-notch services to fulfill all your needs, including house shifting services and office shifting services in Delhi. Our goal is to ensure a hassle-free relocation experience for our valued customers.</p>
      <h2 className=" leading-8 md:leading-normal text-[1.4rem] md:text-2xl mt-8 text-sub-heading font-semibold">Our Commitment to Excellence -</h2>
      <p className="text-paragraph mt-4">Our team of well-experienced professionals is trained in the latest techniques to safely and efficiently move any household or office item from one location to another. With our expertise, you can rest assured that your belongings will be handled with care and delivered on time. ASR Logistics Packers and Movers is the most respected and recommended movers in Delhi, with an extensive network spanning across India.</p>
      <SecondaryBtn title="back" link="/" arrD="hidden"/>
    </section>
  )
}

export default Aboutus