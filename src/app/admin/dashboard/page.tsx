import Image from "next/image"
import ProfilePicExample from '../../../assets/admin/profile-example.png'

export default function Dashboard(){
    return(
        <>
            <div className="w-screen h-screen bg-slate-300 flex">
                <div className="h-full w-96 bg-green-500">

                </div>
                <div className="bg-blue-500 h-full w-1/3 p-6 flex flex-col gap-6">
                    <section className="w-full bg-red-500 h-52 rounded-lg flex flex-col items-center justify-around">
                        <Image
                            src={ProfilePicExample}
                            alt="Profile Pic"
                            width="100"
                            className="rounded-full"
                        />
                        <h1>Gabriel Fernandes</h1>
                        <h2>Biografia</h2>
                    </section>
                    <div className="w-full flex gap-6">
                        <section className="bg-red-500 h-72 rounded-lg w-6/12">

                        </section>
                        <section className="bg-red-500 h-72 rounded-lg w-6/12">

                        </section>
                    </div>
                    <section className="w-full bg-red-500 h-28 rounded-lg">
                    </section>
                    <section className="w-full bg-red-500 h-28 rounded-lg">
                    </section>
                </div>
                <div className="bg-blue-500 w-2/3 h-full py-6 gap-6 flex flex-col pr-6">
                    <section className="w-full flex bg-red-500 h-36 rounded-lg">
                    </section>
                    <section className="w-full bg-red-500 flex flex-grow rounded-lg">

                    </section>
                </div>
            </div>
        </>
    )
}