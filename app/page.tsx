import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div aria-label="Card" className="card bg-base-100 card-bordered">
          <div className="card-body">
            <div className="card-title">Counter</div>
            <div className="mt-1 flex flex-wrap items-center gap-3 space-y-1">
              <div
                aria-label="Group of 4 avatar photos"
                className="avatar-group -space-x-6"
              >
                <div aria-label="Avatar photo" className="avatar">
                  <div className="bg-base-content/10 rounded-full w-14 h-14">
                    <img src="../app/assests/img.png" alt="Avatar" />
                  </div>
                </div>
                <div aria-label="Avatar photo" className="avatar">
                  <div className="bg-base-content/10 rounded-full w-14 h-14">
                    <img src="../app/assests/img.png" alt="Avatar" />
                  </div>
                </div>
                <div aria-label="Avatar photo" className="avatar">
                  <div className="bg-base-content/10 rounded-full w-14 h-14">
                    <img src="../app/assests/img.png" alt="Avatar" />
                  </div>
                </div>
                <div aria-label="Avatar photo" className="avatar placeholder">
                  <div className="font-medium bg-neutral-focus text-neutral-content w-14 h-14">
                    <span>+99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          classNameName="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          classNameName="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          classNameName="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
