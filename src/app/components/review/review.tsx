export interface ReviewProps {
  movieTitle: string;
  note: number;
  comment: string;
  author: string;
  creation_time?: string;
}

export default function Review(props: ReviewProps) {
  return (
    // from-indigo-500 via-purple-500 to-pink-500
    <div
      id="review"
      className={`border-4 border-white rounded-lg w-auto min-w-50 sm:w-96 p-3 m-3 `}
    >
      <p className="font-bold text-center text-sm sm:text-1xl">
        Autor: {props.author}
      </p>
      <p className="font-bold text-center text-base sm:text-1xl">
        Filme: {props.movieTitle}
      </p>
      <p className="font-bold text-center text-base sm:text-1xl">
        Nota: {props.note}
      </p>
      <p className="font-bold text-center text-base text-justify mt-3">
        {props.comment}
      </p>
    </div>
  );
}
