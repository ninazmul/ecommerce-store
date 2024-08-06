import CallToAction from "@/components/call-to-action";
import Head from "next/head";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>About Us - GhaniGhor.com</title>
        <meta
          name="description"
          content="Learn about us, we provide pure mustard oil made of ghani of cow."
        />
      </Head>

      <header className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">About Us</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            ঘানিঘরে আপনাকে স্বাগতম!
          </h2>
          <p className="text-gray-700">
            আমাদের কাছে পেয়ে যাবেন শতভাগ বিশুদ্ধ এবং খাঁটি সরিষার তেল। আমাদের
            তেল সম্পূর্ণ গরুর ঘানির সাহায্যে ভাঙানো হয়।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">আমাদের পণ্য সমূহ :</h2>
          <h3 className="text-xl font-semibold mb-2">সরিষার তেল</h3>
          <p className="text-gray-700 mb-4">
            আমাদের সরিষার তেল হল আমাদের মূল পণ্য। এটি গরুর সাহায্যে ঐতিহ্যবাহী
            ঘানি পদ্ধতি ব্যবহার করে তৈরি করা হয়, যার প্রতিটি ফোঁটা প্রাকৃতিক
            গুণে পরিপূর্ণ। এই প্রাচীন পদ্ধতিটি সমৃদ্ধ স্বাদ এবং পুষ্টিমূল্য
            সংরক্ষণ করে, যা এটিকে রান্নার জন্য এবং থেরাপিউটিক অ্যাপ্লিকেশনের
            জন্য উপযুক্ত করে তোলে। এর শক্তিশালী স্বাদ এবং অসংখ্য স্বাস্থ্য
            উপকারিতার জন্য আমাদের সরিষার তেল অনেক পরিবারের জন্য অপরিহার্য।
          </p>
          <h3 className="text-xl font-semibold mb-2">নারকেল তেল</h3>
          <p className="text-gray-700 mb-4">
            আমাদের নারকেল তেল সর্বোত্তম নারকেল থেকে সংগ্রহ করা হয়, এবং এর
            প্রাকৃতিক সুগন্ধ, স্বাদ এবং স্বাস্থ্য উপকারিতা বজায় রাখে। আপনি এটি
            রান্নার জন্য, ত্বকের যত্ন বা চুলের যত্নের জন্য ব্যবহার করতে পারবেন,
            আমাদের নারকেল তেল আপনার দৈনন্দিন রুটিনের জন্য একটি বহুমুখী সংযোজন।
          </p>
          <h3 className="text-xl font-semibold mb-2">কালোজিরা তেল</h3>
          <p className="text-gray-700 mb-4">
            এর শক্তিশালী স্বাস্থ্য উপকারিতার জন্য এটি পরিচিত, আমাদের কালোজিরা
            তেল সাবধানে এর কার্যকারিতা এবং বিশুদ্ধতা বজায় রাখার জন্য নিষ্কাশন
            করা হয়। এই তেল আপনার সামগ্রিক সুস্থতা উন্নত করার জন্য একটি চমৎকার
            সম্পূরক।
          </p>
        </section>
        <CallToAction />
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">আমাদের প্রতিশ্রুতি</h2>
          <p className="text-gray-700">
            ঘানিঘরে এ, গুণমান এবং প্রামাণিকতা আমাদের প্রধান অগ্রাধিকার। আমরা এমন
            তেল সরবরাহ করতে প্রতিশ্রুতিবদ্ধ যা অ্যাডিটিভ, প্রিজারভেটিভ এবং
            কৃত্রিম উপাদান মুক্ত। আমাদের তেলগুলি টেকসই পদ্ধতি ব্যবহার করে
            উৎপাদিত হয় যা ঐতিহ্যবাহী অনুশীলনকে সম্মান করে এবং পরিবেশের প্রতি
            শ্রদ্ধাশীল।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            কেন আমাদের থেকে তেল কিনবেন?
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">
              গুণমানের নিশ্চয়তা: আমরা শুধুমাত্র সেরা উপাদান সংগ্রহ করি এবং কঠোর
              মান নিয়ন্ত্রণ প্রক্রিয়া অনুসরণ করি।
            </li>
            <li className="mb-2">
              ঐতিহ্যগতভাবে তৈরি: আমাদের তেলগুলি প্রাচীন পদ্ধতিতে তৈরি করা হয় যা
              সর্বাধিক স্বাস্থ্য উপকারিতা নিশ্চিত করে।
            </li>
            <li className="mb-2">
              গ্রাহক সন্তুষ্টি: আমরা চমৎকার গ্রাহক পরিষেবা প্রদান এবং প্রতিটি
              ক্রয়ে আপনার সন্তুষ্টি নিশ্চিত করতে নিবেদিত।
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">আমাদের গ্রুপে যোগ দিন</h2>
          <p className="text-gray-700">
            আমরা আপনাকে আমাদের তেলের পরিসর অন্বেষণ করতে এবং গুণমান এবং ঐতিহ্য যা
            পার্থক্য করতে পারে তা অনুভব করতে আমন্ত্রণ জানাই। সেই স্বাস্থ্য সচেতন
            ব্যক্তিদের গ্রুপে যোগ দিন যারা তাদের তেলের চাহিদার জন্য ঘানিঘর কে
            বিশ্বাস করে।
          </p>
          <p className="text-gray-700 mt-4">
            ঘানিঘরকে নির্বাচন করার জন্য ধন্যবাদ। আমরা আপনাকে সেবা দিতে এবং আপনার
            স্বাস্থ্য এবং সুস্থতার যাত্রার একটি অংশ হতে উন্মুখ।
          </p>
        </section>
      </main>
    </div>
  );
};

export default Page;
