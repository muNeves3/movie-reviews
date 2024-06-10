"use client";
import Image from "next/image";
import Eueela from "../../images/eueeela.png";
import Review, { ReviewProps } from "./components/review/review";

import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore";
import db from "../utils/db";
import Link from "next/link";
import { useEffect, useState } from "react";

async function getReviews() {
  let docs: ReviewProps[] = [];
  const q = query(collection(db, "Review"), orderBy("creation_time", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.docs.forEach((doc) => {
    docs.push(doc.data() as ReviewProps);
  });

  return docs;
}

// const docs = await getReviews();

export default function Home() {
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  useEffect(() => {
    getReviews().then((reviews) => setReviews(reviews));
  }, []);

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
        <Link
          href="/novaReview"
          type="submit"
          className="bg-blue-400 mt-3 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded ml-3 sm:mt-5"
        >
          Nova review
        </Link>

        <div className="p-5">
          <p className="font-bold text-center text-3xl sm:text-2xl">Reviews</p>
          <div id="reviews-group" className="p-4">
            {reviews.map((review, index) => (
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
