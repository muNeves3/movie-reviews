"use client";
import { doc, setDoc } from "firebase/firestore";
import db from "../../utils/db";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";

export default function NewReview() {
  const { push } = useRouter();
  async function onSubmit(formData: any) {
    const review = {
      movieTitle: formData.get("movieTitle"),
      note: formData.get("note"),
      author: formData.get("author"),
      comment: formData.get("comment"),
      creation_time: new Date().toISOString(),
    };

    await setDoc(doc(db, "Review", v4()), review);

    push("/");
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-5 min-h-full">
      <form className="w-full max-w-lg" action={onSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Nome do filme
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Filme"
              name="movieTitle"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Nota
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              placeholder="0-10"
              name="note"
              min={0}
              max={10}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Autor
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Autor"
              name="author"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Comentários
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-5 w-full resize sm:w-max text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Sua resenha aqui..."
                name="comment"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3 sm:mt-5"
          >
            Enviar
          </button>
        </div>
      </form>
    </main>
  );
}
