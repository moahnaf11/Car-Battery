import { useState } from "react";
function Shop() {
  const [data, setData] = useState({
    type: "",
    model: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white min-w-[90%] sm:min-w-[70%] flex flex-col gap-3 p-3 rounded-lg shadow-lg shadow-white"
        action=""
      >
        <h1 className="font-bold">Search for a battery</h1>
        <div className="flex flex-col">
          <label htmlFor="type">
            Car Type <span className="text-red-800">*</span>
          </label>
          <select name="type" id="type" className="border-black border-2">
            <option value="toyota">Toyota</option>
            <option value="bmw">BMW</option>
            <option value="mercedes">Mercedes</option>
            <option value="nissan">Nissan</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="model">
            Model <span className="text-red-800">*</span>
          </label>
          <input
            className="border-black border-2 px-1"
            type="number"
            id="model"
            name="model"
            min={2010}
            max={2024}
          />
        </div>

        <div className="flex">
          <button
            className="flex-1 bg-green-700 rounded-full px-3 py-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}

export { Shop };
