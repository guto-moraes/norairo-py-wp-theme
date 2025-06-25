import { useRef } from "react";

const StatsAnimate = () => {
  const first = useRef<HTMLDetailsElement | null>(null);
  const second = useRef<HTMLDetailsElement | null>(null);
  const thirth = useRef<HTMLDetailsElement | null>(null);

  const targets: Array<{
    element: HTMLDetailsElement | null;
    count: number;
    suffix: string;
  }> = [
    { element: first.current, count: 256, suffix: "" },
    { element: second.current, count: 632, suffix: "+" },
    { element: thirth.current, count: 5, suffix: "" },
  ];

  const maxCount: number = Math.max(...targets.map((target) => target.count));

  function animateCountUp(
    target: {
      element: HTMLDetailsElement | null;
      count: number;
      suffix: string;
    },
    duration: number
  ): void {
    let currentCount: number = 0;
    const increment: number = Math.ceil(target.count / (duration / 10));

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target.count) {
        clearInterval(interval);
        currentCount = target.count;
        if (target.element) {
          target.element.textContent = currentCount + target.suffix;
        }
      } else {
        if (target.element) {
          target.element.textContent = currentCount.toString();
        }
      }
    }, 10);
  }

  targets.forEach((target) => {
    animateCountUp(target, maxCount / 100);
  });

  return (
    <div className="h-screen dark:bg-gray-900">
      <div className="pt-12 bg-gray-50 dark:bg-gray-900 sm:pt-20">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-white sm:text-4xl sm:leading-10">
              Trusted by developers
            </h2>
            <p className="mt-3 text-xl leading-7 text-gray-600 dark:text-gray-400 sm:mt-4">
              This package powers many production applications on many different
              hosting platforms.
            </p>
          </div>
        </div>
        <div className="pb-12 mt-10 bg-gray-50 dark:bg-gray-900 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50 dark:bg-gray-900"></div>
            <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="bg-white dark:bg-gray-800 rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col p-6 text-center border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-r">
                    <dt
                      className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400"
                      id="item-1"
                    >
                      Stars on GitHub
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                      aria-describedby="item-1"
                      ref={first}
                    >
                      0
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                      Downloads
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                      ref={second}
                    >
                      0
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                      Sponsors
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                      ref={thirth}
                    >
                      0
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsAnimate;
