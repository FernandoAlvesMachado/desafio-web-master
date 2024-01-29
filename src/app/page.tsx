import LetterThankU from "./components/LetterThankU";
import FormLogin from "@/app/components/FormLogin"

export default function Home() {


  return (
    <div className="bg-zinc-100 w-screen h-screen">
      <div className="flex w-full h-full">
        <div className="flex w-1/2 bg-gradient-to-t text-white to-blue-500 from-blue-800  items-center justify-center  h-full">
          <div className="flex w-full items-center flex-col">
            <LetterThankU />
            {/* <strong className="text-3xl">Seja bem vindo!</strong>
            <p>Faça o login para acessar o incrível Calendário de Eventos. Gerencie suas atividades diárias, adicione, edite e remova eventos facilmente. Torne seu dia mais organizado com o nosso aplicativo!</p> */}
          </div>
        </div>
        <div className="flex w-1/2 bg-white items-center justify-center  h-full">
          <div className="flex items-center justify-center">
            <div className="flex flex-col text-black gap-10">
              <FormLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
