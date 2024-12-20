import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Shop() {
  const [data, setData] = useState({
    type: "",
    model: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setData((prev) => {
      const updatedData = {
        ...prev,
        [e.target.name]: e.target.value,
      };
      return updatedData;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (data.type) {
      navigate("/battery", { state: { data } });
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white min-w-[90%] sm:min-w-[70%] flex flex-col gap-3 p-3 rounded-lg shadow-lg shadow-white"
        action=""
      >
        <h1 className="font-bold font-custom">Search for a battery</h1>
        <div className="flex flex-col">
          <label htmlFor="type">
            Car Type <span className="text-red-800">*</span>
          </label>
          <select
            name="type"
            id="type"
            value={data.type}
            onChange={(e) => handleChange(e)}
            className="border-black border-2"
          >
            <option value="">Select Car Type</option>
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
            value={data.model}
            onChange={(e) => handleChange(e)}
            placeholder="2010"
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
