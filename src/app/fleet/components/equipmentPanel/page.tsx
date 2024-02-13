"use client"

import AnimatedText from "@/components/animation/page";

const EquipmentPanel = () => {
  return (
    <>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container max-w-xl p-6 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div className="grid ">
              <div className="mt-10">
                <img src="/static/images/fleet/type.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 filter grayscale hover:filter-none hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" />
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default EquipmentPanel