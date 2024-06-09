import Image from "next/image";
import Eueela from "../../images/eueeela.png";
import Review, { ReviewProps } from "./components/review/review";

import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import db from "../utils/db";

async function getReviews() {
  let docs: ReviewProps[] = [];
  const q = query(collection(db, "Review"));
  const querySnapshot = await getDocs(q);
  querySnapshot.docs.forEach((doc) => {
    docs.push(doc.data() as ReviewProps);
  });

  return docs;
}

export default async function Home() {
  const docs = await getReviews();

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="font-bold text-center text-2xl p-2 sm:text-3xl">
        Reviews de Cinema Mel e Murilo
      </h1>
      <div className="flex items-center flex-col justify-center">
        <Image
          src={Eueela}
          alt="Eu e você"
          width={300}
          height={300}
          className="rounded-full"
        />

        <div className="p-5">
          <p className="font-bold text-center text-3xl sm:text-2xl">Reviews</p>
          <div id="reviews-group" className="p-4">
            {docs.map((review, index) => (
              <Review
                key={index}
                movieTitle={review.movieTitle}
                note={review.note}
                comment={review.comment}
                author={review.author}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
