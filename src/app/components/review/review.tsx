export interface ReviewProps {
  movieTitle: string;
  note: number;
  comment: string;
}

export default function Review(props: ReviewProps) {
  return (
    <div
      id="review"
      className="border-2 border-white rounded-lg w-auto min-w-50 sm:w-96 p-3 m-3"
    >
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
