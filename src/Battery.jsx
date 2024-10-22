import { useLocation } from "react-router-dom";

function Battery() {
  const location = useLocation();
  const data = location.state.data;
  console.log(data);

  function renderBattery() {
    switch (data.type) {
      case "toyota":
        return (
          <>
            <div className="bg-white flex flex-col p-3 rounded-lg">
              <img className="object-contain w-[70%] flex-1 mx-auto" src="/toyota.jpeg" alt="battery img" />
              <div className="mt-auto font-bold">200 AED</div>
            </div>

            <div className="bg-white flex flex-col p-3 rounded-lg" >
              <img className="object-contain w-[70%] flex-1 mx-auto" src="/toyota1.jpeg" alt="battery img" />
              <div className="mt-auto font-bold">300 AED</div>
            </div>

            <div className="bg-white flex flex-col p-3 rounded-lg">
              <img className="object-contain w-[70%] flex-1 mx-auto" src="/toyota2.jpeg" alt="battery img" />
              <div className="mt-auto font-bold">150 AED</div>
            </div>
          </>
        );
      case "nissan":
        return (
          <>
            <div className="bg-white flex flex-col p-3 rounded-lg">
              <img className="object-contain w-[70%] flex-1 mx-auto" src="/nissan.jpeg" alt="battery img" />
              <div className="mt-auto font-bold">175 AED</div>
            </div>

            <div className="bg-white flex flex-col p-3 rounded-lg">
              <img className="object-contain w-[70%] flex-1 mx-auto" src="/nissan1.jpeg" alt="battery img" />
              <div className="mt-auto font-bold">350 AED</div>
            </div>

            <div className="bg-white flex flex-col p-3 rounded-lg">
              <img className="object-contain w-[70%] flex-1 mx-auto" src="/nissan2.jpeg" alt="battery img" />
              <div className="mt-auto font-bold">100 AED</div>
            </div>
          </>
        );

      case "bmw":
        return (
          <>
            <div className="bg-white flex flex-col p-3 rounded-lg">
              <img className="object-contain w-[70%] flex-1 mx-auto" src="/bmw.jpeg" alt="battery img" />
              <div className="mt-auto font-bold">250 AED</div>
            </div>

            <div className="bg-white flex flex-col p-3 rounded-lg">
              <img className="object-contain w-[70%] flex-1 mx-auto" src="/bmw1.jpeg" alt="battery img" />
              <div className="mt-auto font-bold">300 AED</div>
            </div>

            <div className="bg-white flex flex-col p-3 rounded-lg">
              <img className="object-contain w-[70%] flex-1 mx-auto" src="/bmw2.jpeg" alt="battery img" />
              <div className="mt-auto font-bold">180 AED</div>
            </div>
          </>
        );

      case "mercedes":
        return (
          <>
            <div className="bg-white flex flex-col p-3 rounded-lg">
              <img className="object-contain w-[70%] flex-1 mx-auto" src="/merc.jpeg" alt="battery img" />
              <div className="mt-auto font-bold">275 AED</div>
            </div>

            <div className="bg-white flex flex-col p-3 rounded-lg">
              <img className="object-contain w-[70%] flex-1 mx-auto" src="/merc1.jpeg" alt="battery img" />
              <div className="mt-auto font-bold">320 AED</div>
            </div>

            <div className="bg-white flex flex-col p-3 rounded-lg">
              <img className="object-contain w-[70%] flex-1 mx-auto" src="/merc2.jpeg" alt="battery img" />
              <div className="mt-auto font-bold">190 AED</div>
            </div>
          </>
        );
    }
  }

  return (
    <main className="p-3">
      <h2 className="font-bold text-white text-xl mb-5">{data.type + " " + data.model + " " + "Batteries"} </h2>
      <section className="grid gap-7 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] min-h-screen md:grid-cols-[repeat(2,_minmax(300px,_1fr))] lg:grid-cols-[repeat(4,_minmax(300px,_1fr))] auto-rows-[300px]">
        {renderBattery()}
      </section>
    </main>
  );
}

export { Battery };
