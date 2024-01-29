import { Sora } from "next/font/google"

export default function LetterThankU() {
    return (
        <div>
            <div className="card">
                <div
                    className="relative bg-black w-[300px] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center">
                    <div
                        className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16"
                    >
                        <strong className="text-xl sm:text-2xl font-semibold text-gray-500 ">
                            Muito Obrigado!
                        </strong>
                        <p className="px-10 text-center text-[10px] sm:text-[12px] text-gray-700">
                            Faça o login para acessar o incrível Calendário de Eventos.
                        </p>
                        <p className="text-center px-5 w-3/5 text-[10px] text-gray-700">
                            Gerencie suas atividades diárias, adicione, edite e remova eventos facilmente.</p>
                    </div>
                    <button className="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900">
                        ABRA
                    </button>
                    <div className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
                    <div className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
                    <div className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
                    <div className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
                </div>
            </div>

        </div>
    )
}